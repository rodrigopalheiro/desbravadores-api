const { Model, DataTypes } = require('sequelize');

class User extends Model {

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize
        });
    }
    
    static associate(models){
        this.hasOne(models.UserPhoto, { foreignKey: 'user_id', as: 'photo' });
    }

}

module.exports = User;