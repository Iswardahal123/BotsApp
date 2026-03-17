## 2025-05-15 - [Corrected Numeric Input Validation Logic]
**Learning:** In JavaScript/TypeScript, the expression `parseInt(x) === NaN` is always `false` because `NaN` is not equal to itself. This common anti-pattern causes input validation to fail silently, preventing users from receiving helpful error feedback.
**Action:** Use `isNaN(parseInt(x))` or `Number.isNaN(parseInt(x))` for robust numeric validation to ensure users are correctly notified when their input is invalid.
