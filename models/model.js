const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    product: {type:String, required:true},
    imgUrl:{type:String, required:true},
    description:{type:String,required:true},
    date:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Store', storeSchema);