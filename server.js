require('./mongo');
const express = require('express');
const providers = require('./src/models/provider');
const bodyParser = require('body-parser');
const apiRouter = require('./routes')
const cors = require('cors');

const port = process.env.EXPRESS_PORT || 4000;
const host = process.env.EXPRESS_HOST || '0.0.0.0';
const app = express();

app.use(cors()); 
app.use(bodyParser.json({extended:false}));

app.use('/api', apiRouter);



app.get('/:index', (req, res) => {
    res.send(providers[req.params.index]);
});



app.listen(port, host, () => {
    console.log(`App listening on host ${host} and ${port} - - local URL: http://localhost:${port}`);
})
