## 2025-05-14 - Alphabetical Sorting for Chat Bot Menus
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces where visual search is the primary mode of navigation.
**Action:** Always sort menus by default unless usage frequency warrants otherwise.

## 2025-05-14 - Robust Prefix Extraction from Regex
**Learning:** When command prefixes are defined as a character set regex (e.g., `^[.!]`), using `replace(/[\\^\\\[\\\]]/g, "")` is a robust way to extract the actual characters for use in help text and error messages.
**Action:** Use this pattern to ensure bot instructions remain accurate even when users customize their command prefix.
