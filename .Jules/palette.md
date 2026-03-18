## 2025-05-14 - [Help Menu Sorting and Command Counting]
**Learning:** Users find it much easier to navigate long command lists when they are sorted alphabetically and provide a high-level overview (like a total count) of available features.
**Action:** Always implement alphabetical sorting for command/feature lists and include a summary count in help headers to improve discoverability and perceived value.

## 2025-05-14 - [Reliable Prefix Extraction]
**Learning:** Hardcoded prefixes or complex regex-based extraction for help menus can break if the user changes the bot's configuration. A robust character-set extraction ensures triggers are always accurate.
**Action:** Use `config.PREFIX.replace(/[\\^\\\[\\\]]/g, "")` to extract clean trigger characters from regex-based prefix configurations, ensuring consistent UX across different setups.
