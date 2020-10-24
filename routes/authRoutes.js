const mongoose = require('mongoose');
const mongodb = require('../database/connection')
const express = require('express');
const router = express.Router();
const admin = require('../database/model/admin')
const jwt = require('jsonwebtoken')

router.post('/register', (req, res, next) => {
    let data = new admin(req.body);
    if (data.password == req.body.cpassword) {
        admin.register(data).then((result) => {
            if (result == 1) {
                res.json({
                    error: 'Email Already exists'
                })
            } else {
                res.json({
                    success: 'Account Registered'
                })
            } 
            }).catch((err) => {
                res.json(err)
            }

        )
    } else {
        res.json({
            error: 'Password not Matching'
        })
    }
})

router.post('/login', (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password;
    admin.getUSerByEmail(email).then((user) => {
        console.log(user)
            let pass;
                pass = user.password
            admin.comparePassword(password, pass).then((result) => {
                console.log(result)
                secret = "amazon";
                const token = jwt.sign({
                        user
                    },
                    secret, {
                        expiresIn: 604800
                    })
                if (result) {
                    res.json({
                        success: "Welcome",
                        token: token
                    })
                } else {
                    res.json({
                        error: "Please Fill right info"
                    })
                }
            }).catch((err) => {
                res.json(err);
            })
        }
    )
})



module.exports = router;