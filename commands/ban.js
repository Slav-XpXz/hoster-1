module.exports = {
    name: "ban",
    description: "ban member",
    execute(message, args)
    {
        const member = message.mentions.users.first();
        if (message.member.roles.cache.some(role => role.name === 'Staff')) {

        if(member)
        {
            try
            {
                const target = message.guild.members.cache.get(member.id);
                target.ban();
                message.channel.send(`${member.id} has been banned, what an L :skull:`)
            }
            catch
            {
                message.channel.send("Could not kick retard :disappointed_relieved: ")
            }
        }
        else{
            message.channel.send("What are you trying to ban retard? :skull:")
        }
        }
        else
        {
            message.channel.send("Retard you don't have perms :skull:")
        }

    }
}