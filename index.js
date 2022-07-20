
const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require('fs');
const { type } = require("os");
const prefix = "$"
const config = require("./config.json");

client.once("ready", ()=>{
    console.log("I like trains")
    client.user.setActivity("League of Legends");
})



client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}





client.on("messageCreate", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'verify' && message.channel.name.toLowerCase() === 'verify'){
        client.commands.get('verify').execute(message, args);
    }
    if(command === 'verify' && message.channel.name.toLowerCase() != 'verify')
    {
        client.commands.get('!verify').execute(message, args);
    }
    if(command === 'ban')
    {
        client.commands.get('ban').execute(message, args);
    }
    if(command === 'kick')
    {
        client.commands.get('kick').execute(message, args);
    }

});






client.login(config.token);
