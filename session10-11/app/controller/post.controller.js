const postModel = require("../database/models/post.model")
class Post{
    static add = async(req,res)=>{
        try{
            const postData = new postModel({
                ...req.body,
                userId:req.user._id
            })
            await postData.save()
            res.status(200).send({
                apiStatus:true,
                data:postData,
                message:"post added"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"post adding error"
            })
        }
    }
}
module.exports = Post