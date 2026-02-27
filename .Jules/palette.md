## 2025-05-14 - Alphabetical Sorting and Command Discovery
**Learning:** Organizing command lists alphabetically significantly reduces the cognitive load for users scanning for specific functionality. Additionally, providing a total count of items (like "Total Commands") gives users a better mental model of the system's scope.
**Action:** Always sort dynamic lists of features or commands alphabetically and provide summary statistics (like counts) in headers to improve interface scanability.

## 2025-05-14 - Boolean Logic for NaN Validation
**Learning:** The pattern `parseInt(x) === NaN` is a common but fatal logic error in JavaScript/TypeScript because `NaN === NaN` is always false. This breaks input validation silently.
**Action:** Always use `isNaN(parseInt(x))` or `Number.isNaN()` for validating numeric inputs to ensure robust error handling and a predictable user experience.
