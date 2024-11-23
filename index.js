/**
 * file utama yang akan dijadikan endpoint discord nantinya
 */

const express = require("express");
const bodyParser = require("body-parser");
const {verifyKeyMiddleware, InteractionType, InteractionResponseType} = require("discord-interactions");

require("dotenv/config");

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.post("/interactions", verifyKeyMiddleware(process.env.PUBLIC_KEY), (req, res) => {
  const {type, member} = req.body;
  if(type == InteractionType.PING) {
    res.send({type: InteractionResponseType.PONG})
  }
  if(type == InteractionType.APPLICATION_COMMAND){
    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `
          Halo <@${member.user.id}>, berikut informasi dari bot ini: \n 1. bot ini adalah bot yang keren \n 2. Jika kamu sudah sampai tahap ini, berarti kamu bisa mengembangkan bot yang lebih besar lagi
        `
      }
    })
  }
})

app.get("/", (req, res, next) => {
  res.send({status: 200, msg: "OK"});
})

app.get("/test", (req, res, next) => {
  res.send({status: 200, msg: "OK"});
})

app.listen(port, () => {
  console.log(`[log] server is running in port ${port}`)
})
