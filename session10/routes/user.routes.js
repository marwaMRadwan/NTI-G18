const router = require("express").Router()
const user = require("../app/controller/user.controller")
router.post("/register", user.register)
module.exports = router