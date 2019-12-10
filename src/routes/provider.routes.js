const express = require('express');
const providerRouter = express.Router();
const ProviderCtrl = require('../controllers/Provider.controller');
const Provider = new ProviderCtrl();

providerRouter.get('/', (req, res) => {
    res.send("Provider works");
});

providerRouter.get('/reset', async (req, res) => {
    const resetResult = await Provider.reset();
    res.send(resetResult);
});

providerRouter.get('/findAll', async (req, res) => {
    const findAll = await Provider.findAll();
    res.json(findAll);
});

providerRouter.get('/find/id/:id', async (req, res) => {
    const findOne = await Provider.findOne(req.params.id);
    res.json(findOne);
})

providerRouter.get('/find/name/:name', async (req, res) => {
    const findOneByName = await Provider.findOneByName(req.params.name);
    res.json(findOneByName);
})

providerRouter.delete('/delete/id/:id', async (req,res) => {
    res.json(await Provider.deleteByID(req.params.id))
})

providerRouter.delete('/delete/name/:name', async (req,res) => {
    res.json(await Provider.deleteByName(req.params.name))
})

providerRouter.post('/new', async (req,res) => {
    const newProvider = await Provider.newProvider(req.body);
    console.log(newProvider)
    res.status(newProvider.status).json(newProvider).send();
})

providerRouter.put('/update/:id', async (req,res) => {
    const updateProvider = await Provider.updateById(req.params.id, req.body);

    console.log(req.body)
    console.log(updateProvider);

    res.json(updateProvider).send();
})

module.exports = providerRouter;
