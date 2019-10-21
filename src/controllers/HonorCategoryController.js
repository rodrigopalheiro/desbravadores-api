const HonorCategory = require('../models/HonorCategory');

module.exports = {
    async index(req, res){
        const categories = await HonorCategory.findAll({
            include: { association: 'honors' }
        });
        res.json(categories);
    },
}