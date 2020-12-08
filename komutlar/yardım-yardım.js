const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Sawior Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<:hypesquad1:785566231524671509> Sawior botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<:setting:785602456535957570> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<:setting:785602456535957570> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<:hypesquad1:785566231524671509> \`${prefix}guard\`  `,true)
.addField(`__Sunucu Komutları__`,`<:setting:785602456535957570> \`${prefix}sunucu\` `,true)
.addField(`__Eklenti Komutları__`,`<:setting:785602456535957570> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<:hypesquad1:785566231524671509> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<:hypesquad1:785566231524671509> \`${prefix}davet\` | Sawior'yi Sunucunuza Davet Edersiniz\n<:hypesquad1:785566231524671509> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  