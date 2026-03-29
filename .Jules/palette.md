## 2026-03-29 - [Standardized Help & Dynamic Prefixes]
**Learning:** Hardcoding command prefixes in help strings makes the UI inconsistent if the bot configuration changes. Sorting commands alphabetically and providing a summary count improves menu discoverability.
**Action:** Use placeholders for prefixes in string templates and centralize prefix extraction logic; ensure all UI-facing strings (including extended descriptions) are formatted before display.
