const dbCon = require('../../database/connetDB')
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
        res.render("all", {pagetTitle:"add new user"})
    }
    static showSingle= (req,res)=>{
        res.render("single", {pagetTitle:"add new user"})
    }
    static edit= (req,res)=>{
        res.render("edit", {pagetTitle:"add new user"})
    }
    static editLogic= (req,res)=>{
        res.send("editLogic") 
    }
    static del= (req,res)=>{
        res.send("delete")
    }

}
module.exports = User