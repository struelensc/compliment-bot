const { SlashCommandBuilder } = require("discord.js");

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

    await interaction.reply(`${user}, you're so pretty`);
  },
};
