const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Sawior Eklenti Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<:hypesquad1:785566231524671509> Sawior botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Kayıt Sistemi__`,`<:hypesquad1:785566231524671509> \`${prefix}yardımkayıt\` Gelişmiş Yardım Menüsü`,true)
.addField(`__Özel Oda Sistemi__`,`<:hypesquad1:785566231524671509> \`${prefix}özeloda\` Özel Oda Sistemi`,false)
.addField(`__Sunucu Panel__`,`<:hypesquad1:785566231524671509> \`${prefix}panel-kur\` Sunucunuzun İstatistiklerini Görürsünüz`,true)
.addField(`__İnvite Sistemi__`,`<:hypesquad1:785566231524671509> \`${prefix}invite\` Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,`<:hypesquad1:785566231524671509> \`${prefix}davet\` | Sawior'yi Sunucunuza Davet Edersiniz\n<:hypesquad1:785566231524671509> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["eklenti"], 
    permLevel: 0
  };
  exports.help = {
    name: 'eklenti'
  }; 
  