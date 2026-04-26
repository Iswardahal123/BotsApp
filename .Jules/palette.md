## 2025-05-14 - [Information Scannability in Chat Interfaces]
**Learning:** In chat-based bots with many commands, an unsorted list significantly increases cognitive load and search time. Alphabetical sorting is a low-cost, high-impact way to improve scannability. Providing a total count in the header gives users immediate feedback on the bot's scale.
**Action:** Always sort command lists alphabetically and provide summary statistics (like total counts) in help menus.

## 2025-05-14 - [Visual Feedback Accuracy]
**Learning:** Providing a "success" reaction (like a magic wand emoji) before validating a command creates a misleading user experience if the command eventually fails or is invalid. Visual feedback should only occur once the intent is verified.
**Action:** Ensure feedback reactions are triggered only after basic validation (e.g., command existence check) to maintain trust in the interface's state.
