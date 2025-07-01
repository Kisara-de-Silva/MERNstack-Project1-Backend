const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors()); 

app.use(
    express.urlencoded({
        extended: true, 
    })
);

app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers((req, res, next) => {
        res.send();
    });
});

app.post('/users', (req, res) => {
    controller.addUser(req.body, (callback) => {
        res.send();
    });
});

app.put('/users', (req, res) => {
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.delete('/users', (req, res) => {
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

module.exports = app;
