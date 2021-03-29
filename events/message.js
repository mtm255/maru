const { MessageEmbed } = require("discord.js");
const prefix = ("//")

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content === "<@820526612713177108>")
    return message.channel.send("My prefix is `//` !");

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (!cmd) return;
  cmd.run(client, message, args);
};