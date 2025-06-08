const handler = async (m, { conn }) => {
  const texto = `
 _*𝕭𝖑𝖆𝖈𝖐 𝕮𝖑𝖔𝖛𝖊𝖗 *_ 🥷

\`\`\`꧁♀️☆☬𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎𝐒 𝐀 𝐍𝐄𝐖 𝐀𝐋𝐋𝐈𝐀𝐍𝐂𝐄☬♀️꧂\`\`\`

𝐈𝐃 𝐝𝐞𝐥 𝐜𝐥𝐚𝐧: 2049778174
♥️SOMOS UNA FAMILIA SEÑORES

🧑‍🍼LIDER : 🥵.༎⃟🌹𝕻𝐚𝐧𝐝𝐢𝐭𝐚✿⃝メ🐼⏤͟͟͞★.
🕴️DECANOS: MUERTOS


🚧REGLAS: NO SEAN PUTOs
*📌𓆩𓆪⏤͟͟͞͞𝐍𝐎 𝐈𝐍𝐒𝐔𝐋𝐓𝐎𝐒*
*📌𓆩𓆪⏤͟͟͞͞𝐍𝐎 𝐏𝐄𝐋𝐄𝐀𝐒*
*📌𓆩𓆪⏤͟͟͞͞𝐍𝐎 𝐆𝐎𝐑𝐄 𝐍𝐈 𝐏𝐎𝐑*
*📌𓆩𓆪⏤͟͟͞͞𝐑𝐄𝐒𝐏𝐄𝐓𝐀𝐑 𝐀 𝐋𝐎𝐒 𝐋𝐈𝐃𝐄𝐑𝐄𝐒 𝐂𝐎𝐌𝐎 𝐃𝐄𝐂𝐀𝐍𝐎𝐒*
*📌𓆩𓆪⏤͟͟͞͞𝐒𝐈 𝐀𝐋𝐆𝐔𝐈𝐄𝐍 𝐋𝐄𝐒 𝐌𝐎𝐋𝐄𝐒𝐓𝐀 𝐃𝐈𝐑𝐄𝐂𝐓𝐎 𝐀𝐋 𝐏𝐑𝐈𝐕 𝐃𝐄 𝐀𝐋𝐆𝐔𝐍 𝐋𝐈𝐃𝐄𝐑*
               
               👹𝐋𝐀 𝐔𝐍𝐈𝐎𝐍 𝐇𝐀𝐂𝐄 𝐋𝐀 𝐅𝐔𝐄𝐑𝐙𝐀
    


  `.trim()

  await conn.reply(m.chat, texto, m)
}

handler.help = ['script']
handler.tags = ['info']
handler.command = ['bienvenido']

export default handler
