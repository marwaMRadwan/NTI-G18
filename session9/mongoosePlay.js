const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/mongooseg18")
const User = mongoose.model("User", {
    name:{
        type:String,
        trim:true,
        lowercase: true,
        required:true,
        minlength:3,
        maxlength:15
    },
    age:{
        type:Number,
        min:21,
        max:60
    }
})

const userData = new User({name:"marwa", age:65})
userData.save()
.then(res=>console.log(res))
.catch(e=> console.log(e.message))
// console.log(userData)