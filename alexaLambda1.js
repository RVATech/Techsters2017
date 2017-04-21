const alexa = require('alexa-sdk');

const handlers = {
    'LaunchRequest': function () {
        this.emit(':tell', "Welcome to your cookbook, ask me some questions and I'll try to answer!");
    },
    'FavoriteIceCream': function () {
        this.emit(':tell', "I love all types of ice cream, but rocky road is my favorite!");
    }
};

exports.handler = (event, context) => {
    const handler = alexa.handler(event, context);
    handler.registerHandlers(handlers);
    handler.execute();
};
