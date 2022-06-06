let handler = async m => m.reply(`
☕ *Kíñgsléy Tokio version :* a whatsapp bot\n\n🔗 *URL :* https://github.com/ifr250/tokio-wabot
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
