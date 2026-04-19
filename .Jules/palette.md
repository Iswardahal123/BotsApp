## 2025-05-14 - Alphabetical Sorting for Command Menus
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces where visual search is the primary mode of navigation.
**Action:** Always sort menus by default unless usage frequency warrants otherwise.

## 2025-05-14 - Standardized Command Feedback
**Learning:** Standardizing "invalid command" feedback across the main entry point (BotsApp.ts) and the help module (help.ts) ensures UX consistency and reduces cognitive load for users when they encounter errors.
**Action:** Centralize UX strings and templates in a shared database (like lib/db.ts) to maintain consistency.
