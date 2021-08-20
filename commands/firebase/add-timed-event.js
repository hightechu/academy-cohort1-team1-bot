module.exports = {
    //Name of command
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
        
        var dateEvent = args[0];
        var nameEvent = args[1];
        for (i = 2; i < args.length; i++) {
            nameEvent = nameEvent + ' ' + args[i];
        }
        
        console.log(dateEvent);
        console.log(nameEvent);

        
        function addEvent() {
            db.collection(message.author.id).add({
                eventName: nameEvent,
                eventDate: dateEvent,
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