const dc = require("discord.js")
exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMİNİSTRATOR")) return;
  let channelp = message.channel.parentID
 message.channel.delete(message.channel).then
  message.channel.clone().then(z => {
    let kanal = z.guild.channels.cache.find(c => c.name === z.name)
    kanal.setParent(
    kanal.guild.channels.cache.find(channel => channel.id === channelp))
    const embed = new dc.MessageEmbed()
    .setTitle("Bu Kanal Nukelandı!")
    .setColor("ORANGE")
    .setImage("https://cdn.discordapp.com/attachments/779937117300195338/779937292528910347/unnamed.gif")
    z.send(embed)
   // z.send("Bu Kanal Nukelandı \nhttps://i.imgyukle.com/2020/11/21/TimWL1.gif")
    })
  };
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["nuke"],
  permLevel: 0
}
exports.help = {
  name: "nuke"
  }