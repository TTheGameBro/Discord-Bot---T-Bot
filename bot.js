const Discord = require("discord.js");
const token = "Mzk3MjU4ODUxNjg0MDU3MDkz.DStXpw.axfxD8ryyfAJxP_Hgs1rCS25FBs";
const prefix = "-";
//8Ball Game
var fortunes = [
    "Yes", 
    "No",
    "Maybe",
]; 


//Console Log Message
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});    

//Prefix
bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(" ");

    //Commands
    switch (args[0].toLowerCase()) {
        
        //Info
        
        case "info":
            message.channel.sendMessage("I'm a Multi-Purpose bot created by T TheGameBro.");
            break;
        
        //8Ball Command
        case "8ball":
                if(args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]); 
                else message.channel.sendMessage("Can't read that");
            break;
        
            //Help Command
            case "help":
            var embed = new Discord.RichEmbed() 
                .addField("Moderation", "-info", true)
                .addField("Fun", "-8ball", true)
                .addField("Music", "-play -stop -skip", true)
                .addField("Utilities","not setup yet", true)
                .addField("Information", "-info -ping", true) 
                .addField("Social", "-rank -level", true)                               
                .setColor(0x0000ff)
                .setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(embed);
            break;
        }
});    

client.login(procees.env.BOT_TOKEN);
