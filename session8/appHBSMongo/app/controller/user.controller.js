class User{
    static showAll= (req,res)=>{
        res.render("all", {pagetTitle:"add new user"})
    }
    static showSingle= (req,res)=>{
        res.render("single", {pagetTitle:"add new user"})
    }
    static add= (req,res)=>{
        res.render("add", {pagetTitle:"add new user"})
    }
    static addLogic= (req,res)=>{
        res.send("add Logic")
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