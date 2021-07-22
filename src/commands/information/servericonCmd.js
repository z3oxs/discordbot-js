<<<<<<< HEAD
const Discord = require('discord.js');
const { magenta } = require('../../assets/colors.json');

module.exports = {
    name: 'servericon',
    aliases: ['sicon', 'icon'],
    async execute(bot, msg, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setTitle(`🖼️ ${msg.guild.name}`)
            .setDescription(`**[Clique aqui](${msg.guild.iconURL({ dynamic: true })})** \`para baixar a imagem.\``)
            .setImage(msg.guild.iconURL({ dynamic: true, size: 1024 }))
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

        msg.channel.send(embed);
    }
=======
const Discord = require('discord.js');
const { magenta } = require('../../assets/colors.json');

module.exports = {
    name: 'servericon',
    aliases: ['sicon', 'icon'],
    async execute(bot, msg, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setTitle(`🖼️ ${msg.guild.name}`)
            .setDescription(`**[Clique aqui](${msg.guild.iconURL({ dynamic: true })})** \`para baixar a imagem.\``)
            .setImage(msg.guild.iconURL({ dynamic: true, size: 1024 }))
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

        msg.channel.send(embed);
    }
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}