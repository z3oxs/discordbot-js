const Discord = require('discord.js');
const { magenta, red } = require('../../assets/colors');
const { prefix } = require('../../assets/config.json');
const evaluate = require('mathjs').evaluate;

module.exports = {
    name: 'calc',
    aliases: ['calculator', 'eval', 'math'],
    async execute(bot, msg, args) {
        if (args[0] !== undefined) {
            const embed = new Discord.MessageEmbed()
                .setColor(magenta)
                .setDescription(`\`Resultado: ${evaluate(args.reduce((a, b) => `${a} ${b}`))}\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed);
        
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Defina a expressão. (Exemplo: ${prefix}calc **1 + 1**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
}