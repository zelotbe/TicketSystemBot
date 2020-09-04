const Discord = require("discord.js");
let prefix =  "+";
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    let icon = client.user.displayAvatarURL();
    let helpembed = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription(`Usage: ${prefix}help **command**`)
    .setColor("#6ca1e4")
    .setThumbnail(icon)
    .addField("Commands",`${client.commands.map(c => `**${prefix}${c.help.name}**${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`)
    return message.channel.send(helpembed);
    message.channel.send(`= Commands =\n\n[ ${prefix}help <commando> voor info]\n\n${client.commands.map(c => `${prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      let icon = client.user.displayAvatarURL();
      let commandembed = new Discord.MessageEmbed()
      .setTitle(`${command.help.name}`)
      .setColor("#6ca1e4")
      .setThumbnail(icon)
      .addField(`Description `, `${command.help.description}`)
      .addField("Usage",`${prefix}${command.help.usage}`, true)
      return message.channel.send(commandembed);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Gives you this list.',
  usage: 'help [commando]'
};
