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

const UpdateUser = async(req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UsersModel.UpdateUser(body, id);
        res.json ({
            message: 'UPDATE user succes',
            data: {
                id: id,
                ...body
            },
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
        })
    }
}

const DeleteUser = async(req, res) => {
    const {id} = req.params;
    try {
        await UsersModel.DeleteUser(id);
        res.json ({
            message: 'Delete user succes',
            data: null
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
        })
    }
}
module.exports = {
    getAllUsers, CreateNewUsers, UpdateUser, DeleteUser,
};