//Require Discord.js
const Discord = require('discord.js');
// EyeCheck Module
module.exports = {
    // Command Name
    name: 'eyecheck',
    // Command Description
    description: 'EyeCheck reminder',
    // Guild - TRUE
    guildOnly: true,
    // Execute Command - Parameters: Message
    execute(message, arguments) {
        // Send Message
        message.channel.send(`Hello ${message.author} make sure to look at something 20 feet away for 20 seconds!`);
        //Message Intervals
        const stoptime = setInterval(function () {
            const embed = new Discord.MessageEmbed()
                .setColor('#2ECC71')
                .setTitle('')
                .setDescription(`Hello ${message.author} make sure to look at something 20 feet away for 20 seconds! Stop this by typing in the command from below.`)
                .setFooter(`&eyecheck stop ${stoptime}`);
            message.channel.send(embed);
        }, 20 * 60 * 1 * 1000);

    }
}