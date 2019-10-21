const Honor = require('../models/Honor');
const HonorCategory = require('../models/HonorCategory');

module.exports = {
    async index(req, res){
        const { category } = req.query;

        let query = {
            attributes: { exclude: ['category_id', 'createdAt', 'updatedAt'] },
            order: [['name', 'ASC']],
            include: { 
                association: 'category',
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
                where: { abbr: category }
            }
        };

        if(!category){
            query.include = null;
        }

        const honors = await Honor.findAll(query);

        res.json(honors);
    },
    async store(req, res){
        const { honor_category_abbr } = req.params;
        const { name, requirements, level, year, home_institution } = req.body;

        const category = await HonorCategory.findAll({where: { abbr: honor_category_abbr }})
        if(!category){
            return res.status(400).json({ error: `Honor category ${honor_category_abbr} not found` });
        }

        const honor = await Honor.create({ 
            name, 
            requirements, 
            level, 
            year, 
            home_institution,
            category_id: category[0].id
        });

        res.json(honor);
    }
}