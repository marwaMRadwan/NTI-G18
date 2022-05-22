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
}
module.exports = User