// Ping Module
const Discord = require('discord.js');
module.exports = {
    // Name of Command
    name: 'status',
    // Description of Command
    description: 'Shows the status of the bots. Same thing as: status, showstatus, s',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 5,
    // Execute Command - Parameters: message
    execute(message) {
        const embed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Show Status')
        .setAuthor('ChangeItLater')
        .setDescription('Shows the status of the bot and the server.')
        .setThumbnail('')
        .addFields(
            { name: 'Status', value: 'The bot and server is doing dandy!' },
            { name: 'server-status', value: 'Working!', inline: true },
            { name: 'Bot-status', value: 'Working!', inline: true },
        )
        .setTimestamp()
        .setFooter('Made by Humberto, Kyle, Concrad, Bilal');
        // Send Message
        message.channel.send(embed);
    },
};