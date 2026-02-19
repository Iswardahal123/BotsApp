## 2025-05-14 - [Command Suggestions for Bots]
**Learning:** For command-based interfaces like WhatsApp bots, providing "Did you mean?" suggestions for slightly mistyped commands significantly improves UX by reducing frustration and providing immediate guidance without requiring the user to look up the full help menu.
**Action:** Implement a lightweight Levenshtein distance check when a command is not found, suggesting the closest match if it's within a small edit distance (e.g., 2).
