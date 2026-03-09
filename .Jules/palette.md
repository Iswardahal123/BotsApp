## 2025-03-09 - Alphabetical Help Menu and Command Count
**Learning:** Organizing bot commands alphabetically significantly improves scannability when the command list grows large. Adding a total command count provides immediate feedback on the bot's capabilities.
**Action:** Always sort dynamic command lists alphabetically and include a summary count in the header for better UX.

## 2025-03-09 - Robust Regex Prefix Extraction
**Learning:** Brittle regex extraction of command prefixes (e.g. `/\/\^\[(.*)+\]\/\g/g`) can easily break if the prefix configuration changes format.
**Action:** Use direct string manipulation or more permissive regex (e.g. `replace(/[\\^\[\]]/g, "")`) when extracting characters from a regex-like configuration string.
