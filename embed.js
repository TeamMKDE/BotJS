const { RichEmbed, DiscordAPIError } = require('discord.js')

const COLORS = {
    red: 0xe74c3c,
    green: 0x2ecc71,
    blue: 0x3498db,
    yello: 0xf1c40f,
    purple: 0x9b59b6,
    aqua: 0x1abc9c
}

exports.test = "test"

module.exports = {

    error(chan, cont, title) {
        var message
        var emb = new RichEmbed()
            .setColor(COLORS.red)
            .setDescription(cont)

        if (title) {
            emb.setTitle(title)
        }
        chan.send('', emb).then((m) => {
            message = m
        })
        return message
    },

    hypixel(chan, cont) {
        var emb = {
            embed: {
                title: `Hypixel Level von ${cont}`,
                image: {
                    url: `https://gen.plancke.io/exp/${cont}.png`,
                }
            }
        }
        chan.send('', emb)
    },

    
    
    
    info(chan, cont, title){
        var emb = {
            embed: {
                color: COLORS.yello,
                description: cont,
                title: title,
            }
        }
        chan.send('', emb)
    },

    message(chan, cont, title){
        var emb = {
            embed: {
                color: COLORS.green,
                description: cont,
                title: title,
            }
        }
        chan.send('', emb)
    }



}