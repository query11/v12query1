const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Sawior Moderasyon Komutları`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<:hypesquad1:785566231524671509> Sawior botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Reklam Engel__`,`<:setting:785602456535957570> \`${prefix}reklam-engel\` Sunucunzuda Reklamları Engeller`,true)
.addField(`__Reklam Kick__`,`<:setting:785602456535957570> \`${prefix}reklam-kick\` Sunucunuzda Reklam Yapanları 3 Uyarıda Kickler`,true)
.addField(`__Ban__`,`<:setting:785602456535957570> \`${prefix}ban\`  Sunucunuzda Belirtiğiniz Kişiyi Banlar`,true)
.addField(`__Kick__`,`<:setting:785602456535957570> \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler `,true)
.addField(`__Unban__`,`<:setting:785602456535957570> \`${prefix}unban\`  Sunucunuzda Belirtiğiniz İD'nin Banını Açar`,true)
.addField(`__Mod Log__`,`<:setting:785602456535957570> \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıtlarını Tuttar`,true)
.addField(`__Sayaç__`,`<:setting:785602456535957570> \`${prefix}sayaç\` Sunucunuzda Sayaç Tuttar`,true)
.addField(`__Uyarı__`,`<:setting:785602456535957570> \`${prefix}yardımuyarı\` Sunucunuza Gelişmiş Uyarı Sistemi`,true)
.addField(`__Sayaç Kapat__`,`<:setting:785602456535957570> \`${prefix}sayaç-kapat\` Sunucunuzun Sayaç Sistemini Kapattır`,true)
.addField(`__Ban Say__`,`<:setting:785602456535957570> \`${prefix}bansay \` Sunucunuzdan Kimlerin Banlandığını Görebilirsiniz`,true)
.addField(`__Banaffı__`,`<:setting:785602456535957570> \`${prefix}banaffı \` Sunucunuzdan Banlanan Herkesin Banını Açar `,true)
.addField(`__Yavaş Mod__`,`<:setting:785602456535957570> \`${prefix}yavaşmod \` Sunucunuzda Berirlenen Sohbete Yazma Delayı Koyabilirsiniz `,true)
.addField(`__Bilgilendirme__`,`<:hypesquad1:785566231524671509> \`${prefix}davet\` | Sawior'yi Sunucunuza Davet Edersiniz\n<:hypesquad1:785566231524671509> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'moderasyon'
  }; 
  