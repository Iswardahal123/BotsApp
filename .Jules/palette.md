## 2025-05-14 - [Alphabetical Sorting for Chat Menus]
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces where visual search is the primary mode of navigation. Providing a total command count in the header offers immediate feedback on the bot's scale.
**Action:** Always sort menus by default unless usage frequency warrants otherwise.

## 2025-05-14 - [Robust Dynamic Prefix Detection]
**Learning:** Relying on brittle regex splits or hardcoded strings for UI instructions (like command examples) causes runtime crashes when configurations vary. Extracting the active prefix from the configuration ensures the UI remains accurate and functional.
**Action:** Use robust logic like `config.PREFIX.match(/\[(.*)\]/)?.[1] || config.PREFIX.replace('^', '')` to extract user-facing prefixes.
