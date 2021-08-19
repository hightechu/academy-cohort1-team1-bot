//const addElement = require("./add-element");

module.exports = {
    //Name of command
    name: 'add-timed-event',
    // Description of Command
    description: 'Add a timed event',
    //Aliases
    aliases: ['ate'],
    //Arguments TRUE
    args: true,
    
    usage: '[event]', //Trying as event for now

    //Name of event tttt/dd/mm/yy

    execute(message, args, firebase) {
        const eventInformation = args; //Ask why it isn't set to true inside the method
        let db = firebase.firestore();
        function addEvent() {
            db.collection(message.author.id).add({
                eventName: eventInformation[0],
                eventDate: eventInformation[1],
                eventAuthor: message.author.username
            }).then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
                message.channel.send('Event Successfully Added!');
            }).catch((error) => {
                console.error('Error adding document: ', error);
                return message.channel.send('Event Was Not Added!');
            });
        }

        addEvent();

    },

};