const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');



module.exports = {
    name: "verify",
    description: "verify",
    execute(message, args){


        const role = message.guild.roles.cache.get("998791039257149522");

        message.member.roles.add(role.id).catch(err => console.log(err));

        message.reply(`Verifying ${message.author}...`)

        const Embed = new MessageEmbed()
        .setTitle("Verifed!")
        .setDescription(`You are now verifed ${message.author}!`)

        message.channel.send({ embeds: [Embed] });
    }
}
