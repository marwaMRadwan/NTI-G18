const router = require("express").Router()
const userController = require("../app/controller/user.controller")

// routes
router.get("/", userController.home)

// router.get('/users/ahmed', (req,res)=>res.send("ahmed"))
router.get('/users/:id', userController.single)
//req=> params , query, ....  :id    req.params.id
router.get("/add", userController.add)

module.exports = router