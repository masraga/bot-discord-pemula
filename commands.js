/** digunakan untuk mendaftarkan command pada bot */

const axios  = require("axios")
require("dotenv/config")

const INFO_COMMAND = {
  name: 'info',
  description: 'Menampilkan informasi server',
  integration_types: [0,1],
  contexts: [0,1,2] 
}

const commands = [INFO_COMMAND]

try {
  return axios({
    url: `https://discord.com/api/v10/applications/${process.env.APPLICATION_ID}/commands`,
    method: "PUT", 
    headers: {
      'Authorization': `Bot ${process.env.BOT_TOKEN}`,
      'Content-Type': "application/json"
    },
    data: commands
  })
}
catch(e) {
  console.log(e.response.data.error)
}