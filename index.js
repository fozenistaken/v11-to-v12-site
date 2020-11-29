const express = require("express");
const app = express();
app.use(express.static("public"));
const request = require("request");
const db = require("quick.db");
const fs = require("fs");
const url = require("url");
const n = require("nodme")
const path = require("path");
var bodyParser = require('body-parser')
const Discord = require("discord.js")
  app.use(
    "/css",
    express.static(path.resolve(__dirname + `/css`))
  );

    const templateDir = path.resolve(__dirname + `/`);  // SITE DOSYA KONTROL

  app.locals.domain = process.env.PROJECT_DOMAIN;
  app.engine("html", require("ejs").renderFile);
  app.set("view engine", "html");

  var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
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
    if(!req.query.message) {
      //  {"fullname":"Name? Dev","email":"namedev@gmail.com","dcname":"cenap#0001","lastname":"yuce","name":"11","message":"test"}
      renderTemplate(res, req, "v12.ejs"); 
  } else {
     /*const hook = new Discord.WebhookClient('WEBHOOK ID', 'WEBHOOK TOKEN');
const webhook = new Discord.MessageEmbed()
.setTitle("Başvuru")
.setColor("GREEN")
.addField('Gönderen: ', req.query.dcname,true)
.addField('Adı Soyadı: ', req.query.fullname,true)
.addField('Yaş: ', req.query.lastname,true)
.addField('Mail', req.query.email, true)
.addField('Alanı: ', req.query.name , true)
.addField('\u200b', '\u200b')
.addField('Neden Sen: ', req.query.message , true)
hook.send(webhook)*/
    var newCode = n.replace(req.query.message)
    res.send(newCode)

}
    
  });


const listener = app.listen(process.env.PORT, () => {
  console.log("Panel şu portla başlatıldı:" + listener.address().port);
});
