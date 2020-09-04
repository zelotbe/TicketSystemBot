const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let argst = messageArray.slice(1);
	let com = command.toLowerCase();
  let ment = message.mentions.users.first();
	if(!ment) {
			message.channel.send('Please mention a user!')
		}
  let avatar = ment.avatarURL();
  var game = ment.presence.game;

  let userembed = new Discord.MessageEmbed()
  .setTitle("User information")
  .setColor("#f44242")
  .setThumbnail(avatar)
  .addField("Username", ment.tag, true)
  .addField("User ID", ment.id, true)
  .addField("Status", ment.presence.status, true)
  .addField("Created at", ment.createdAt)
  return message.channel.send(userembed);
};

exports.help = {
  name: 'userinfo',
  description: 'Shows information about the user',
  usage: 'userinfo [user]'
};
