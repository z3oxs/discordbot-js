const Discord = require('discord.js');
const { magenta } = require('../../assets/colors.json');

module.exports = {
    name: 'retarded',
    aliases: ['retard'],
    async execute(bot, msg, args) {
        const user = msg.mentions.members.first() || msg.author;

        images = [
            'https://media1.tenor.com/images/c785fdd8e72dc758e34025c802dd4e56/tenor.gif?itemid=9678797',
            'http://2.bp.blogspot.com/-E-ns85mBsRU/T38qOWrfHAI/AAAAAAAAIzY/vqkVwtxz_q4/s1600/cachorro.gif',
            'https://i.pinimg.com/originals/38/e9/bf/38e9bf49e1debb87bf901168c980a7bc.gif',
            'https://media.giphy.com/media/WKHiF3asg73I4/giphy.gif'
        ]

        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setDescription(`\`O nível de retardado de\` ${user} \`é ${Math.floor(Math.random() * 100)}%!\``)
            .setImage(images[Math.floor(Math.random() * (images.length - 1))])
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

        msg.channel.send(embed);
    }
}