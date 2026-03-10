## 2025-05-15 - [Context-Aware Numeric Validation]
**Learning:** Using `isNaN(parseInt(...))` is the correct way to validate numeric input, but it must be context-aware. Blindly applying it to strings that may contain prefixes (like `@` or `+`) can lead to false validation failures. Validation should be performed on the cleaned data (e.g., after stripping prefixes).
**Action:** Always strip known non-numeric prefixes before performing numeric validation with `isNaN(parseInt(cleanedValue))`.
