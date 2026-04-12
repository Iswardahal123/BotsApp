# Palette Journal

## 2025-05-14 - Scannable and Dynamic Help Menus
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces where visual search is the primary mode of navigation. Additionally, dynamic prefix extraction ensures that help instructions remain accurate even if the user changes the bot's configuration, preventing friction and confusion.
**Action:** Always sort menu items by default and avoid hardcoding command prefixes in UI strings; instead, extract them dynamically from the application configuration.
