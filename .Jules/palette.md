## 2026-05-06 - [Enhanced Help Menu Scannability]
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces where visual search is the primary mode of navigation. Providing a total command count in the header offers immediate feedback on the bot's scale.
**Action:** Always sort command lists alphabetically and provide a summary count when displaying multiple options to the user.

## 2026-05-06 - [Centralized Error Feedback]
**Learning:** Hardcoded error messages in core logic (like BotsApp.ts) lead to inconsistent UX when they drift from the definitions in the strings database. Centralizing these in lib/db.ts and using dynamic prefix extraction ensures a consistent and "magic" feel across all entry points.
**Action:** Use centralized string templates for common bot responses and ensure they support dynamic prefix injection.
