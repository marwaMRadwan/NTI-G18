const router = require("express").Router()
const auth = require("../app/middleware/auth.middleware")
const user = require("../app/controller/user.controller")
router.post("/register", user.register) //user registeration
router.post('/login', user.login)
router.get("/me", auth, user.me)
router.post('/logout', auth, user.logOut)
router.post('/logoutAll', auth, user.logOutAll)
router.patch('/editPassword', auth, user.editPassword)

router.patch('/editUser', auth, user.editUser)
router.patch('/activate', auth, user.activate)

router.patch('/changeImage', auth, user.changeImage)
router.patch('/activateWithoutLogin', user.activateWithoutLogin)

router.get("/all", auth, user.allUsers)
router.get("/all/:id", user.singleUser)
module.exports = router
