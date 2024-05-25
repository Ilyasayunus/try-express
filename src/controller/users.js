const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
try {
    const [data] = await UsersModel.getAllUsers();
    res.json ({
        message: 'GET all users succes',
        data: data
    })
    
} catch (error) {
    res.status(500).json({
        message: 'Server Error',
        ServerMessage: error,
    })
}

};

const CreateNewUsers = async(req, res) => {
    const {body} = req;
    try {
        await UsersModel.createNewUser(body);
        res.json ({
            message: 'CREATE new users succes',
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
        })
    }
    
};

const UpdateUser = (req, res) => {
    const {id} = req.params;
    console.log('id', id);
    res.json ({
        message: 'UPDATE user succes',
        data: req.body
    })
}

const DeleteUser = (req, res) => {
    const {id} = req.params;
    res.json ({
        message: 'Delete user succes',
        data: {
            id: id,
            name: 'iyas',
            email: 'iyasa@gmail.com',
            cita2: 'keamanan jaringan'
        }
    })
}
module.exports = {
    getAllUsers, CreateNewUsers, UpdateUser, DeleteUser,
};