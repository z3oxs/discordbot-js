const Discord = require('discord.js');
const { red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');
const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    aliases: ['asciiart', 'asciibanner'],
    async execute(bot, msg, args) {
        if (args.length !== 0) {
            const text = args.reduce((a, c) => `${a} ${c}`);

            if (text.length <= 12) {
                figlet(text, async (err, text) => {
                    if (err) {
                        const embed = new Discord.MessageEmbed()
                            .setColor(red)
                            .setDescription(`\`Ocorreu um erro ao renderizar.\``)
                            .setTimestamp()
                            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                        msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
                    
                    } else {
                        msg.reply(`\`\`\`${text}\`\`\``);
                    }
                });
                
            } else {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Só são aceitos textos com apenas 12 letras de tamanho.\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
            }
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve especificar o texto a ser renderizado. (Exemplo: ${prefix}ascii **z3ox1s**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
}
