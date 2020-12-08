const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Sawior Sunucu Komutları`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<:hypesquad1:785566231524671509> Sawior botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Duyuru__`,`<:hypesquad1:785566231524671509> \`${prefix}duyuru\` Sunucunzuda Duyuru Yaparsınız`,true)
.addField(`__Oylama__`,`<:hypesquad1:785566231524671509> \`${prefix}oylama\` Sunucunuzda Oylama Yaparsınız`,true)
.addField(`__Sohbet Aç__`,`<:hypesquad1:785566231524671509> \`${prefix}aç\`  Sunucunuzda Sohbet Açarsınız`,true)
.addField(`__Sohbet Kapat__`,`<:hypesquad1:785566231524671509> \`${prefix}kapat\` Sunucunuzda Sohbet Kapatırsınız `,true)
.addField(`__Sohbet Gizle__`,`<:hypesquad1:785566231524671509> \`${prefix}gizle\`  Sunucunuzda Sohbet Gizlerseiniz`,true)
.addField(`__Çekiliş__`,`<:hypesquad1:785566231524671509> \`${prefix}çekiliş\` Sunucunuzda Çekiliş Yaparsınız`,true)
.addField(`__Hızlı Çek__`,`<:hypesquad1:785566231524671509> \`${prefix}hızlıçek\` Sunucunuzda Hızlı Çekiliş Yaparsınız`,true)
.addField(`__Üye Durum__`,`<:hypesquad1:785566231524671509> \`${prefix}üyedurum\` Sunucunuzun Üye Durumu`,true)
.addField(`__Sunucu Bilgi__`,`<:hypesquad1:785566231524671509> \`${prefix}scbilgi\` Sunucunuzun Bilgileri`,true)
.addField(`__Sunucu Davet__`,`<:hypesquad1:785566231524671509> \`${prefix}sunucudavet \`Sunucunuzun Sınırsız Daveti `,true)
.addField(`__Canlı Destek__`,`<:hypesquad1:785566231524671509> \`${prefix}canlı-destek\` Sunucunuzda Canlı Destek `,true)
.addField(`__Odaya Çek__`,`<:hypesquad1:785566231524671509> \`${prefix}çek\` Sunucunuzda Berirlenen Kişiyi Ses'e Çekersiniz `,true)
.addField(`__Ban Sorgu__`,`<:hypesquad1:785566231524671509> \`${prefix}bansorgu\` Kişinin Neden Banlandığını Görürsünüz`,true)
.addField(`__Reklam Tara__`,`<:hypesquad1:785566231524671509> \`${prefix}reklam-tara\` Sunucunuzda Reklamları Tararsınız`,true)
.addField(`__Sesli Sustur__`,`<:hypesquad1:785566231524671509> \`${prefix}sesli-sustur\` Sunucunuzda Süreli Susturursunuz`,true)
.addField(`__Bilgilendirme__`,`<:hypesquad1:785566231524671509> \`${prefix}davet\` | Sawior'yi Sunucunuza Davet Edersiniz\n<:hypesquad1:785566231524671509> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["sunucu","sunucu"], 
    permLevel: 0
  };
  exports.help = {
    name: 'sunucu'
  }; 
  