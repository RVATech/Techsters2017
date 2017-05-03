const alexa = require('alexa-sdk');

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', "Welcome to your cookbook, ask me some questions and I'll try to answer!");
    },
    'FavoriteIceCream': function () {
        this.emit(':ask', "I love all types of ice cream, but rocky road is my favorite!");
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
        var handler = this;
        var http = require('http');

        var url='http://food2fork.com/api/search?key=fa766e3612ffd0bb81207883147518f4&cq='+ingredient;

        http.get(url, function(res) {
            var body = '';
            res.on('data', function(chunk) { body += chunk; });
            res.on('end', function() {
                const recipeList = JSON.parse(body);
                const recipeNumber = Math.floor(Math.random() * recipeList.count);
                handler.emit(':tell', recipeList.recipes[recipeNumber].title);
            });
        });
    }
};

exports.handler = (event, context) => {
    const handler = alexa.handler(event, context);
    handler.registerHandlers(handlers);
    handler.execute();
};
