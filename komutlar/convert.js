const dc = require("discord.js");
const a = require("nodme");
const hastebin = require("hastebin-gen");


exports.run = async (client, message, args) => {
  let aa = message.content.replace("!conv", "");
  let sa = aa.replace("```", "");
  let ag = sa.replace("js", "");
  let ss = ag.replace("```", "");
  var newCode = a.replace(ss);
 const haste = await hastebin(newCode, { extension: "txt" })
 console.log(haste)
    const sss = new dc.MessageEmbed()
      .setTitle("Buyur Kodun")
      .setColor("GREEN")
      .setFooter(
        `${message.author.tag} Tarafından İstendi!`,
        message.author.avatarURL()
      )
      .setDescription("```js\n" + newCode + "```")
      .addField("Hastebin Linki", haste);
    message.channel.send(sss);
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "conv"
};