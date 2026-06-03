## 2025-05-14 - [Centralized Prefix Feedback]
**Learning:** Hardcoding or duplicating command prefix extraction logic leads to inconsistent UI feedback and fragile error messages when the bot's configuration changes.
**Action:** Centralize prefix extraction in the core config and use named placeholders (e.g., `{prefix}`) in all user-facing strings to ensure triggers are always displayed accurately across help menus and error states.
