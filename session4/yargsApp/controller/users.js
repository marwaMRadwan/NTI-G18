const dealWithJson = require("./dealWithJson")
const chalk = require("chalk")
const addUser = (userData) => {
    const data = dealWithJson.readData()
    data.push(userData)
    dealWithJson.writeData(data)
}
const allUsers = () => {
    const data = dealWithJson.readData()
    if(data.length==0) return console.log(chalk.red("no users yet"));
    data.forEach(user=>{
        console.log(chalk.green(`id: ${user.id} - name: ${user.name}
---------------------------------`))
    })
}
const singleUser = (userId) => {

}
const editUser = (userId, newData)=>{

}
const delUser = (userId)=>{

}
module.exports = {addUser, editUser, allUsers, singleUser, delUser}