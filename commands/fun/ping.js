// Ping Module

module.exports = {
    
    // Name of Command
    name: 'ping',
    // Description of Command
    description: 'Ping Pong the battle of speeds!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 5,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
 team1bot
        message.channel.send('bruh').then(sentMessage => {
            // Add Reaction
            sentMessage.react('😪');
        });
    },
};