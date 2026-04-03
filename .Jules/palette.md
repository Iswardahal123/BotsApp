## 2025-05-14 - [Alphabetical Sorting for Chat Menus]
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces where visual search is the primary mode of navigation.
**Action:** Always sort menus by default unless usage frequency warrants otherwise.

## 2025-05-14 - [Dynamic Header Statistics]
**Learning:** Providing a "Total Commands" count in the help header gives users an immediate sense of the bot's capabilities and scope.
**Action:** Include brief overview statistics in entry-point menus.

## 2025-05-14 - [Standardized Error Feedback]
**Learning:** Using a centralized string repository (lib/db.ts) for bot responses ensures consistent UX across different modules and makes maintenance easier.
**Action:** Avoid hardcoding strings in modules; use a central DB and dynamic formatting placeholders.
