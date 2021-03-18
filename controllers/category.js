const {Category, validate} = require('../models/category');
const auth = require('../middleware/auth');

exports.createCategory = (auth, async (req, res)=>{
   const error = validate(req.body);
   if(error){
       res.status(400).send(error.details[0].message);
   }
   const category = new Category({
       name: req.body.name
   });
   await category.save();
   res.json({category });

})