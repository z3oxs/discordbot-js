const Discord = require('discord.js');
const { magenta } = require('../../assets/colors');

module.exports = {
    name: 'ping',
    aliases: ['latency', 'latencia'],
    async execute(bot, msg, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setDescription(`\`Latência: ${bot.ws.ping}ms\``)
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

        msg.channel.send(embed);
    }
}