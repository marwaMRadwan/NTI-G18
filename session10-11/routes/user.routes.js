const router = require("express").Router()
const auth = require("../app/middleware/auth.middleware")
const user = require("../app/controller/user.controller")
router.post("/register", user.register)
router.get("/all",auth, user.allUsers)
router.get("/all/:id", user.singleUser)
router.post('/login', user.login)
router.get("/me", auth, user.me)
module.exports = router