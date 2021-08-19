//Require Discord.js
const Discord = require('discord.js');
// Hydration Module
module.exports = {
    // Command Name
    name: 'hydration',
    // Command Description
    description: 'Hydration reminder',
    // Guild - TRUE
    guildOnly: true,
    args: true,
    // Execute Command - Parameters: Message
    execute(message, arguments) {
        // Send Message
        if (arguments[0] == "stop") {
            clearInterval(arguments[1]);
            return message.channel.send('You have succesfully stopped the hydration command!')
        }
        let time = Number(arguments[0])
        message.channel.send(`Hey ${message.author} remember to drink some water!`);
        //Message Intervals
        const stoptime = setInterval(function () {
            const embed = new Discord.MessageEmbed()
                .setColor('#20C19E')
                .setTitle('')
                .setDescription(`Hey ${message.author} remember to drink some water! Stop this by typing in the command from below.`)
                .setFooter(`&hydration stop ${stoptime}`);
            message.channel.send(embed);
        }, time * 60 * 1 * 1000);

    }
}