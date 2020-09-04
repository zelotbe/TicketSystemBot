const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./botconfig.json');
const color = require('./colors.json');
const superagent = require("superagent");
const fs = require("fs");

bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded`);
  bot.commands.set(props.help.name, props);
  });
});


bot.on('ready', async () => {
  console.log(`I'm online`);
   bot.user.setActivity("My prefix is: '>'", {type: "PLAYING"});
});

bot.on('message', async message => {
  if (message.author.bot || message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let woord = messageArray;
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}hello`){
    return message.channel.send("Hello");
  }

  if (cmd === `${prefix}cat`){
    let msg = await message.channel.send("Robots are handling your request...");

    let {body} = await superagent
    .get("http://aws.random.cat/meow")
    //console.log(body.file)
    if(!{body}) return message.channel.send("The robots did a clumsy job, please try again.")
    let catembed = new Discord.RichEmbed()
    .setColor(color.geel)
    .setAuthor("Testbot", message.guild.iconURL)
    .setImage(body.file)
    .setTimestamp()
    .setFooter("Test bot", bot.user.displayAvatarURL0)
    message.channel.send({embed: catembed});
    msg.delete();
  }
  if (cmd === `${prefix}wouter`){
    let msg = await message.channel.send("Robots are handling your request...");

    let wouterembed = new Discord.RichEmbed()
    .setColor(color.geel)
    .setAuthor("Testbot", message.guild.iconURL)
    .setImage("https://i.imgur.com/sy5A9ek.jpg")
    .setTimestamp()
    .setFooter("Test bot", bot.user.displayAvatarURL0)
    message.channel.send({embed: wouterembed});
    msg.delete();
  }
  if(woord === "wouter"){
    return message.channel.send("Bedoel je Wouter, de meisjes fixer?");
  }
  if (cmd === `${prefix}help`){
    return message.channel.send("Hello");
  }

});

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('718385959196033104').send("Welkom in hel " + member+ ".\nPas op voor Wouter, hij bijt!");
});

bot.login(config.token);
