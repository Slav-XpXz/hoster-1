module.exports = {
    name: "kick",
    description: "kick member",
    execute(message, args)
    {
        const member = message.mentions.users.first();
        if (message.member.roles.cache.some(role => role.name === 'Staff')) {

        if(member)
        {
            try
            {
                const target = message.guild.members.cache.get(member.id);
                target.kick();
                message.channel.send(`${member.tag} has been kicked, what an L :skull:`)
            }
            catch
            {
                message.channel.send("Could not kick retard :disappointed_relieved: ")
            }
        }
        else{
            message.channel.send("What are you trying to kick retard? :skull:")
        }
        }
        else
        {
            message.channel.send("Retard you don't have perms :skull:")
        }

    }
}
