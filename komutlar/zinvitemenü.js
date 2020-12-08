const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Sawior Eklenti Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<:hypesquad1:785566231524671509> Sawior botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Davet Kanal__`,`<:hypesquad1:785566231524671509> \`${prefix}davet-kanal\` Davet Kanalı Belirlersin`,true)
.addField(`__Davet Ekle__`,`<:hypesquad1:785566231524671509> \`${prefix}davet-ekle\` Seçilen Kullanıcıya Davet Ekler`,true)
.addField(`__Davet Sil__`,`<:hypesquad1:785566231524671509> \`${prefix}davet-sil\` Seçilen Kullanıcının Davetlerini Silersiniz`,true)
.addField(`__Davet Sıfırla__`,`<:hypesquad1:785566231524671509> \`${prefix}davet-sıfırla\` Herkesin Davetini Sıfırlarsınız`,true)
.addField(`__Davet Kanal Sıfırla__`,`<:hypesquad1:785566231524671509> \`${prefix}davet-kanal-sıfırla\` Davet Kanalını Sıfırlarsınız`,true)
.addField(`__Davetler__`,`<:hypesquad1:785566231524671509> \`${prefix}davetler\` Davetlerinizi Görürsünüz`,true)
.addField(`__Bilgilendirme__`,`<:hypesquad1:785566231524671509> \`${prefix}davet\` | Sawior'yi Sunucunuza Davet Edersiniz\n<:hypesquad1:785566231524671509> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["invite"], 
    permLevel: 0
  };
  exports.help = {
    name: 'invite'
  }; 
  