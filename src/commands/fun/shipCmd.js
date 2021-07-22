const Discord = require('discord.js');
const { magenta, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'ship',
    aliases: ['shipar'],
    async execute(bot, msg, args) {
        const members = msg.mentions.members.first(2);
        const memberOne = members[0] || undefined;
        const memberTwo = members[1] || undefined;

        if (memberOne === undefined && memberTwo === undefined) {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve especificar os membros. (Exemplo: ${prefix}ship **@user @user**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        
        } else if (memberOne !== undefined && memberTwo !== undefined) {
            const embed = new Discord.MessageEmbed()
                .setColor(magenta)
                .setTitle(':love_letter: Ship')
                .setDescription(`\`A chance de \` ${memberOne} \`com\` ${memberTwo} \`é ${Math.floor(Math.random() * 100)}%!\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed); 

        } else if (memberTwo === undefined) {
            const embed = new Discord.MessageEmbed()
                .setColor(magenta)
                .setDescription(`${msg.author}\`, sua chance com\` ${memberOne} \`é ${Math.floor(Math.random() * 100)}%!\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed);
        }
    }
}
