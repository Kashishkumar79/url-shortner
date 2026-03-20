const mongoose = require('mongoose');
const urlSchema =new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true
    },
    visitHistory:[{ timestap: {type:Number} }]
},{timestamps:true});

const url= mongoose.model('Url',urlSchema);
module.exports=url; 