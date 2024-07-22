const mongoose= require('mongoose')

const todoSchema= new mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('ToDO',todoSchema)

