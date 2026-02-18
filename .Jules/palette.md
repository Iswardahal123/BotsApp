## 2025-05-14 - [Command Suggestions "Did you mean?"]
**Learning:** For bot/CLI interfaces, providing suggestions for mistyped commands significantly improves UX and reduces user frustration. A Levenshtein distance of <= 2 is a good threshold for command names.
**Action:** Implement 'Did you mean?' logic in the command dispatcher when a command is not found.
