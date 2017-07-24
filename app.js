// This loads the environment variables from the .env file
require('dotenv-extended').load();
var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8080, function () {
   console.log('%s listening to %s', server.name, server.url);
});
// Create chat bot
var connector = new builder.ChatConnector({
    appId: "2c985f76-12fb-4255-9cc7-9fb5b52afe76",
    appPassword: "kDuqQFbU8jAb0KVRUi6onyu"
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//Bot on
bot.on('contactRelationUpdate', function (message) {
    if (message.action === 'add') {
        var name = message.user ? message.user.name : null;
        var reply = new builder.Message()
                .address(message.address)
                .text("Hello %s... If you want to see some boobies you cum to the right bot ]:).", name || 'there');
        bot.send(reply);
    } else {
        // delete their data
    }
});
bot.on('typing', function (message) {
  // User is typing
});
bot.on('deleteUserData', function (message) {
    // User asked to delete their data
});
//=========================================================
// Bots Dialogs
//=========================================================
String.prototype.contains = function(content){
  return this.indexOf(content) !== -1;
}

bot.dialog('/', function (session) {
   var name =session.message.user.name
    if(session.message.text.toLowerCase().contains('hello')){
      session.send("Hello %s... If you want to see some boobies you cum to the right bot ]:).", name || 'there');
      }else if(session.message.text.toLowerCase().contains('boobs') || session.message.text.toLowerCase().contains('boobies') ){
         session.send(`Here you Go!`);
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://i.ytimg.com/vi/GX6EcdC46X8/hqdefault.jpg'}]});
        }else if(session.message.text.toLowerCase().contains('search') || session.message.text.toLowerCase().contains('find') ){
           session.send(`try flat or boobs`);
        }else if(session.message.text.toLowerCase().contains('flat') || session.message.text.toLowerCase().contains('plank') ){
         session.send(`Sorry there's nothing! ;( `);
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://pbs.twimg.com/profile_images/2170836498/404girl.jpg'}]});
        }else if(session.message.text.toLowerCase().contains('types of boob')){
            session.send('Here are the Type of B(.)(.)BS that i know!');
            session.send('the FLAT AS F...');
            session.send("the Medium Flat");
            session.send("the Average one");
            session.send("the Above Avarage");
            session.send("the Huge one");
            session.send("the Watermelon");
            session.send("the I carry  2 earths on my chest");
            session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'http://pm1.narvii.com/5984/6a9ea381340d74eeb4710b57d03b8e5c2ffda037_hq.jpg'}]});
        }else if(session.message.text.toLowerCase().contains('help')){
            session.send(`How can I help you?`);
            session.send(`i can search anything about oppai just ask me!`);
            session.send(`Here's my available search option`);
            session.send(`search`);
            session.send(`types of boob`);
        }else if(session.message.text.toLowerCase().contains('what is boob')){
            session.send(`it is round and squishy thing that everyone love.`);
            session.send(`Some are lucky to have a juicy and bouncy boobs but others lack the squishy thing. `);
           session.send({attachments: [{contenttype: 'image/gif', contenturl: 'https://68.media.tumblr.com/09e1261d234405092d440911579b0094/tumblr_inline_nd3ariw6M31rkhir3.gif'}]});
        }else if(session.message.text.toLowerCase().contains('stupid')){
            session.send(`No! I'm not Stupid... I'am Patrick Stur`);
            session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://i.ytimg.com/vi/nu6zbz4UoIk/hqdefault.jpg'}]});
            session.send(`No! This is Patrick Stur`);
            session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'http://static1.fjcdn.com/comments/4660875+_0515275ab17a59769fb0de76d2445a97.jpg'}]});
        }else{
            session.send(`Sorry I don't understand you...`);
        }
});
