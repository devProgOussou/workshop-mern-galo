const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/add', userController.addNewUser);
router.put('/update', userController.updateUser);
router.get('/all', userController.getAllUsers);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;