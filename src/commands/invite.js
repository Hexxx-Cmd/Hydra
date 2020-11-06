const { MessageEmbed } = require('discord.js')
module.exports.run = async (bot, message, args) => {
    const InviteEmbed = new MessageEmbed()

        .setTitle(bot.user.tag)
        .setDescription(`Hydra+ is a fun economy bot with various Items and is easy to use. 
    [Invite](https://discord.com/oauth2/authorize?client_id=679710920334639115&scope=bot&permissions=19456) Hydra+ to your server today!\nYou can also hangout in our [Discord Server](https://discord.gg/XqezQaK)`)
        //.setFooter(`Tip: you can vote our bot and gain 4,000 coins for free.`)
        //.setURL(`https://top.gg/bot/752061324682461255`)
        .setThumbnail(bot.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setColor('#81bcfc')
    message.channel.send(InviteEmbed)
}

module.exports.config = {
    name: 'invite', // Command Name
    description: 'Invite command.', // Description
    usage: 'h invite', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 3 // Command Cooldown
}