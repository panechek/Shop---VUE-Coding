const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(express.static('public'));

const jsonParser = bodyParser.json()

app.get('/catalog', (req, res) => {
    fs.readFile('./data/catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
})

app.get('/cart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
})

app.post('/cart', jsonParser, (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, text) => {
        const cart = JSON.parse(text);

        console.log(req.body)
        req.body
        const good = cart.find(good => good.id_product === req.body.id_product)
        if (good == undefined) {
            req.body.count = 1;

            cart.push(req.body)
            // console.log(req.body)
        } else {
            good.count++;
        }
        fs.writeFile('./data/cart.json', JSON.stringify(cart), () => {
            res.end();
        })
    });
})

app.delete('/cart', jsonParser, (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, text) => {
        const cart = JSON.parse(text);

        console.log(req.body)
        req.body
        const good = cart.find(good => good.id_product === req.body.id_product)

        // good.count = --good.count;


        const removeIndex = cart.map(function (item) {
            return item.id_product;
        }).indexOf(good.id_product);
        cart.splice(removeIndex, 1);


        fs.writeFile('./data/cart.json', JSON.stringify(cart), () => {
            res.end();
        })
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})