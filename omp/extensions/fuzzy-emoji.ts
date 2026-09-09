import { type ExtensionAPI, settings } from "@oh-my-pi/pi-coding-agent";
import buckets from "./data/emojis.json" with { type: "json" };
import { type AutocompleteProvider, fuzzyFilter } from "@oh-my-pi/pi-tui";

// Catalogue from OMP's packages/coding-agent/src/modes/data/emojis.json
// (MIT). Bundle the data: compiled OMP does not expose internal JSON imports.
// Acceptance and inline replacement remain owned by the original provider.
const entries = Object.values(buckets).flat() as [string, string][];
const MAX_SUGGESTIONS = 12;

export default function fuzzyEmoji(pi: ExtensionAPI): void {
	pi.on("session_start", (_event, ctx) => {
		if (!ctx.hasUI) return;
		ctx.ui.addAutocompleteProvider(current => {
			const wrapped: AutocompleteProvider = {
				async getSuggestions(lines, cursorLine, cursorCol) {
					const original = await current.getSuggestions(lines, cursorLine, cursorCol);
					if (!settings.get("emojiAutocomplete")) return original;
					const text = (lines[cursorLine] ?? "").slice(0, cursorCol);
					const match = /(?:^|[ \t\r\n([{>])(:[a-zA-Z0-9_+-]+)$/.exec(text);
					if (!match) return original;
					const prefix = match[1]!;
					// Do not displace a higher-priority completion provider.
					if (original && original.prefix !== prefix) return original;
					const query = prefix.slice(1).toLowerCase();
					// Literal emoticons still lead; shortcode entries are ranked anew.
					const items = original?.items.filter(item => !item.label?.endsWith(":")) ?? [];
					const ranked = fuzzyFilter(entries, query, entry => entry[0]);
					// Exact shortcodes outrank fuzzy matches, including symbolic +1/-1.
					const exact = entries.find(entry => entry[0] === query);
					if (exact) ranked.unshift(exact);
					for (const [name, char] of ranked) {
						if (items.length >= MAX_SUGGESTIONS) break;
						const label = `${char}  :${name}:`;
						if (!items.some(item => item.label === label)) items.push({ value: char, label });
					}
					return items.length ? { items, prefix } : original;
				},
				applyCompletion: (lines, row, col, item, prefix) =>
					current.applyCompletion(lines, row, col, item, prefix),
			};
			if (current.getInlineHint) {
				wrapped.getInlineHint = (...args) => current.getInlineHint!(...args);
			}
			if (current.trySyncSlashCompletion) {
				wrapped.trySyncSlashCompletion = text => current.trySyncSlashCompletion!(text);
			}
			if (current.trySyncInlineReplace) {
				wrapped.trySyncInlineReplace = text => current.trySyncInlineReplace!(text);
			}
			if (current.getForceFileSuggestions) {
				wrapped.getForceFileSuggestions = (...args) => current.getForceFileSuggestions!(...args);
			}
			if (current.shouldTriggerFileCompletion) {
				wrapped.shouldTriggerFileCompletion = (...args) => current.shouldTriggerFileCompletion!(...args);
			}
			return wrapped;
		});
	});
}
