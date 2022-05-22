const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, "required name"]
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: [true, "email used before"],
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email address")
        }
    },
    password:{
        type: String,
        trim: true,
        required: [true, "required name"],
        // match:
    },
    phone:{
        type: String,
        trim: true,
        required: [true, "required name"],
        validate(value){
            if(!validator.isMobilePhone(value, 'ar-EG') ) 
                throw new Error("invalid mobile number")
        }
    },  
    age:{
        type:Number,
        min:21,
        max:60
    },
    gender:{
        type: String,
        trim: true,
        required: [true, "required name"],
        enum: ['male', 'female']
    },
    status:{
        type:Boolean, default:false
    },
    image:{
        type: String,
        trim: true,
    },
    addresses: [
        {
            address:{
                addrType:{
                    type: String,
                    trim: true,
                    required: [true, "required name"],
                },
                addrDetails:{
                    type: String,
                    trim: true,
                    required: [true, "required name"],
                },
                addrBuildingNum:{
                    type:Number,
                    min:1,
                    max:1000
                }
            }
        }
    ]
}, {
    timestamps:true //createdAt, updatedAt
})
//toJSON
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.__v
    return user
}
//pre
userSchema.pre("save", async function(){
    const userData = this
    if(userData.isModified("password")) 
        userData.password = await bcrypt.hash(userData.password, 10)
})
//login
userSchema.statics.loginUser = async(email, password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error("invalid email")
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) throw new Error("invalid password")
    return user
}
const User = mongoose.model("User",userSchema)
module.exports = User