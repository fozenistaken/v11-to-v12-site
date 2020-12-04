const express = require("express");
const app = express();
app.use(express.static("public"));
const request = require("request");
const db = require("quick.db");
const fs = require("fs");
const yusuffozen = require("hastebin-gen");
const n = require("nodme");
const url = require("url");
const path = require("path");
var bodyParser = require("body-parser");
const Discord = require("discord.js");
app.use("/css", express.static(path.resolve(__dirname + `/css`)));

const templateDir = path.resolve(__dirname + `/`); // SITE DOSYA KONTROL

app.locals.domain = process.env.PROJECT_DOMAIN;
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const renderTemplate = (res, req, template, data = {}) => {
  const baseData = {
    path: req.path
  };
  res.render(
    path.resolve(`${templateDir}${path.sep}${template}`),
    Object.assign(baseData, data)
  );
};
app.get("/", (req, res) => {
  if (!req.query.message) {
    renderTemplate(res, req, "fozen.ejs");
  } else {
    var asıl = req.query.message
      .split("client.ping")
      .join("client.ws.ping")
      .split("get")
      .join("cache.get")
      .split("addRole")
      .join("roles.add")
      .split("removeRole")
      .join("roles.remove")
      .split("users.exists")
      .join("users.cache.some")
      .split("channels.exists")
      .join("channels.cache.some")
      .split("find")
      .join("cache.find")
      .split("RichEmbed")
      .join("MessageEmbed")
      .split("fetchUser")
      .join("users.fetch")
      .split("fetchMember")
      .join("users.members")
      .split("fetchMessage")
      .join("users.messages")
      .split("fetchPinnedMessages")
      .join("messages.fetchPinned")
      .split("sendMessage")
      .join("send")
      .split("sendEmbed")
      .join("send")
      .split("sendCode")
      .join("send")
      .split("sendFile")
      .join("send")
      .split("sendFiles")
      .join("send")
      .split("setRoles")
      .join("roles.set")
      .split("colorRole")
      .join("roles.color")
      .split("highestRole")
      .join("roles.highest")
      .split("hoistRole")
      .join("roles.hoist")
      .split("ban")
      .join("members.ban")
      .split("unban")
      .join("members.unban")
      .split("avatarURL")
      .join("avatarURL()")
      .split("displayAvatarURL")
      .join("displayAvatarURL()")
      .split("iconURL")
      .join("iconURL()")
      .split("splashURL")
      .join("splashURL()")
      .split("playFile")
      .join("play")
      .split("playStream")
      .join("play")
      .split("playArbitraryInput")
      .join("play")
      .split("playBroadcast")
      .join("play")
      .split("playOpusStream")
      .join("play")
      .split("playConvertedStream")
      .join("play")
      .split("dispatcher.end()")
      .join("dispatcher.destroy()")
      .split("createVoiceBroadcast")
      .join("voice.createBroadcast")
      .split("broadcast.dispatchers")
      .join("broadcast.subscribers")
      .split("forEach")
      .join("cache.forEach");
        yusuffozen(asıl, { extension: "Yusuf&Fozen" }).then(x => res.redirect(x));
 
    db.add(`bnmç_${req.user}`, 1)
    db.add(`topç`, 1)
  }
});


const toplam = db.fetch(`topç`)



 app.post("/toplam",  (req, res) => {
   <h1> ${toplam} </h1>
 })
   
   
const listener = app.listen(process.env.PORT, () => {
  console.log("Panel şu portla başlatıldı:" + listener.address().port);
});
