const mongoose = require("mongoose")
const User = mongoose.model('User', {
    name:{
        type:String,
        trim:true,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

module.exports = User