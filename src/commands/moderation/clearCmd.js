const Discord = require('discord.js');
const { green, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'clear',
    aliases: ['clearchat', 'limpar'],
    async execute(bot, msg, args) {
        const amount = args[0] || 5;

        if (msg.member.hasPermission('MANAGE_MESSAGES')) {
            const embed = new Discord.MessageEmbed()
                .setColor(green)
                .setDescription(`\`${amount} mensagens apagadas por\` ${msg.author}`)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            if (isNaN(amount)) {
                embed
                    .setDescription(`\`A quantia definida não é um número. (Exemplo: ${prefix}clear **10**)\``)
                    .setColor(red);

            } else if (amount[0] <= 0 || amount > 100) {
                embed
                    .setDescription(`\`A quantia deve ser maior que 0 e menor que 100. (Exemplo: ${prefix}clear **10**)\``)
                    .setColor(red);

            } else {
                await msg.channel.messages.fetch({ limit: amount }).then(messages => msg.channel.bulkDelete(messages));
            }

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));

        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você não tem permissão para isso.\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
}