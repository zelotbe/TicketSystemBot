const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

let icon = bot.user.displayAvatarURL();
let botembed = new Discord.MessageEmbed()
.setDescription("Ticket System")
.setColor("#f44242")
.setThumbnail(icon)
.addField("Bot Name", bot.user.username)
.addField("Made on", bot.user.createdAt)
.addField("Server name:", message.guild.name)
.addField("Server owner:", message.guild.owner)
return message.channel.send(botembed);
};
exports.help = {
  name: 'info',
  description: 'Get the bot\'s info',
  usage: 'info'
};
