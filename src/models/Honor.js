const { Model, DataTypes } = require('sequelize');

class Honor extends Model {

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            requirements: DataTypes.TEXT,
            level: DataTypes.INTEGER,
            year: DataTypes.INTEGER,
            home_institution: DataTypes.STRING,
        }, {
            sequelize
        });
    }

    static associate(models){
        this.belongsTo(models.HonorCategory, { foreignKey: 'category_id', as: 'category' });
    }
    
}

module.exports = Honor;