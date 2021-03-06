const { MessageEmbed } = require('discord.js');
const prettyMilliseconds = require('pretty-ms');

module.exports.run = async (bot, message, args) => {
    let user = await bot.fetchUser(message.author.id);
    if ((Date.parse(user.dailyStreak) + 86400000) > Date.now()) {
        const embed = new MessageEmbed()
            .setTitle('Cooldown')
            .setDescription(`Woah there, you need to wait \`${prettyMilliseconds((Date.parse(user.dailyStreak) + 86400000) - Date.now())}\` before using this command again.
            
            The default cooldown on this command is \`1d\``)
            .setColor(0x3c54b4);
        return message.channel.send(embed);
    } else {
        user.dailyStreak = new Date(Date.now());
        user.coinsInWallet += 1000;
        user.save();
        const claimed = new MessageEmbed()
            .setTitle('Gave you 1000 coins.')
            .setDescription('Use this command in \`24h\` to claim your daily reward again!')
            .setColor('RANDOM');
        message.channel.send(claimed);
    }
}

module.exports.config = {
    name: 'daily', // Command Name
    description: 'Daily Reward.', // Description
    usage: 'h daily', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 0.1 // Command Cooldown
}
