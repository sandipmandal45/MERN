const express = require('express')
const adminController = require("../controllers/admin-controller")
const router = express.Router()
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")

router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers)
router.route("/users/:id").delete(authMiddleware, adminMiddleware, adminController.getUserById)
//router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, adminController, updateUserById)
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById)
router.route('/contacts').get(authMiddleware, adminController.getAllContacts)

module.exports = router;