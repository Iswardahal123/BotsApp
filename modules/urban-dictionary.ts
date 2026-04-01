import axios from "axios";
import inputSanitization from "../sidekick/input-sanitization";
import STRINGS from "../lib/db";
import format from "string-format";
import Client from "../sidekick/client";
import { proto } from "@adiwajshing/baileys";
import Sidekick from "../sidekick/sidekick";
import { MessageType } from "../sidekick/message-type";

export = {
    name: "ud",
    description: STRINGS.ud.DESCRIPTION,
    extendedDescription: STRINGS.ud.EXTENDED_DESCRIPTION,
    demo: { isEnabled: true, text: ".ud bruh" },
    async handle(client: Client, chat: proto.IWebMessageInfo, botsApp: Sidekick, args: string[]): Promise<void> {
        const processing = await client.sendMessage(
            botsApp.chatId,
            STRINGS.ud.PROCESSING,
            MessageType.text
        );
        try {
            var text: string = "";
            if (args.length == 0) {
                client.sendMessage(
                    botsApp.chatId,
                    STRINGS.ud.NO_ARG,
                    MessageType.text
                ).catch(err => inputSanitization.handleError(err, client, botsApp));
                return;
            } else {
                text = args.join(" ");
            }

            let response = await axios.get(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(text)}`);
            let results = response.data.list;

            if (!results || results.length === 0) {
                throw new Error("No results found");
            }

            let result = results.reduce(function (prev, current) {
                return prev.thumbs_up + prev.thumbs_down >
                    current.thumbs_up + current.thumbs_down
                    ? prev
                    : current;
            });

            result.definition = result.definition.replace(/\[/g, "_");
            result.definition = result.definition.replace(/\]/g, "_");
            result.example = result.example.replace(/\[/g, "_");
            result.example = result.example.replace(/\]/g, "_");

            let msg =
                "*Word :* " +
                result.word +
                "\n\n*Meaning :*\n" +
                result.definition +
                "\n\n*Example:*\n" +
                result.example +
                "\n〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️\n👍" +
                result.thumbs_up +
                "  👎" +
                result.thumbs_down;

            await client.deleteMessage(botsApp.chatId, {
                id: processing.key.id,
                remoteJid: botsApp.chatId,
                fromMe: true,
            });

            await client.sendMessage(botsApp.chatId, msg, MessageType.text).catch(err => inputSanitization.handleError(err, client, botsApp));
        } catch (err) {
            await inputSanitization.handleError(
                err,
                client,
                botsApp,
                format(STRINGS.ud.NOT_FOUND, text)
            );
            return await client.deleteMessage(botsApp.chatId, {
                id: processing.key.id,
                remoteJid: botsApp.chatId,
                fromMe: true,
            });
        }
        return;
    },
};
