let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/4b5564c12b413bf0dc106.jpg', m, { packname: "sticker by", author: "IRFANFF9" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
