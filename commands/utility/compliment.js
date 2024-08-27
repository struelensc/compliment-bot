const { SlashCommandBuilder } = require("discord.js");
const compliments = require("../../complimentList.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("compliment")
    .setDescription("Compliment the requested user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to compliment")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");

    const compliment =
      compliments[Math.floor(Math.random() * compliments.length)];

    await interaction.reply(`${user}, ${compliment}`);
  },
};
