const express = require('express');
const { request } = require('http');
const PORT = 8080;
const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`app available on http://localhost:${PORT}`))

const { readFile } = require('fs').promises;

/*
app.get('/', async (req, res) => {

    res.send(await readFile('./home.html', 'utf8'));

});
*/

app.get('/game', async (req, res) => {

    res.status(200).send({
        name: 'Human with an Umbrella',
        developer: 'Sunfire Studios',
    });

});

app.post('/game/:id', async (req, res) => {

    const { id } = req.params;
    const { name } = req.body;
    const { developer } = req.body;

    if (!name) {
        res.status(400).send("We need a name")
    }

    if (!developer) {
        res.status(400).send("We need the developer")
    }

    res.send({
        name: `${name}`,
        developer: `${developer}`,
        id: `and the id: ${id}`,
    })
    
});

