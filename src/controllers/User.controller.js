const UserModel = require('../models/User.model');

class UserControl
{
    async newProvider(body)
    {
        let status = 500;
        let msg = "";
        //body.id = uuidv1(); //add unique ID

        try
        {
            await UserModel.create(body);
            status = 200;
            msg = "New User Created";
        }
        catch (e) {
            status = 500;
            msg = e;
        }

        return {status: status, msg: msg};
    }

    async deleteByID(_id)
    {
        const delRes = await UserModel.deleteOne({_id: _id});
        
        if(delRes.deletedCount > 0)
        {
            return `User ${_id} deleted`
        }
        return `User ${_id} not deleted`
    }

    async deleteByName(name)
    {
        const delRes = await UserModel.deleteOne({name: name});
        
        if(delRes.deletedCount > 0)
        {
            return `User ${name} deleted`
        }
        return `User ${name} not deleted`
    }

    async updateById(id, body)
    {
        return UserModel.findOneAndUpdate(
            {_id: id},
            body,
            {new: true}
        )
    }

    async findAll()
    {
        return UserModel.find({});
    }

    async findOne(id)
    {
        return UserModel.findOne({_id: id});
    }

    async findOneByName(name)
    {
        return UserModel.findOne({name: name});
    }
}

module.exports = UserControl;
