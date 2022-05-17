const dealWithData = require("../helper/dealWithData.helper")
const home = (req,res)=>{
    const data = dealWithData.readFromJSON("database/user.json")
    res.render("home", {
        pageTitle:"Home Page- User App",
        hasData: data.length,  //0   
        data
    })
}
const add = (req, res)=>{
    userTypes = ["user", "admin"]
    res.render("add", {
        pageTitle:"Add User - User App",
        userTypes
    })
}
const addPostMethod= (req, res)=>{
    userTypes = ["user", "admin"]
    res.render("addPost", {
        pageTitle:"Add User - User App",
        userTypes
    })
}
const addLogicGet = (req,res)=>{
    // const user = req.query
    // user.id=Date.now()
    const user = { id:Date.now(), ...req.query } 
    const data = dealWithData.readFromJSON("database/user.json")
    data.push(user)
    dealWithData.writeToJSON(data, "database/user.json")
    res.redirect("/")
}
const addPostMethodLogic = (req,res)=>{
    const user = { id:Date.now(), ...req.body } 
    const data = dealWithData.readFromJSON("database/user.json")
    data.push(user)
    dealWithData.writeToJSON(data, "database/user.json")
    res.redirect("/")
}
const single = (req,res)=>{
    // const id = req.params.id
    // const data = dealWithData.readFromJSON("database/user.json")
    // const user = data.find(d=> d.id == id)
    const user = dealWithData.readFromJSON("database/user.json").find(d=> d.id == req.params.id)
    res.render("single",
    { pageTitle:"user Data", user}
    )
}
const delUser =  (req,res)=>{
    const id = req.params.id
    const data = dealWithData.readFromJSON("database/user.json")
    const afterDel = data.filter(d=> d.id!=id)
    dealWithData.writeToJSON(afterDel, "database/user.json")
    res.redirect("/")
}
const editUser = (req,res)=>{
    const user = dealWithData.readFromJSON("database/user.json").find(d=> d.id == req.params.id)
    res.render("edit",
    { 
        pageTitle:"user Data", 
        user,
        userTypes:["admin", "user"]
    }
    )    
}
const editUserLogic = (req,res)=>{
    const data = dealWithData.readFromJSON("database/user.json")
    const userIndex = data.findIndex(d=> d.id == req.params.id)
    data[userIndex] = {...req.body, id:data[userIndex].id}
    dealWithData.writeToJSON(data, "database/user.json")
    res.redirect(`/users/${data[userIndex].id}`)
}
module.exports = { editUser, home, add, single, addLogicGet, delUser, addPostMethod, addPostMethodLogic , editUserLogic}