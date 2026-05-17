## 2025-05-14 - Standardized Help and Error Feedback
**Learning:** In chat-based interfaces, users rely on consistent feedback and easy scannability. Alphabetical sorting of commands and a total command count in the help header provide immediate feedback on the bot's scale and make it easier to find specific commands. Standardizing invalid command error messages with the current prefix ensures users always know how to access help.
**Action:** Always sort command lists alphabetically and provide a summary (like total count) in the main menu. Ensure error messages that reference other commands use the current session's prefix dynamically.

## 2025-05-14 - String Consistency and Quality
**Learning:** Copy-paste errors in string templates (e.g., using "greetings" for a "goodbye" module) can confuse users and reduce the perceived quality of the interface. Accurate reporting of module states (True vs False) is critical for trust.
**Action:** Perform a thorough review of localized or centralized string files for copy-paste artifacts and logical consistency in status messages.
