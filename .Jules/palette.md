## 2025-05-14 - Standardizing Command Feedback and Dynamic Help
**Learning:** Hardcoded prefixes and command lists in help menus create a disconnect between the bot's actual state and its instructions. Alphabetical sorting significantly reduces cognitive load during visual search in chat interfaces.
**Action:** Use dynamic prefix extraction and command sorting in all help/interface modules. Standardize error strings in `lib/db.ts` to ensure UI consistency.
