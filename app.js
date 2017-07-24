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
        }else if(session.message.text.toLowerCase().contains('flat') || session.message.text.toLowerCase().contains('plank') ){
         session.send(`Here you Go!`);
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'data:image/jpeg;base64,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'}]});
        }else if(session.message.text.toLowerCase().contains('types of boob')){
            session.send('Here are the Type of B(.)(.)BS that i know!');
            session.send('the FLAT AS F...');
            session.send("the Medium Flat");
            session.send("the Average one");
            session.send("the Above Avarage");
            session.send("the Huge one");
            session.send("the Watermelon");
            session.send("the I carry  2 earths on my chest");
        }else if(session.message.text.toLowerCase().contains('help')){
            session.send(`How can I help you?`);
            session.send(`How can I help you?`);
        }else{
            session.send(`Sorry I don't understand you...`);
        }
});
