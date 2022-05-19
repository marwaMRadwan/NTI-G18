// const dbCon = require('../../database/connetDB')
const userModel = require('../../database/models/user.model')
class User{
    static add= (req,res)=>{
        res.render("add", {pagetTitle:"add new user"})
    }
    static addLogic= async(req,res)=>{
        try{        
            const user = new userModel(req.body) //{name:fname, age:myage}
            await user.save()
            res.redirect("/")
        }
        catch(e){
            res.render("err404", {
                pageTitle:"Error in Database", 
                errMsg:e.message
            })
        }
        
    }
    static showAll= async(req,res)=>{
        try{
            const users = await userModel.find()
            res.render("all", {
                pagetTitle:"add new user", 
                users,
                hasUsers: users.length
            })
        }
        catch(e){
            res.render("err404", {
                pageTitle:"error page",
                errMsg:e.message
            })
        }        
    }
    static showSingle= async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            res.render("single", {
                pageTitle:user?`user ${user.name} data`:"user not found", 
                user
            })
        }
        catch(e){
            res.render("err404", {
                pageTitle:"error in db",
                errMsg:e.message
            })
        }
    }
    static edit= async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            res.render("edit", {
                pageTitle:user?`user ${user.name} data`:"user not found", 
                user
            })
        }
        catch(e){
            res.render("err404", {
                pageTitle:"error in db",
                errMsg:e.message
            })
        }
    }
    static editLogic= async(req,res)=>{
        try{
            const user = await userModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect(`/show/${user._id}`)
            // const user = await userModel.findById(req.params.id)
            // user.name="x"
            // await user.save()
        }
        catch(e){
            res.render("err404", {pageTitle:"error in db", errMsg:e.message})
        }

    }
    static del= async(req,res)=>{
        try{
            await userModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        }
        catch(e){
            res.render("err404", {pageTitle:"error in db", errMsg:e.message})
        }
    }
    }
    module.exports = User
    // static addLogic= (req,res)=>{
    //     const user = new userModel(req.body)
    //     user.save()
    //     .then(
    //         ()=> res.redirect("/")
    //         )
    //     .catch(
    //         (e)=> res.render("err404", {
    //         pageTitle:"Error in Database", 
    //         errMsg:e.message
    //     })
    //     )
    // }