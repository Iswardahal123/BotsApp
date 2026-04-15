## 2025-05-15 - [Alphabetical Menu Sorting]
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces where visual search is the primary mode of navigation.
**Action:** Always sort command menus by default unless usage frequency warrants a different ordering.

## 2025-05-15 - [Robust Prefix Extraction]
**Learning:** Extracting character sets from regex-like strings (e.g., `config.PREFIX`) requires robust sanitization to prevent UI "leaks" of regex meta-characters.
**Action:** Use `.replace(/[\\^\\\[\\\]]/g, "")` when converting prefix regex strings into displayable characters.
