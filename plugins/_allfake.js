// Made By Aguz Familia/@FokusDotId (Fokus ID)
// Github: https://github.com/fokusdotid
// Recode By ImYanXiao

import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import knights from 'knights-canvas'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
	let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
        //global.bg = await (await fetch(img)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf", "application/vnd.android.package-archive", "application/zip"])
		global.pic = hwaifu.getRandom()
		global.fla = flaaa.getRandom()

		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
		
		const _uptime = process.uptime() * 1000
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await conn.getName(owner[0] + '@s.whatsapp.net'), ' ', 'yanxiao021@gmail.com', true],
         [owner[1], await conn.getName(owner[1] + '@s.whatsapp.net'), ' ', 'yanxiao021@gmail.com', true], // Kalo mau di tambah tinggal copy 1baris ini di tempel di bawahnya trs di edit dikit!
        ]
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
         
     		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
                    showAdAttribution: true,
					title: global.ucapan,
					body: wm,
					mediaUrl: sgc,
					description: 'SaxiaV1-MD',
					previewType: "PHOTO",
					thumbnail: await (await fetch(pic)).buffer(),
					sourceUrl: "https://github.com/SaxiaMD",					
				}
			}
		}
		global.fpayment = {
				"key": {
					"remoteJid": "0@s.whatsapp.net",
					"fromMe": false,
					"id": "BAE595C600522C9C",
					"participant": "0@s.whatsapp.net"
				},
				"message": {
					"requestPaymentMessage": {
						"currencyCodeIso4217": wm,
						"amount1000": fsizedoc,
						"requestFrom": "0@s.whatsapp.net",
						"noteMessage": {
							"extendedTextMessage": {
								"text": "Hai Kak " + name
							}
						},
						"expiryTimestamp": fsizedoc,
						"amount": {
							"value": fsizedoc,
							"offset": fsizedoc,
							"currencyCode": wm
						}
					}
				}
			}
		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: "https://Instagram.com",
            mediaType: "VIDEO",
            description: "https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz", 
            title: 'SaxiaV1-MD',
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: sig
    }
    } }
global.fakefb = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: "https://Facebook.com",
            mediaType: "VIDEO",
            description: "https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz", 
            title: 'SaxiaV1-MD',
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: sgc
    }
    } }
		// Fake ðŸ¤¥
		global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
        global.fvn = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
               "audioMessage": {
                        "mimetype":"audio/ogg; codecs=opus",
                        "seconds": "999999999999",
                        "ptt": "true"
                               }
                             } 
                            }
               
                global.ftextt = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
               "extendedTextMessage": {
                        "text":wm,
                        "title": wm,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
               
                  global.fliveLoc = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat  ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "caption":"by : ImYanXiao","h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
                  global.fliveLoc2 = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "title": "ImYanXiao","h": wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
                   global.ftoko = {
       key: {
                   fromMe: false,
                   participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})
               },
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./thumbnail.jpg') //Gambarnye
                           },
                           "title": wm, //Kasih namalu 
                           "description": "Elaina-MultiDevice", 
                           "currencyCode": "USD",
                           "priceAmount1000": "20000000",
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
       }
               
                     global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'
                               },
              message: {
                           "documentMessage": {
                           "title": wm, 
                           "jpegThumbnail": fs.readFileSync('./thumbnail.jpg')
                                 }
                               }
                             }
               
                    global.fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6285736178354-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Official Saxia GC", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
               }
           }
       }
       global.fimg = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				imageMessage: {
					url: logo,
					mimetype: 'image/jpeg',
					fileLength: fsizedoc,
					height: 306,
					width: 366,
					jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
				}
			}
		}
		global.fimgv = {
				key: {
					participant: '0@s.whatsapp.net'
				},
				message: {
					imageMessage: {
						url: logo,
						mimetype: 'image/jpeg',
						fileLength: fsizedoc,
						height: 306,
						width: 366,
						jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
						viewOnce: true
					}
				}
			}
       
                    global.fgif = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': wm,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
                            // Random Pick Fake
                             let pft = [global.fimg, global.fimgv, global.fpayment, global.ftroli, global.fkontak, global.fvn, global.fvid, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fgif]
			                   // Pick Random
		                     global.fakes = pft.getRandom()
		        
	}
}

export default handler 

function ucapan() {
	const time = moment.tz('Asia/Jakarta').format('HH')
	let res = "Selamat malam 🌌"
	if(time >= 1) {
		res = "Selamat Dini hari 🌌"
	}
	if(time >= 4) {
		res = "Selamat pagi ⛅"
	}
	if(time > 10) {
		res = "Selamat siang 🌅"
	}
	if(time >= 15) {
		res = "Selamat sore 🌇"
	}
	if(time >= 18) {
		res = "Selamat malam 🌃"
	}
	return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
