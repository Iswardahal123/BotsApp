## 2025-05-15 - Enhanced Help Menu Scannability
**Learning:** Alphabetical sorting of command lists significantly improves scannability in chat-based interfaces where visual search is the primary mode of navigation. Providing a total command count in the header offers immediate feedback on the bot's scale.
**Action:** Always sort command lists alphabetically and include metadata like total count to improve user orientation.

## 2025-05-15 - Misleading Command Feedback
**Learning:** Visual feedback (like a magic wand emoji) for command execution should only be triggered after verifying the command exists to avoid misleading users when they enter an invalid input.
**Action:** Move reaction/feedback logic after command validation.
