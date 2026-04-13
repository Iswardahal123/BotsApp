## 2026-04-13 - [Alphabetical Sorting for Chat Menus]
**Learning:** In chat-based interfaces where visual search is the primary mode of navigation, alphabetical sorting significantly improves scannability over random or insertion-order lists.
**Action:** Always sort menus by default unless usage frequency warrants a different ordering.

## 2026-04-13 - [Robust Prefix Extraction]
**Learning:** Extracting character sets from regex-like strings (e.g., config.PREFIX) requires robust handling to avoid 'placeholder leaks' in the UI.
**Action:** Use `replace(/[\\^\\\[\\\]]/g, "")` to strip regex decorators when displaying prefixes to users.
