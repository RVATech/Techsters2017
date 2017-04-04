const alexa = require('alexa-sdk');

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', "Welcome to your cookbook, ask me some questions and I'll try to answer!");
    },
    'FavoriteIcecream': function () {
        this.emit(':ask', "I love all types of icecream, but rocky road is my favorite!");
    }
};

exports.handler = (event, context) => {
    const handler = alexa.handler(event, context);
    handler.registerHandlers(handlers);
    handler.execute();
};
