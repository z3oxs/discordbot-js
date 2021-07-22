const Discord = require('discord.js');
const { magenta, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');
const wiki = require('wikipedia');

module.exports = {
    name: 'wikipedia',
    aliases: ['wiki', 'summary', 'sumario'],
    async execute(bot, msg, args) {
        if (args[0] !== undefined) {
            try {
                const query = args.reduce((a, q) => `${a} ${q}`);
                const page = await wiki.page(query);
                wiki.setLang('pt');
                const summary = await page.summary();

                const embed = new Discord.MessageEmbed()
                    .setColor(magenta)
                    .setTitle(`📖 ${summary.title}`)
                    .setDescription(`\`${summary.extract}\``)
                    .setImage(summary.thumbnail.source)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed);
            
            } catch(e) {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`A página não existe ou é grande demais.\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
            }
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve especificar a pesquisa. (Exemplo: ${prefix}wiki **Pesquisa**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
}