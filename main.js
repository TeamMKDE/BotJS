const Discord = require('discord.js')
const fs = require('fs')
const Embeds = require('./embed')

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

var client = new Discord.Client()


client.on('ready', () => {
    console.log(`${client.user.username} ist bereit!`)
    console.log(`Der Bot ist auf ${client.guilds.size} Servern!`)
})


var cmdmap = {
    say: cmd_say,
    test: cmd_test,
    svrcount: cmd_svrcount,
    hypixel: cmd_hypixel

}

function cmd_say(msg, args) {
    Embeds.message(msg.channel, args.join(' '))
}

function cmd_hypixel(msg, args) {
    Embeds.hypixel(msg.channel, args)
}

function cmd_test(msg, args) {
    Embeds.info(msg.channel, "Test", "Test")
}

function cmd_svrcount(msg, args) {
    msg.channel.send(`Der Bot ist auf ${client.guilds.size} Servern!`)
}

client.on('message', (msg) => {

    var cont = msg.content,
        author = msg.member,
        channel = msg.channel,
        guild = msg.guild


    if (author.id != client.user.id && cont.startsWith(config.prefix)) {
        
        var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.split(' ').slice(1)
        console.log(invoke, args)
        if (invoke in cmdmap) {
            cmdmap[invoke](msg, args)
        }
    }
})

client.login(config.token)