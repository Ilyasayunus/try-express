const express = require ('express');


const UserController = require ('../controller/users.js');

const router = express.Router();



//CREATE POST
router.post('/', UserController.CreateNewUsers);

//CREATE READ
router.get('/', UserController.getAllUsers);

//UPDATE PATCH
router.patch('/:id', UserController.UpdateUser);

//DELETE - delete
router.delete('/:id', UserController.DeleteUser);

module.exports = router;