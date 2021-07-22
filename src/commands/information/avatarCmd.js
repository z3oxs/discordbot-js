const Discord = require('discord.js');
const { magenta } = require('../../assets/colors.json');

module.exports = {
    name: 'avatar',
    aliases: ['useravatar', 'userphoto'],
    async execute(bot, msg, args) {
        const user = msg.mentions.users.first() || await bot.users.fetch(args[0] || msg.author.id);

        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setTitle(`:frame_photo: ${user.tag}`)
            .setImage(user.avatarURL({ dynamic: true, size: 1024 }))
            .setDescription(`**[Clique aqui](${user.avatarURL()})** \`para baixar a imagem.\``)
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

        msg.channel.send(embed);
    }
}
