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
    static editLogic= (req,res)=>{
                            // dbCon((err, db)=>{
                                //     if(err) res.render("err404", {pageTitle:"database error", errMsg:"database error"})
                                //     db.collection("data").updateOne(
                                    //         {_id:new ObjectId(req.params.id)},
                                    //         {$set: req.body} //$inc:{age:10}
                                    //     )
                                    //     .then(()=>res.redirect(`/show/${req.params.id}`))
                                    //     .catch((e)=>{res.render("err404", {pageTitle:"err in update", errMsg:e.message})})
                                    
                                    // })        
    }
    static del= (req,res)=>{
                                    // dbCon((err, db)=>{
                                        //     if(err) res.render("err404", {pageTitle:"database error", errMsg:"database error"})
                                        //     db.collection("data").deleteOne(
        //         {_id:new ObjectId(req.params.id)}
        //     )
        //     .then(()=>res.redirect(`/`))
        //     .catch((e)=>{res.render("err404", {pageTitle:"err in update", errMsg:e.message})})
        
        // })     
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