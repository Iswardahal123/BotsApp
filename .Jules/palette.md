## 2025-05-15 - [Help Menu & Feedback Optimization]
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces. Providing a total command count offers immediate feedback on the bot's scale. Delaying visual "success" indicators (like reactions) until after command validation prevents misleading users.
**Action:** Always sort lists alphabetically and include metadata like counts in headers. Ensure feedback (reactions/replies) only occurs after positive validation of user input.

## 2025-05-15 - [Dynamic Context in Messages]
**Learning:** Hardcoding command prefixes in help or error messages leads to "placeholder leaks" or incorrect instructions if the user changes their configuration. Extracting and using the actual prefix used in the trigger ensures instructions are always accurate.
**Action:** Use dynamic prefix extraction from config or input rather than hardcoded strings in templates.
