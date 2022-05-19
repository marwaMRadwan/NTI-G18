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
            .then(()=> res.redirect("/"))
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
        res.send("editLogic") 
    }
    static del= (req,res)=>{
        res.send("delete")
    }
}
module.exports = User