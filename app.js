//Beam Selfbot by ComixsYT
var version = "0.1"

var fs = require("fs");
var request = require("request")

var userID = fs.readFileSync("./userID.txt", "utf-8")

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  console.log("ComixsYT\'s beam bot version " + version)
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content.startsWith("beam.live ")){
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
                      .setDescription("Hey guys, " + beam + " is live right now! Click above to watch!")
                      .setFooter("Sent via M8 Bot", "https://cdn.discordapp.com/app-icons/278362996349075456/ce8868a4a1ccbe2f3f746d864f61a206.jpg")
                      .setThumbnail(beamInfo.user.avatarUrl)
                      .setTimestamp()
                      .setURL("http://beam.pro/" + beam)
                      .addField("Streaming", game, true)
                      .addField("Followers", beamInfo.numFollowers, true)
                      .addField("Beam Level", beamInfo.user.level, true)
                      .addField("Total Views", beamInfo.viewersTotal, true) //end the embed message template
                      msg.channel.sendEmbed(liveEmbed, "@here, " + beam + " is live!")
                  var shareMessage = beamInfo.preferences.sharetext.replace("%URL%", "http://beam.pro/" + beamInfo.token)
              }
          });

    }
});

client.login(fs.readFileSync("./token.txt", "utf-8"));
