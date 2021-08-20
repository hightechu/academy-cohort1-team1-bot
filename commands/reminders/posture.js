//Require Discord.js
const Discord = require('discord.js');
// Posture Module
module.exports = {
    // Command Name
    name: 'posture',
    // Command Description
    description: 'Posture reminder',
    // Guild - TRUE
    guildOnly: true,
    args: true,
    // Execute Command - Parameters: Message
    execute(message, arguments) {
        // Send Message
        if (arguments[0] == "stop") {
            clearInterval(arguments[1]);
            return message.channel.send('You have succesfully stopped the posture check command!')
        }
        let time = Number(arguments[0])
        message.channel.send(`Hey ${message.author} remember to sit up straight and fix your posture!`);
        //Message Intervals
        const stoptime = setInterval(function () {
            const embed = new Discord.MessageEmbed()
                .setColor('#E74C3C')
                .setTitle('')
                .setDescription(`Hey ${message.author} remember to Sit up straight and fix your posture! Stop this by typing in the command from below.`)
                .setFooter(`&posture stop ${stoptime}`);
            message.channel.send(embed);
        }, time * 60 * 1 * 1000);

    }
}