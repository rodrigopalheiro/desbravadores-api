const User = require('../models/User');
const UserPhoto = require('../models/UserPhoto');
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

module.exports = {
   async index(req, res){
      const { user_id } = req.params;

      const user = await User.findByPk(user_id);
      if(!user){
         return res.status(400).json({ error: `User not found` });
      }

      const photo = await UserPhoto.findAll({ where: { user_id } });
      res.json(photo);
   },
   async store(req, res){

      const { user_id } = req.params;

      const user = await User.findByPk(user_id);
      if(!user){
         return res.status(400).json({ error: `User not found` });
      }
      
      const { originalname: name, size, key, location: url = '' } = req.file;

      const photo = await UserPhoto.create({ 
         name,
         size,
         key, 
         url,
         user_id
      });

      res.json(photo);
   },
   async destroyAll(req, res){
      const { user_id } = req.params;

      const user = await User.findByPk(user_id);
      if(!user){
         return res.status(400).json({ error: `User not found` });
      }

      const photos = await UserPhoto.findAll({ where: { user_id } });
      
      photos.map(photo => {
         if(process.env.STORAGE_TYPE === 's3'){
            const s3 = new aws.S3();
   
            return s3.deleteObject({
               Bucket: process.env.AWS_BUCKET,
               Key: photo.key
            }).promise();
   
         }else{
            return promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'tmp', 'uploads', photo.key));
         }
      });
      
      await UserPhoto.destroy({ where: { user_id } });

      return res.send();
   }

}