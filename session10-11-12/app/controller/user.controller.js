const userModel = require("../database/models/user.model")
const sendEmail = require("../helper/sendEmail.helper")
class User{
    static register = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            await user.save()
            sendEmail(user.email)
            res.status(200).send({
                apiStatus:true,
                data: user,
                message:"user added successfully"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data: e.message,
                message:"user adding problem"
            })

        }
    }
    static login = async(req,res)=>{
        try{
            let user = await userModel.loginUser(req.body.email,req.body.password)
            let token = await user.generateToken()
            res.status(200).send({
                apiStatus:true, 
                data:{user, token}, 
                message:"user logged in"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.message, message:"invalid login"})
        }
    } 
    static me = async(req,res)=>{
        res.send(req.user)
    }
    static logOut = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter(singleToken =>{
                return singleToken.token != req.token
            } )
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"logged out",
                data:{}
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.message, message:"error on logout"})
        }
    }
    static logOutAll = async(req,res)=>{
        try{
            req.user.tokens = []
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"logged out",
                data:{}
            })

        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.message, message:"error on logout"})
        }
    }
    static editPassword = async(req,res)=>{
        try{
            const isValid = await req.user.checkPass(req.body.currentPass)
            if(!isValid) throw new Error("invalid Password")
            req.user.password = req.body.newPass
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                data:"updated",
                message:"password updated"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false, 
                data:e.message, 
                message:"error on update password"})
        }
    }
    static allUsers = async(req,res)=>{
        try{
            const users = await userModel.find()
            res.status(200).send({
                apiStatus:true,
                data:users,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in fetching"
            })
        }
    }
    static singleUser = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            if(!user)
                return res.status(404).send({ apiStatus:false, data:{}, message:"user not found"})    
            res.status(200).send({ apiStatus:true, data:user, message:"data fetched" })
        }
        catch(e){
            res.status(500).send({ apiStatus:false, data:e.message, message:"error in fetching" })
        }

    }
    static editUser = async(req,res)=>{
        try{
            const invalidEdits = ["password", "tokens", "status", "__v", "updatedAt"]
            for (const property in req.body) {
                if(!invalidEdits.includes(property)) 
                    req.user[property] = req.body[property]
            }
            req.user.save()
            res.send({
                  apiStatus:true,
                  data:req.user,
                  message:"data updated"
              })
        }
        catch(e){
            res.status(500).send({ apiStatus:false, data:e.message, message:"error in fetching" })
        }
    }
    static activate =async(req,res)=>{
        try{
            if(req.user.status) throw new Error("already active")
            req.user.status=true
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"updated",
                data: req.user
            })
        }
        catch(e){
            res.status(500).send({ apiStatus:false, data:e.message, message:"error in fetching" })
        }

    }
    static activateWithoutLogin =async(req,res)=>{
        try{}
        catch(e){
            res.status(500).send({ apiStatus:false, data:e.message, message:"error in fetching" })
        }
    }
    static changeImage =async(req,res)=>{
        try{}
        catch(e){
            res.status(500).send({ apiStatus:false, data:e.message, message:"error in fetching" })
        }

    }
}
module.exports = User