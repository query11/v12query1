
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Sawior Genel Komutlar`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<:hypesquad1:785566231524671509> Sawior botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Davet__`,`<:setting:785602456535957570> \`${prefix}davet\` Botumuzun Davet Linkini Alıp Davet Edebilirsiniz`,true)
.addField(`__Hata Bildir__`,`<:setting:785602456535957570> \`${prefix}hata-bildir\` Botumuzun Hatalarını Bildirebilirsiniz`,true)
.addField(`__Profil__`,`<:setting:785602456535957570> \`${prefix}hata-bildir\` Kullanıcı Profilinizi Görebilirsiniz`,true)
.addField(`__Bot Bilgi__`,`<:setting:785602456535957570> \`${prefix}botbilgi\` Botumuzun İstatistiksel Bilgileri`,true)
.addField(`__Korona Bilgi__`,`<:setting:785602456535957570> \`${prefix}korona\` Korona İstatistiklerini Görebilirsiniz`,true)
.addField(`__Avatar__`,`<:setting:785602456535957570> \`${prefix}avatar\` Profil Fotoğrafınızı Görebilirsiniz`,true)
.addField(`__Yapımcım__`,`<:setting:785602456535957570> \`${prefix}yapımcım\` Beni Yapan Kişiyi Görebilirsiniz`,true)
.addField(`__Pixel__`,`<:setting:785602456535957570> \`${prefix}pixel\` Profil Fotoğrafınızı Pixel Yaparsınız`,true)
.addField(`__Zıt Renk__`,`<:setting:785602456535957570> \`${prefix}zıtrenk\` Profil Fotoğrafınızı Zıt Renk Yaparsınız`,true)
.addField(`__Rip Efekt__`,`<:setting:785602456535957570> \`${prefix}rip\` Profil Fotoğrafınızı Rip Efekti Yaparsınız`,true)
.addField(`__Wasted__`,`<:setting:785602456535957570> \`${prefix}rip\` Profil Fotoğrafınızı Wasted Efekti Yaparsınız`,true)
.addField(`__Taş Kağıt Makas__`,`<:setting:785602456535957570> \`${prefix}tkm\` Taş Kağıt Makas Oynarsınız`,true)
.addField(`__Bilgilendirme__`,`<:hypesquad1:785566231524671509> \`${prefix}davet\` | Sawior'yi Sunucunuza Davet Edersiniz\n<:hypesquad1:785566231524671509> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["genel"], 
    permLevel: 0
  };
  exports.help = {
    name: 'genel'
  }; 
  