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
        message.channel.send('https://cdn.discordapp.com/attachments/876953010465570838/878375643547570216/cow_walk.mp4')
        }
    }
