## 2026-05-12 - [Scannability and Robustness in Command Interfaces]
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces. Providing a total command count in the header offers immediate feedback on the bot's scale. Additionally, extracting command prefixes robustly from configuration (e.g., handling regex-like strings safely) prevents runtime crashes and ensures UI consistency.
**Action:** Always sort command lists alphabetically and use dynamic counts/prefixes in UI templates to ensure a polished and reliable user experience.
