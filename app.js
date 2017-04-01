//M8 Bot Mini by ComixsYT
var version = "2.0"

var fs = require("fs");
var request = require("request")

var userID = fs.readFileSync("./userID.txt", "utf-8")

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    console.log("Running ComixsYT\'s M8 Bot Mini version " + version)
});

client.on('message', msg => {
    if (msg.content.startsWith("m8.live ") && msg.author.id == userID) {
        msg.delete(1000)
        let args = msg.content.split(" ").slice(1); //seperare command into args
        let beam = args[0]; //beam name is arg 0
        var request = require("request"); //sets a var to request info
        request("https://beam.pro/api/v1/channels/" + beam, function(error, response, body) { //request streamer's in in JSON form
            if (!error && response.statusCode == 200) { //if there is no error
                var beamInfo = JSON.parse(body); //sets beamInfo to the JSON data
                if (beamInfo.type == null) { //if there is no game set to the stream
                    var game = "[API ERROR]"; //set the game to the meme game
                } else { //if there is a game set
                    var game = beamInfo.type.name; //set the game var to the streamer's game
                }
                const liveEmbed = new Discord.RichEmbed() //start the embed message template
                    .setTitle(beamInfo.token + "\'s Stream")
                    .setAuthor(beamInfo.name)
                    .setColor(0x4298f4)
                    .setDescription("Hey guys, " + beamInfo.token + " is live right now! Click above to watch!")
                    .setFooter("Sent via M8 Bot", "https://cdn.discordapp.com/app-icons/278362996349075456/ce8868a4a1ccbe2f3f746d864f61a206.jpg")
                    .setThumbnail(beamInfo.user.avatarUrl)
                    .setTimestamp()
                    .setURL("http://beam.pro/" + beamInfo.token)
                    .addField("Streaming", game, true)
                    .addField("Followers", beamInfo.numFollowers, true)
                    .addField("Beam Level", beamInfo.user.level, true)
                    .addField("Total Views", beamInfo.viewersTotal, true) //end the embed message template
                msg.channel.sendEmbed(liveEmbed, beamInfo.token + " is live!")
            }
        });
    }
    if (msg.content.startsWith("m8.live.tag ") && msg.author.id == userID) {
        msg.delete(1000)
        let args = msg.content.split(" ").slice(1); //seperare command into args
        let beam = args[0]; //beam name is arg 0

        var request = require("request"); //sets a var to request info
        request("https://beam.pro/api/v1/channels/" + beam, function(error, response, body) { //request streamer's in in JSON form
            if (!error && response.statusCode == 200) { //if there is no error
                var beamInfo = JSON.parse(body); //sets beamInfo to the JSON data
                if (beamInfo.type == null) { //if there is no game set to the stream
                    var game = "[API ERROR]"; //set the game to the meme game
                } else { //if there is a game set
                    var game = beamInfo.type.name; //set the game var to the streamer's game
                }
                const liveEmbed = new Discord.RichEmbed() //start the embed message template
                    .setTitle(beamInfo.token + "\'s Stream")
                    .setAuthor(beamInfo.name)
                    .setColor(0x4298f4)
                    .setDescription("Hey guys, " + beamInfo.token + " is live right now! Click above to watch!")
                    .setFooter("Sent via M8 Bot", "https://cdn.discordapp.com/app-icons/278362996349075456/ce8868a4a1ccbe2f3f746d864f61a206.jpg")
                    .setThumbnail(beamInfo.user.avatarUrl)
                    .setTimestamp()
                    .setURL("http://beam.pro/" + beamInfo.token)
                    .addField("Streaming", game, true)
                    .addField("Followers", beamInfo.numFollowers, true)
                    .addField("Beam Level", beamInfo.user.level, true)
                    .addField("Total Views", beamInfo.viewersTotal, true) //end the embed message template
                msg.channel.sendEmbed(liveEmbed, "@here, " + beamInfo.token + " is live!")
            }
        });
    }
});

client.login(fs.readFileSync("./token.txt", "utf-8"));
