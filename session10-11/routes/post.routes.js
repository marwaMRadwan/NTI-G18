const router = require("express").Router()
const auth = require("../app/middleware/auth.middleware")
const post = require("../app/controller/post.controller")
router.post("/add", auth, post.add)
module.exports = router