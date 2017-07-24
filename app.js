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
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://vignette2.wikia.nocookie.net/edwikia/images/e/ee/Plank.jpg/revision/latest/scale-to-width-down/338?cb=20101125042626'}]});
        }else if(session.message.text.toLowerCase().contains('types of boob')){
            session.send('Theres the FLAT AS F...');
            session.send("Theres the Medium Flat");
            session.send("Theres the Average one");
            session.send("Theres the Above Avarage");
            session.send("Theres the Huge one");
            session.send("Theres the Watermelon");
            session.send("Theres the I carry the 2 earths on my chest");
        }else if(session.message.text.toLowerCase().contains('help')){
        session.send(`How can I help you?`);
      }else{
        session.send(`Sorry I don't understand you...`);
      }
});
