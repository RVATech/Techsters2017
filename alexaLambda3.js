const alexa = require('alexa-sdk');

const handlers = {
    'LaunchRequest': function () {
        this.emit(':tell', "Welcome to your cookbook, ask me some questions and I'll try to answer!");
    },
    'FavoriteIceCream': function () {
        this.emit(':tell', "I love all types of ice cream, but rocky road is my favorite!");
    },
    'KitchenFacts': function () {
        const facts = [
            'Pringles once had a lawsuit trying to prove that they weren’t really potato chips.',
            'Ripe cranberries will bounce like rubber balls.',
            'An average ear of corn has an even number of rows, usually 16.',
            'Apples belong to the rose family, as do pears and plums.',
            'One of the most popular pizza toppings in Brazil is green peas.'
        ];
        const factNumber = Math.floor(Math.random() * facts.length);

        this.emit(':tell', facts[factNumber]);
    },
    'RecipeFinder': function() {
        const ingredient = this.event.request.intent.slots.Ingredient.value;
        const recipes = {
            'chocolate': 'whipped chocolate pie',
            'vanilla': 'home made vanilla bean ice cream',
            'strawberries': 'strawberry custard',
            'almond': 'almond crust cheesecake'
        }
        this.emit(':tell', recipes[ingredient]);
    }
};

exports.handler = (event, context) => {
    const handler = alexa.handler(event, context);
    handler.registerHandlers(handlers);
    handler.execute();
};
