const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let argst = messageArray.slice(1);
	let com = command.toLowerCase();
  let ment = message.mentions.users.first();
  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
	if(!ment) {
    let avatar = message.author.avatarURL();
    let user1embed = new Discord.MessageEmbed()
    .setDescription("Gebruikersinformatie")
    .setColor(`${getRandomColor()}`)
    .setThumbnail(avatar)
    .addField("Username", message.member, true)
    .addField("User ID", message.member.id, true)
    .addField("Status", message.member.presence.status, true);
    return message.channel.send(user1embed);
		}
  let avatar = ment.avatarURL();
  var game = ment.presence.game;

  let userembed = new Discord.MessageEmbed()
  .setTitle("User information")
  .setColor(`${getRandomColor()}`)
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
