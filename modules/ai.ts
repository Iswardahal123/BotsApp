import axios from "axios";
import inputSanitization from "../sidekick/input-sanitization";
import STRINGS from "../lib/db";
import Client from "../sidekick/client";
import { proto } from "@adiwajshing/baileys";
import Sidekick from "../sidekick/sidekick";
import { MessageType } from "../sidekick/message-type";

export = {
    name: "ai",
    description: STRINGS.ai.DESCRIPTION,
    extendedDescription: STRINGS.ai.EXTENDED_DESCRIPTION,
    demo: { isEnabled: true, text: ".ai hello" },
    async handle(client: Client, chat: proto.IWebMessageInfo, botsApp: Sidekick, args: string[]): Promise<void> {
        if (args.length === 0) {
            await client.sendMessage(
                botsApp.chatId,
                STRINGS.ai.NO_ARG,
                MessageType.text
            ).catch(err => inputSanitization.handleError(err, client, botsApp));
            return;
        }

        const processing = await client.sendMessage(
            botsApp.chatId,
            STRINGS.ai.PROCESSING,
            MessageType.text
        );

        try {
            const message = args.join(" ");
            const response = await axios.get(`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(message)}`);
            const aiResponse = response.data.response;

            await client.deleteMessage(botsApp.chatId, {
                id: processing.key.id,
                remoteJid: botsApp.chatId,
                fromMe: true,
            });

            await client.sendMessage(
                botsApp.chatId,
                `*AI:* ${aiResponse}`,
                MessageType.text
            ).catch(err => inputSanitization.handleError(err, client, botsApp));
        } catch (err) {
            await client.deleteMessage(botsApp.chatId, {
                id: processing.key.id,
                remoteJid: botsApp.chatId,
                fromMe: true,
            });
            await inputSanitization.handleError(err, client, botsApp, "AI Assistant is currently unavailable.");
        }
    },
};
