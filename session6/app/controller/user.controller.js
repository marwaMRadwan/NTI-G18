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
    res.render("add", {
        pageTitle:"Add User - User App"
    })
}
const single = (req,res)=>{
    const id = req.params.id
    //apiReq(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = dealWithData.readFromJSON("database/user.json")
    res.render("single",
    {
        pageTitle:"user Data",
        user: data[id-1]
    }
    )
}
module.exports = {
    home, add, single
}