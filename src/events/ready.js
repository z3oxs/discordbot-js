<<<<<<< HEAD
const { prefix } = require('../assets/config.json');

module.exports = async (bot, member, msg) => {
    const status = [
        {
            status: 'online',
            activity: {
                name: 'tua mãe pela janela',
                type: 'PLAYING'
            }
        },
        {
            status: 'online',
            activity: {
                name: `${prefix}help`,
                type: 'LISTENING'
            }
        },
        {
            status: 'online',
            activity: {
                name: 'Free Fire',
                type: 'PLAYING'
            }
        },
        {
            status: 'online',
            activity: {
                name: 'Pornozão',
                type: 'WATCHING'
            }
        },
        {
            status: 'online',
            activity: {
                name: 'tua prima na cama',
                type: 'PLAYING'
            }
        }];
    
    setInterval(() => bot.user.setPresence(status[Math.round(Math.random() * (status.length - 1))]), 10000);
    console.log('\n> Bot online has '.green + bot.user.tag.yellow);
=======
const { prefix } = require('../assets/config.json');

module.exports = async (bot, member, msg) => {
    const status = [
        {
            status: 'online',
            activity: {
                name: 'tua mãe pela janela',
                type: 'PLAYING'
            }
        },
        {
            status: 'online',
            activity: {
                name: `${prefix}help`,
                type: 'LISTENING'
            }
        },
        {
            status: 'online',
            activity: {
                name: 'Free Fire',
                type: 'PLAYING'
            }
        },
        {
            status: 'online',
            activity: {
                name: 'Pornozão',
                type: 'WATCHING'
            }
        },
        {
            status: 'online',
            activity: {
                name: 'tua prima na cama',
                type: 'PLAYING'
            }
        }];
    
    setInterval(() => bot.user.setPresence(status[Math.round(Math.random() * (status.length - 1))]), 10000);
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}