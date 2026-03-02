## 2025-05-14 - Incorrect NaN Comparison Pattern
**Learning:** The project uses `parseInt(...) === NaN` for numeric validation in several modules. This is logically incorrect in JavaScript/TypeScript as `NaN === NaN` is always false. This leads to broken error handling where users don't receive the intended syntax error messages.
**Action:** Use `isNaN(parseInt(...))` instead for reliable numeric validation and better user feedback.
