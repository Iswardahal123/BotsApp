## 2025-05-15 - Alphabetical Command Sorting
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces where visual search is the primary mode of navigation.
**Action:** Always sort menus by default unless usage frequency warrants otherwise.

## 2025-05-15 - Robust Prefix Extraction
**Learning:** Extracting character sets from regex-like configuration strings requires careful sanitization to ensure accurate UI feedback and trigger generation.
**Action:** Use `.replace(/[\\^\\\[\\\]]/g, "")` to extract clean character sets from prefix regex strings.
