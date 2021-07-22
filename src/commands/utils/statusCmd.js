<<<<<<< HEAD
const Discord = require('discord.js');
const { magenta } = require('../../assets/colors');
const si = require('systeminformation');
const h = require('pretty-bytes');
const { commandCount } = require('../../assets/config');

module.exports = {
    name: 'status',
    aliases: ['botstatus', 'sys', 'systemstatus'],
    async execute(bot, msg, args) {
        const memory = await si.mem();

        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setTitle(`🤖 ${bot.user.username}`)
            .addFields(
                {
                    name: '📝 Versão',
                    value: `\`1.0.2b\``,
                    inline: true
                },
                {
                    name: '🛰️ Latência',
                    value: `\`${bot.ws.ping}\``,
                    inline: true
                },
                {
                    name: '✅ Comandos',
                    value: `\`${commandCount}\``,
                    inline: true
                },
                {
                    name: '🖥️ Memória Livre',
                    value: `\`${h(memory.available)}\``,
                    inline: true
                },
                {
                    name: '🔧 Node',
                    value: `\`${process.version}\``,
                    inline: true
                }
            )
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed);
    }
=======
const Discord = require('discord.js');
const { magenta } = require('../../assets/colors');
const si = require('systeminformation');
const h = require('pretty-bytes');
const { commandCount } = require('../../assets/config');

module.exports = {
    name: 'status',
    aliases: ['botstatus', 'sys', 'systemstatus'],
    async execute(bot, msg, args) {
        const memory = await si.mem();

        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setTitle(`🤖 ${bot.user.username}`)
            .addFields(
                {
                    name: '📝 Versão',
                    value: `\`1.0.2\``,
                    inline: true
                },
                {
                    name: '🛰️ Latência',
                    value: `\`${bot.ws.ping}\``,
                    inline: true
                },
                {
                    name: '✅ Comandos',
                    value: `\`${commandCount}\``,
                    inline: true
                },
                {
                    name: '🖥️ Memória Livre',
                    value: `\`${h(memory.available)}\``,
                    inline: true
                },
                {
                    name: '🔧 Node',
                    value: `\`${process.version}\``,
                    inline: true
                }
            )
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed);
    }
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}