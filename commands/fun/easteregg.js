module.exports = {

    name: 'easteregg',
    description: 'Congradulations. you found me!',
    guildOnly: true,
    cooldown: 100000,
    execute(message) {
        message.channel.send('https://tenor.com/view/duck-ducks-swing-cute-animals-gif-15449339')
    }
}