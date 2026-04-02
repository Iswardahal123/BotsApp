import Strings from "../lib/db";
import format from "string-format";
import inputSanitization from "../sidekick/input-sanitization";
import config from "../config";
import Client from "../sidekick/client.js";
import BotsApp from "../sidekick/sidekick";
import { MessageType } from "../sidekick/message-type";
import { proto } from "@adiwajshing/baileys";
import Command from "../sidekick/command";
const HELP = Strings.help;

module.exports = {
    name: "help",
    description: HELP.DESCRIPTION,
    extendedDescription: HELP.EXTENDED_DESCRIPTION,
    demo: {isEnabled: false},
    async handle(client: Client, chat: proto.IWebMessageInfo, BotsApp: BotsApp, args: string[], commandHandler: Map<string, Command>): Promise<void> {
        try {
            const prefixes = config.PREFIX.replace(/[\\^\\\[\\\]]/g, "");
            const uniqueCommands = Array.from(new Set(commandHandler.values())).sort((a, b) => a.name.localeCompare(b.name));
            if(!args[0]){
                let helpMessage = format(HELP.HEAD, uniqueCommands.length.toString(), prefixes[0]);
                uniqueCommands.forEach(cmd => helpMessage += format(HELP.TEMPLATE, prefixes[0] + cmd.name, cmd.description));
                client.sendMessage(BotsApp.chatId, helpMessage, MessageType.text).catch(err => inputSanitization.handleError(err, client, BotsApp));
                return;
            }
            const command = commandHandler.get(args[0]);
            if(command){
                const triggers = prefixes.split("").map(p => p + command.name).join(" | ");
                const extDesc = command.extendedDescription.includes("{}") ? format(command.extendedDescription, prefixes[0]) : command.extendedDescription;
                if(command.demo?.isEnabled) {
                    const buttons = (Array.isArray(command.demo.text) ? command.demo.text : [command.demo.text]).map((text, i) => ({
                        buttonId: 'id' + i,
                        buttonText: { displayText: text.includes("{}") ? format(text, prefixes[0]) : text },
                        type: 1
                    }));
                    await client.sendMessage(BotsApp.chatId, { text: format(HELP.COMMAND_INTERFACE_TEMPLATE, triggers, extDesc) + HELP.FOOTER, buttons, headerType: 1 }, MessageType.buttonsMessage).catch(err => inputSanitization.handleError(err, client, BotsApp));
                    return;
                }
                client.sendMessage(BotsApp.chatId, format(HELP.COMMAND_INTERFACE_TEMPLATE, triggers, extDesc), MessageType.text).catch(err => inputSanitization.handleError(err, client, BotsApp));
                return;
            }
            client.sendMessage(BotsApp.chatId, format(HELP.ERROR_MSG, prefixes[0]), MessageType.text).catch(err => inputSanitization.handleError(err, client, BotsApp));
        } catch (err) {
            await inputSanitization.handleError(err, client, BotsApp);
        }
    },
};
