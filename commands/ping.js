/*
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
*/

const { SlashCommandBuilder } = require("@discordjs/builders");
const { CommandInteraction } = require("discord.js");

module.exports = {
      data: new SlashCommandBuilder().setName("ping").setDescription("Renvoie le nombre de ping"),
      /**
       *
       * @param {CommandInteraction} interaction
       */
      async execute(interaction) {
            await interaction.reply("pong");
            const message = await interaction.fetchReply();
            return interaction.editReply(
                  `\n
                  Le message a mis ${
                        message.createdTimestamp - interaction.createdTimestamp
                  }ms pour me parvenir/ te revenir. \n ton ping est de ${interaction.client.ws.ping}`
            );
      },
};
