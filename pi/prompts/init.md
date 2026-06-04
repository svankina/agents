---
description: Instantiate a new pi agent variant as a reusable slash prompt
argument-hint: "<name> <purpose>"
---
Read `.pi/skills/pi-init/SKILL.md` and follow the `pi-init` skill to create a new project-local agent variant prompt, create/configure its Mattermost bot, and initialize git tracking in the target project directory.

Requested name and purpose:
$ARGUMENTS

Interpret the first argument as the explicit prompt name and the remaining arguments as the purpose. Create a reusable slash prompt with that name for this purpose, create or reuse a Mattermost bot for the variant, join it to `home` and `bots`, open it under my direct messages, run `git init` and `git add -A` in the directory where it was created, then report the file created, Mattermost bot status, git staging status, and how to invoke it. Do not create a backing skill unless I explicitly ask for one. If the name or purpose is empty, ask me for it.
