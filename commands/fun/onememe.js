module.exports = {
    
    // Name of Command
    name: '1meme',
    // Description of Command
    description: 'The Legend of Marquise. Also a easter egg!!!!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 5,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('https://cdn.discordapp.com/attachments/792876186765885452/877791014801260565/video0.mp4')
        }
    }