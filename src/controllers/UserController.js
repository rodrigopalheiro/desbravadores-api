const User = require('../models/User');

module.exports = {
    async index(req, res){
        const users = await User.findAll({
            include: { 
                association: 'photo',
                attributes: { exclude: ['id', 'name', 'size', 'key', 'user_id', 'createdAt', 'updatedAt'] }
            },
        });
        res.json(users);
    },
    async store(req, res){
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        res.json(user);
    }
}