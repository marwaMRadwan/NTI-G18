const router = require("express").Router()
const user = require("../app/controller/user.controller")
router.post("/register", user.register)
router.get("/all", user.allUsers)
router.get("/all/:id", user.singleUser)
router.post('/login', user.login)
module.exports = router