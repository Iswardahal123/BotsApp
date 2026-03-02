import got from "got";
import inputSanitization from "../sidekick/input-sanitization";
import STRINGS from "../lib/db";
import format from "string-format";
import Client from "../sidekick/client";
import { proto } from "@adiwajshing/baileys";
import BotsApp from "../sidekick/sidekick";
import { MessageType } from "../sidekick/message-type";

module.exports = {
    name: "ud",
    description: STRINGS.ud.DESCRIPTION,
    extendedDescription: STRINGS.ud.EXTENDED_DESCRIPTION,
    demo: { isEnabled: true, text: ".ud bruh" },
    async handle(client: Client, chat: proto.IWebMessageInfo, BotsApp: BotsApp, args: string[]): Promise<void> {
        const processing = await client.sendMessage(
            BotsApp.chatId,
            STRINGS.ud.PROCESSING,
            MessageType.text
        );
        try {
            var text: string = "";
            if (args.length == 0) {
                client.sendMessage(
                    BotsApp.chatId,
                    STRINGS.ud.NO_ARG,
                    MessageType.text
                ).catch(err => inputSanitization.handleError(err, client, BotsApp));
                return;
            } else {
                text = args.join(" ");
            }

            const url = `https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(text)}`;
            const Response: any = await got(url).json();
            const list = Response.list;

            if (!list || list.length === 0) {
                throw new Error("Not Found");
            }

            let result = list.reduce(function (prev, current) {
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

            await client.deleteMessage(BotsApp.chatId, {
                id: processing.key.id,
                remoteJid: BotsApp.chatId,
                fromMe: true,
            });

            await client.sendMessage(BotsApp.chatId, msg, MessageType.text).catch(err => inputSanitization.handleError(err, client, BotsApp));
        } catch (err) {
            await inputSanitization.handleError(
                err,
                client,
                BotsApp,
                format(STRINGS.ud.NOT_FOUND, text)
            );
            return await client.deleteMessage(BotsApp.chatId, {
                id: processing.key.id,
                remoteJid: BotsApp.chatId,
                fromMe: true,
            });
        }
        return;
    },
};
