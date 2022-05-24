const router = require("express").Router()
const auth = require("../app/middleware/auth.middleware")
const user = require("../app/controller/user.controller")
//authontication
router.post("/register", user.register) //user registeration
router.post('/login', user.login)
router.get("/me", auth, user.me)
router.post('/logout', auth, user.logOut)
router.post('/logoutAll', auth, user.logOutAll)
/*
edit password
edit profile
activate account when logged in
activate account when logged out
chang profile image
*/
//CRUD
router.get("/all", auth, user.allUsers)
router.get("/all/:id", user.singleUser)
module.exports = router