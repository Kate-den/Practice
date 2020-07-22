const  request = require("request");

request.get(
    "https://cat-fact.herokuapp.com/facts/random?animal_type&amount=36",
    (data, err, body) => {
        let parsedBody = JSON.parse(body);
        let arr = [];
        parsedBody.forEach((elem) => {
            arr.push(elem.text);
        });

        arr.map((elem) => {
            console.log(`${elem}\m`);
        });
    }
);