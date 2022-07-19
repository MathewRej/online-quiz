const express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
const db = require('../models/index');
const user = db.User;
const Op = Sequelize.Op;
const jwt = require("jsonwebtoken");
const SECRET = "mathu";

router.post('/register', async (request, response) => {
    let status = '';
    const { name, email, password, userType, gender, phoneNumber } = request.body;
    if(userType === 'teacher') {
        status = 'pending'
    }
    else {
        status ='active'
    }

    try {
        const accessToken = jwt.sign({
            name,
            email
        }, SECRET );
        
        const result = await user.create({
            name,
            email,
            password,
            userType,
            gender,
            phoneNumber,
            status,
            accessToken
        });

        if (result) {
            response.send({ 
                success: true,
                message: 'Registered Successfully',
            });
        }
    } catch (err) {
        response.send({
            success: false,
            data: err.message
        })
    }

});

router.get('/user-list', async (request, response) => {
    try {
        const userData = await user.findAll();
        if (userData) {
            response.send({
                success: true,
                data: userData
            })
        } else {
            response.send({
                success: false,
                data: 'no data'
            })
        }
    } catch (err) {
        response.send({
            success: false,
            data: err
        })
    }
})
module.exports = router; 