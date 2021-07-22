const Discord = require('discord.js');
const { magenta } = require('../../assets/colors');
const { prefix } = require('../../assets/config');

module.exports = {
    name: 'help',
    aliases: ['ajuda'],
    async execute(bot, msg, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setTitle('💟 Ajuda')
            .addFields([
                {
<<<<<<< HEAD
                    name: '❔ Informação',
                    value: `\`${prefix}avatar\` \`${prefix}covid\` \`${prefix}currency\` \`${prefix}emojiinfo\` \`${prefix}servericon\` \`${prefix}serverinfo\` \`${prefix}userinfo\` \`${prefix}weather\` \`${prefix}wikipedia\``
                },
                {
                    name: '🎮 Diversão',
                    value: `\`${prefix}ascii\` \`${prefix}hug\` \`${prefix}kiss\` \`${prefix}retarded\` \`${prefix}roll\` \`${prefix}ship\``
                },
                {
                    name: '👑 Moderação',
                    value: `\`${prefix}addemoji\` \`${prefix}ban\` \`${prefix}clear\` \`${prefix}kick\` \`${prefix}lock\` \`${prefix}removeemoji\` \`${prefix}slowmode\` \`${prefix}unban\` \`${prefix}unlock\``
                },
                {
                    name: '📎 Utilidade',
                    value: `\`${prefix}calc\` \`${prefix}help\` \`${prefix}ping\` \`${prefix}status\``
=======
                    name: '🎮 Diversão',
                    value: `\`${prefix}ascii > Transformar texto em ASCII Banner\`
                            \`${prefix}hug > Abraçar um usuário\`
                            \`${prefix}kiss > Beijar um usuário\`
                            \`${prefix}retarded > Veja seu nível de retardado\`
                            \`${prefix}roll > Role o dado\`
                            \`${prefix}ship > Shipar usuários\``
                },
                {
                    name: '❔ Informação',
                    value: `\`${prefix}avatar > Ver avatar de usuário\`
                            \`${prefix}covid > Informações sobre o COVID\`
                            \`${prefix}currency > Valor atual das principais moedas\`
                            \`${prefix}emojiinfo > Informações de um emoji\`
                            \`${prefix}servericon > Ícone do servidor\`
                            \`${prefix}serverinfo > Informações do servidor\`
                            \`${prefix}weather > Meteorologia atual\`
                            \`${prefix}wiki > Resumo de uma pesquisa na Wikipédia\``
                },
                {
                    name: '👑 Moderação',
                    value: `\`${prefix}addemoji > Adicionar emoji\`
                            \`${prefix}ban > Banir um usuário\`
                            \`${prefix}clear > Limpe o chat\`
                            \`${prefix}kick > Kickar um usuário\`
                            \`${prefix}lock > Trancar chat\`
                            \`${prefix}mute > Mutar um usuário\`
                            \`${prefix}removeemoji > Remover emoji\`
                            \`${prefix}slowmode > Adicionar tempo de intervalo no chat\`
                            \`${prefix}unban > Desbanir usuário\`
                            \`${prefix}unlock > Desbloquear chat\`
                            \`${prefix}unmute > Desmutar usuário\``
                },
                {
                    name: '📎 Utilidades',
                    value: `\`${prefix}calc > Calcular uma expressão\`
                            \`${prefix}help > Mensagem de ajuda\`
                            \`${prefix}ping > Latência de atuação\`
                            \`${prefix}status > Status do sistema e do BOT\``
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
                }
            ])
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

        msg.channel.send(embed);
    }
}
