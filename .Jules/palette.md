## 2026-03-21 - Standardized Input Validation
**Learning:** Using `parseInt(...) === NaN` is a common but incorrect pattern in this codebase for numeric validation.
**Action:** Use `isNaN(parseInt(...))` for robust numeric validation across all modules.
