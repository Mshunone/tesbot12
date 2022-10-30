import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `Saxia On (｡>_<｡)`



let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'


conn.reply(m.chat, info, m, { quoted: fakes },{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz",
      mediaType: 2,
      description: "https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz", 
      title: global.titlebot,
      body: wm,
      thumbnail: thumb,
      sourceUrl: sig  }}})

}

handler.customPrefix = /^(tes|bot|xia|Xia|test)$/i

handler.command = new RegExp



export default handler
