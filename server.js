const express = require('express');
const app = express();
const providers = require('./src/models/providers')



app.get('/:index', (req, res) => {
    res.send(providers[req.params.index]);
});

app.listen(4000, () => {
    console.log("I am alive");
})
