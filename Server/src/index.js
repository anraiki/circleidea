const express       = require('express');
const { Client }    = require("pg");
const app           = express();
const port          = 8000;

let db              = new Client();


app.get('/api', async (req, res) => {

    await db.connect();
    const result = await db.query('SELECT NOW()');
    console.log(result);
    await db.end();

    res.send('Hello World!');

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));