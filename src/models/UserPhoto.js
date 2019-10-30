const { Model, DataTypes } = require('sequelize');

class UserPhoto extends Model {

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            size: DataTypes.INTEGER,
            key: DataTypes.STRING,
            url: DataTypes.STRING,
        }, {
            hooks: {
                beforeCreate: (photo, options) => {
                    if(!photo.url){
                        photo.url = `${process.env.APP_URL}/static/${photo.key}`;
                    }
                }
            },
            sequelize
        });
    }
    
    static associate(models){
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
   }
}

module.exports = UserPhoto;