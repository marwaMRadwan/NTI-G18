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
}
module.exports = User