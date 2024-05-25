
require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');

const userRoutes = require('./routes/users.js');
const MiddlewareLogRequest = require('./middleware/logs.js');
const upload = require ('./middleware/multer.js');

const app = express();


//app.method(path, handler);

app.use (MiddlewareLogRequest);
app.use (express.json());
app.use('/assets', express.static('public/images'));

app.use('/users',userRoutes);
app.use('/upload',upload.single('photo'), (req, res) => {
    res.json ({
        message: 'upload berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json ({
        message: err.message
    })
})


app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
})