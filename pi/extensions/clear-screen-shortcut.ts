import { CustomEditor, type ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { matchesKey } from "@earendil-works/pi-tui";

type ClearableTui = {
  addInputListener?: (listener: (data: string) => { consume?: boolean } | undefined) => () => void;
  children?: Array<{ clear?: () => void }>;
  requestRender(force?: boolean): void;
};

function clearScreen(tui: ClearableTui) {
  // A forced TUI redraw alone clears the terminal, then immediately redraws the
  // entire conversation, which looks like nothing happened. Clear the visible
  // containers above the editor first so Ctrl+L behaves like a terminal clear:
  // the session remains intact, but old on-screen messages are hidden until a
  // reload/rebuild.
  const children = tui.children ?? [];
  const keepTail = 3; // editor container, below-editor widget spacer, footer
  const clearThrough = Math.max(0, children.length - keepTail);

  for (let i = 0; i < clearThrough; i += 1) {
    children[i]?.clear?.();
  }

  tui.requestRender(true);
}

class ClearScreenEditor extends CustomEditor {
  handleInput(data: string): void {
    if (matchesKey(data, "ctrl+l")) {
      clearScreen(this.tui);
      return;
    }

    super.handleInput(data);
  }
}

export default function (pi: ExtensionAPI) {
  let rawInputUnsubscribe: (() => void) | undefined;

  function installRawInputShortcut(tui: ClearableTui) {
    if (rawInputUnsubscribe || !tui.addInputListener) return;

    rawInputUnsubscribe = tui.addInputListener((data) => {
      if (!matchesKey(data, "ctrl+l")) return;
      clearScreen(tui);
      return { consume: true };
    });
  }

  pi.on("session_start", (_event, ctx) => {
    const previousEditor = ctx.ui.getEditorComponent();

    ctx.ui.setEditorComponent((tui, theme, keybindings) => {
      installRawInputShortcut(tui);

      if (previousEditor) {
        const editor = previousEditor(tui, theme, keybindings) as ReturnType<typeof previousEditor> & {
          handleInput?: (data: string) => void;
        };
        const originalHandleInput = editor.handleInput?.bind(editor);

        if (originalHandleInput) {
          editor.handleInput = (data: string) => {
            if (matchesKey(data, "ctrl+l")) {
              clearScreen(tui);
              return;
            }
            originalHandleInput(data);
          };
        }

        return editor;
      }

      return new ClearScreenEditor(tui, theme, keybindings);
    });
  });

  pi.on("session_shutdown", () => {
    rawInputUnsubscribe?.();
    rawInputUnsubscribe = undefined;
  });
}
