const dbCon = require('../../database/connetDB')
const ObjectId = require("mongodb").ObjectId
class User{
    static add= (req,res)=>{
        res.render("add", {pagetTitle:"add new user"})
    }
    static addLogic= (req,res)=>{
        const user = req.body
        dbCon((err, db)=>{
            if(err) res.send(err)
            db.collection("data").insertOne(user)
            .then((r)=> res.redirect("/"))
            .catch((e)=> res.send(e))
        })
    }
    static showAll= (req,res)=>{
        dbCon((err, db)=>{
            if(err) res.send(err)
            db.collection("data").find().toArray((error, users)=>{
                if(error) res.send(error)
                res.render("all", {
                    pagetTitle:"add new user", 
                    users,
                    hasUsers: users.length
                })
            })

        })
    }
    static showSingle= (req,res)=>{
        dbCon((err, db)=>{
            try{
            if(err) res.send(err)
            db.collection("data").findOne({_id: new ObjectId(req.params.id)}, 
                (error, user)=>{
                if(error) res.send(error)
                // console.log(user)
                res.render("single", {
                    pageTitle:user?`user ${user.name} data`:"user not found", 
                    user
                })
            }
            )}
            catch(e){
                res.render('err404',
                {pagetTitle:"invalid id",errMsg:"invalid id format"}
                )
            }  
        })
    }

    static edit= (req,res)=>{
        dbCon((err, db)=>{
            try{
            if(err) res.send(err)
            db.collection("data").findOne({_id: new ObjectId(req.params.id)}, 
                (error, user)=>{
                if(error) res.send(error)
                res.render("edit", {
                    pageTitle:user?`edit user ${user.name} data`:"user not found", 
                    user
                })
            }
            )}
            catch(e){
                res.render('err404',
                {pagetTitle:"invalid id",errMsg:"invalid id format"}
                )
            }
            
        })

        // res.render("edit", {pagetTitle:"add new user"})
    }
    static editLogic= (req,res)=>{
        dbCon((err, db)=>{
            if(err) res.render("err404", {pageTitle:"database error", errMsg:"database error"})
            db.collection("data").updateOne(
                {_id:new ObjectId(req.params.id)},
                {$set: req.body} //$inc:{age:10}
            )
            .then(()=>res.redirect(`/show/${req.params.id}`))
            .catch((e)=>{res.render("err404", {pageTitle:"err in update", errMsg:e.message})})
            
        })        
    }
    static del= (req,res)=>{
        dbCon((err, db)=>{
            if(err) res.render("err404", {pageTitle:"database error", errMsg:"database error"})
            db.collection("data").deleteOne(
                {_id:new ObjectId(req.params.id)}
            )
            .then(()=>res.redirect(`/`))
            .catch((e)=>{res.render("err404", {pageTitle:"err in update", errMsg:e.message})})
            
        })     }
}
module.exports = User