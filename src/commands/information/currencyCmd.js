const Discord = require('discord.js');
const { magenta, red } = require('../../assets/colors.json');
const fetch = require('node-fetch');

module.exports = {
    name: 'currency',
    aliases: ['cotacao', 'moedas'],
    async execute(bot, msg, args) {
        try {
            fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
                .then(r => r.json())

                .then(d => {
                    const embed = new Discord.MessageEmbed()
                        .setColor(magenta)
                        .addFields([
                            {
                                name: '💵 Dólar',
                                value: `\`R$ ${parseFloat(d.USDBRL.ask).toFixed(2).replace('.', ',')}\``,
                                inline: true
                            },
                            {
                                name: '💶 Euro',
                                value: `\`R$ ${parseFloat(d.EURBRL.ask).toFixed(2).replace('.', ',')}\``,
                                inline: true
                            },
                            {
                                name: '🪙 Bitcoin',
                                value: `\`R$ ${parseFloat(d.BTCBRL.ask).toFixed(3)}\``,
                                inline: true
                            }
                        ])
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed);
                });
                
        } catch(e) {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Ocorreu um erro ao consultar a API.\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
}