/*
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
*/

const { SlashCommandBuilder } = require("@discordjs/builders");
const { CommandInteraction } = require("discord.js");

module.exports = {
      data: new SlashCommandBuilder().setName("youtube").setDescription("Renvoie un lien vers une chaine youtube"),
      /**
       *
       * @param {CommandInteraction} interaction
       */
      async execute(interaction) {
            const row = new MessaceActionRow()
                .addComponents(new MessageButton()
                    .setLabel("YouTube")
                    .setStyle("LINK")
                    .setURL("https://www.youtube.com/")
            );

            await interaction.reply({ content: "Clique", components: [row] });
      },
};
