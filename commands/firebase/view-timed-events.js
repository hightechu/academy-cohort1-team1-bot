// View Elements Module
module.exports = {
    // Name of Command
    name: 'view-timed-events',
    // Description of Command
    description: 'View all your events.',
    // Aliases
    aliases: ['vte'],
    // Execute Command - Paramenters: message, args, firebase
    execute(message, args, firebase) {
        if (args[0]) {
            return message.channel.send(`This command doesn't take any arguments!`);
        }

        // Create botMessage
        let botMessage = [];

        // Connect to Database
        let db = firebase.firestore();

        // Create Element Item
        function addBotMessage(date,event) {
            botMessage.push('\u200B');
            botMessage.push('> **Date:** ' + date);
            botMessage.push('> **Event:** ' + event);
        }

        // Send Message
        function sendMessage() {
            if (botMessage.length !== 0) {
                return message.channel.send(botMessage, { split: true });
            }
        }

        // Get All the Users Elements
        function getAllEvents() {
            db.collection(message.author.id).get().then((querySnapshot) => {
                if (querySnapshot.empty) {
                    return message.reply(`you don't have any current events.`);
                }

                botMessage.push('Your Events!');

                querySnapshot.forEach((doc) => {
                    if (doc.data().eventName && doc.data().eventDate) {
                            addBotMessage((doc.data().eventDate), (doc.data().eventName));
                    }

                        
                });
            }).then(() => {
                sendMessage();
            }).catch((error) => {
                console.log(error);
                return message.reply('Sorry, there was an error trying to view events.');
            });
        }

        // Get All Elements Promise
        const getAllEventsPromise = new Promise((resolve, _reject) => {
            resolve();
        });

        getAllEventsPromise.then(() => {
            getAllEvents();
        }).catch((error) => {
            console.log(error);
            return message.reply('Sorry, there was an error trying to view events.');
        });
    },
};
