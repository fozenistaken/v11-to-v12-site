const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
//const fivem = require("fivem")
//const srv = new fivem.Server("213.226.117.29:30120")

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`Bot Aktif`)
  client.user.setStatus("dnd");
  client.user.setActivity(`!conv <kodunuz>`)
};
