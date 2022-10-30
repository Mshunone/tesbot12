let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'let sn = '10'
let sh = '15'
let sp = '25'
let sv = '75'
//premium
let ph = '15'
let pn = '5'
let pp = '25'
let pv = '35'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Normal:* _${sn}k/grup (1 Bulan)_
┊⫹⫺ *Hemat:* _${sh}k/grup (2 BUlan)_
┊⫹⫺ *Pro:* _${sp}k/grup (3 Bulan)_                                                      
┊⫹⫺ *Vip:* = _${sv}k/grup (12 Bulan)_
╰═┅═━––––––๑
╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (1 Bulan)_
┊⫹⫺ *Normal:* _${pn}k (1 Minggu)_
┊⫹⫺ *Pro:* _${pp}k (2 Bulan)_
┊⫹⫺ *Vip:* _${pv}k (8 Bulan)_                                               
╰═┅═━––––––๑
*⫹⫺ PAYMENT:*
• *Gopay:* [--]
• *Shopay:* [--]
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Keuntungan prem apa?
💬: Chek katalog bot !
🗣️: Bot nya work?
💬: Work lah 99% !
[! Uang, di tf ga bisa di back !]
▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (2 Bulan)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 Bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (3 Bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 Bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (1 Bulan)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (1 Minggu)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pp + 'k (2 Bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + pv + 'k (8 Bulan)' },
	]
    },
]
    
const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
