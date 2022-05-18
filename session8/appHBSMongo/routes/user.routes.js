const router = require("express").Router()
const userController = require("../app/controller/user.controller")

router.get("/", userController.showAll)
router.get("/add", userController.add)
router.post("/add", userController.addLogic)
router.get("/edit/:id", userController.edit)
router.post("/edit/:id", userController.editLogic)
router.get("/show/:id", userController.showSingle)
router.get("/delete/:id", userController.del)


module.exports=router