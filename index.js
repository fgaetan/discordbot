/*
userID
997677782878388265
-
token
OTk3Njc3NzgyODc4Mzg4MjY1.GNxtQA.fBiF4qRHoHCUX5HP3pWKSAAFYIKUX3uu62cmH4
-
lien invite
https://discord.com/api/oauth2/authorize?client_id=997677782878388265&permissions=8&scope=bot
*/

/*
import { readdirSync } from "fs";
import Client from "discord.js";
import Collection from "discord.js";
import { token } from "./config.json" assert {type: "json"};
*/

const fs = require("fs");
const { Client, Collection } = require("discord.js");
const token = require("./config.json");
const handleCommand = require("./helpers/command");

const client = new Client({
      intents: ["GUILDS"],
});

client.commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      client.commands.set(command.data.name, command);
}

client.once("ready", () => {
      console.log("BOT READY !");
});

client.on("interactionCreate", async (interaction) => {
      if (interaction.isCommand()) handleCommand(client, interaction);
});

client.login('OTk3Njc3NzgyODc4Mzg4MjY1.G_tDRU.kL7hMf_3GfufihKglxmINf6cAnYVNfecZB1w9w');
