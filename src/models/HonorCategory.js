const { Model, DataTypes } = require('sequelize');

class HonorCategory extends Model {

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            abbr: DataTypes.STRING
        }, {
            sequelize
        });
    }
    
    static associate(models){
        this.hasMany(models.Honor, { foreignKey: 'category_id', as: 'honors' });
    }

}

module.exports = HonorCategory;