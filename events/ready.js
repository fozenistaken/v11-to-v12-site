const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = client => {
  setInterval(function() {}, 8000);
  client.user.setPresence({
    game: {
      name: `Name? Development`,
      type: "WATCHING"
    },
    status: "online"
  });
  console.log(`[${client.use.username}]: Giriş Yaptı! Komutlar Yüklendi!`);
};
