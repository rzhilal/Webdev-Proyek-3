const user_controller = require('../controllers/user.controller')
const connectEnsureLogin = require('connect-ensure-login'); //authorization
const passport = require('passport');  // authentication
module.exports = app => {


    var router = require("express").Router();
    
    // Create a new transaksi
    //route
    router.post("/login", user_controller.login)

    router.post("/register", user_controller.registerValidate, user_controller.register)

    app.use("/api", router);
};