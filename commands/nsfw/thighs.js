const fetch = require('node-fetch')

exports.run = async(client, message, args) => {
    if(message.channel.nsfw == false) {
        message.channel.send("HEY! THIS CHANNEL ISN'T NSFW. PLEASE SET CHANNEL TO NSFW YOUR HORNY FUCK")
        return;
        }

    fetch("https://shiro.gg/api/images/nsfw/thighs")
    .then(res => res.json())
    .then(body => {
        const e = new Discord.MessageEmbed()
            .setDescription(`Here you go`)
            .setImage(body.url)
            message.channel.send(e)
    })
    }
    exports.help = {
        name: "thighs",
        aliases: [],
        description: "Fetch some thighs images",
        useage: ""
    }