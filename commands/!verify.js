const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "!verify",
    description: "!verify",
    execute(message, args){
        const Embed = new MessageEmbed()
        .setTitle(":x: That Command cannot be used here!")
        .setColor('#FF0000')

    }
}
