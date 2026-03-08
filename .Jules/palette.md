## 2026-03-08 - Alphabetical Sorting and Command Count in Help
**Learning:** Sorting long lists of commands alphabetically significantly improves scannability and discoverability for users familiar with command names. Providing a summary count in the header gives users an immediate sense of the bot's scale and capabilities.
**Action:** Always sort dynamic command lists alphabetically and consider adding a summary/count to the navigation/help headers.

## 2026-03-08 - Proper Numeric Validation in Command Handlers
**Learning:** Using `parseInt(...) === NaN` is a common but fatal logic error in JavaScript/TypeScript as `NaN` is not equal to itself. This prevents input validation error messages from ever being shown to the user, leading to a confusing UX when the bot silently fails or behaves unexpectedly.
**Action:** Use `isNaN(parseInt(...))` for numeric validation to ensure users receive immediate and helpful feedback for invalid inputs.
