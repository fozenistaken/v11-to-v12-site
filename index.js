const express = require("express");
const app = express();
app.use(express.static("public"));
const request = require("request");
const db = require("quick.db");
const fs = require("fs");
const haste = require("hastebin-gen")
const n = require("nodme")
const url = require("url");
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
      renderTemplate(res, req, "fozen.ejs"); 
  } else {
    var newCode = n.replace(req.query.message)//ya split join yada replaceAll kulaln
    var asıl = newCode.replaceAll()("client.ping","client.ws.ping")//modül var ne olur ne olmaz senin kısımıda koyalım
    haste(newCode, { extension: "js" }).then(x =>
    res.redirect(x))

}
    
  });


const listener = app.listen(process.env.PORT, () => {
  console.log("Panel şu portla başlatıldı:" + listener.address().port);
});
