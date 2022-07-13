let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
hyzer = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*Apa Kontoll*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/d688df7697085b91c5045.png',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/787f8b61832ca47dc9318.png', hyzer, { packname: "sticker by", author: "IRFANFF9" })
}

handler.customPrefix = /^(Bang|p|Bot|Woy|cok|pe|Hay|hay|hallo|Hallo)$/i
handler.command = new RegExp

module.exports = handler
