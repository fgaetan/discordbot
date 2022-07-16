/*
import { fs } from "fs";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { clientId, guildId, token } from "./config.json" assert { type: "json" };
*/

const fs = require('fs')
const { REST } = require('@discordjs/rest')
const { Routes } = require ('discord-api-types/v10')
const { clientId, guildId, token } = require('./config.json')

const commands = [];
const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
      try {
            await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
            console.log("Commandes enregistrees");
      } catch (error) {
            console.error(error);
      }
})();
