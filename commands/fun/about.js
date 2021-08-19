// Require Discord.js
const Discord = require('discord.js');

// about Module
module.exports = {
    // Name of Command
    name: 'about',
    // Description of Command
    description: 'about the bot and github repo',
    // Aliases
    aliases: ['cil'],
    // Execute Commnad - Paramenters: message
    execute(message) {
        // Create Embed
        const embed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('About us')
            .setURL('')
            .setAuthor('ChangeItLater', '', '')
            .setDescription('we are a open-source bot made by Humberto, Concrad, Kyle, Bilal. Also HighTechU since they made this super complex code that I have no idea what it means but copying made it easy(-Humberto).')
            .setThumbnail('https://pbs.twimg.com/profile_images/1349456985557757967/cUPt5g5F_400x400.jpg')
            .addFields(
                { name: 'GitHub Repo', value: 'Our github repo is: https://github.com/hightechu/academy-cohort1-team1-bot' },
            )
            .setTimestamp()
            .setFooter('Powered by the kind people of hightechu!', 'https://hightechu.ca/wp-content/uploads/2019/09/logo-2-150x150.png');
            
     
            // Send Message
        message.channel.send(embed);
    },
};