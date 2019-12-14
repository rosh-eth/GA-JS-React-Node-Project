const ProviderModel = require('../models/provider');
const providerData = require('../models/providerSeed');


class ProviderControl
{
    async reset()
    {
        await ProviderModel.deleteMany({});
        await ProviderModel.create(providerData);
        return "Reset Complete";
    }

    async newProvider(body)
    {
        let status = 500;
        let msg = "";
        //body.id = uuidv1(); //add unique ID

        try
        {
            await ProviderModel.create(body);
            status = 200;
            msg = "New Provider Created";
        }
        catch (e) {
            status = 500;
            msg = e;
        }

        return {status: status, msg: msg};
    }

    async deleteByID(_id)
    {
        const delRes = await ProviderModel.deleteOne({_id: _id});
        
        if(delRes.deletedCount > 0)
        {
            return `Provider ${_id} deleted`
        }
        return `Provider ${_id} not deleted`
    }

    async deleteByName(name)
    {
        const delRes = await ProviderModel.deleteOne({name: name});
        
        if(delRes.deletedCount > 0)
        {
            return `Provider ${name} deleted`
        }
        return `Provider ${name} not deleted`
    }

    async updateById(id, body)
    {
        return ProviderModel.findOneAndUpdate(
            {_id: id},
            body,
            {new: true}
        )
    }

    async findAll()
    {
        return ProviderModel.find({});
    }

    async findOne(id)
    {
        return ProviderModel.findOne({_id: id});
    }

    async findOneByName(name)
    {
        return ProviderModel.findOne({name: name});
    }
}

module.exports = ProviderControl;
