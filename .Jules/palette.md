## 2025-05-14 - Centralized Dynamic Strings
**Learning:** Centralizing bot response strings in `lib/db.ts` and using the `string-format` library with `{}` placeholders allows for consistent UX while supporting dynamic content injection. This maintains a clean separation between UI copy and application logic.
**Action:** Utilize the `{}` placeholder pattern in `lib/db.ts` for all dynamic bot responses to ensure consistency and facilitate future internationalization or copy updates.
