var dayjs = require('dayjs');
const Discord = require('discord.js');
dayjs().format();
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
module.exports = {
    name: 'add-timed-event',
    // Description of Command
    description: 'Add a timed event',
    //Aliases
    aliases: ['ate'],
    //Arguments TRUE
    args: true,
    
    usage: '[event]', 

    execute(message, args, firebase) {
        let db = firebase.firestore();
        
        var dateEvent = dayjs(args[0], 'MM-DD-YYYY');
        var nameEvent = args[1];
        for (i = 2; i < args.length; i++) {
            nameEvent = nameEvent + ' ' + args[i];
        }
        
        console.log(dateEvent);
        console.log(nameEvent);

        
        function addEvent() {
            db.collection(message.author.id).add({
                eventName: nameEvent,
                eventDate: dateEvent.format('MM-DD-YYYY'),
                eventAuthor: message.author.username
            }).then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
                message.channel.send("Event \"" + nameEvent + "\" has been added to your calendar");
            }).catch((error) => {
                console.error('Error adding document: ', error);
                return message.channel.send('Event Was Not Added!');
            });
        }

        addEvent();

        message.channel.send(`Hey ${message.author} you will be reminded of event "${nameEvent}" on ${dateEvent.subtract(1, 'day').format("MMMM DD YYYY")}`);
        //Message Intervals
        const reminder = setInterval(function () {
            const embed = new Discord.MessageEmbed()
                .setColor('#20C19E')
                .setTitle('')
                .setDescription(`Hey ${message.author} your event is happening tomorrow, on ${dateEvent.format("MMMM DD YYYY")}! Stop this by typing in the command from below.`)
                .setFooter('');
                clearInterval(reminder);
            return message.channel.send(embed);
        }, 1 * 60 * 1 * 1000);

    },

};