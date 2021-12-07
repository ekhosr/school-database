const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.sign = function (data) {
    return jwt.sign(data, process.env.SECRET);
}

exports.verify = function (token) {
    try {
        return jwt.verify(token, process.env.SECRET);
    }
    catch (err) {
        return false;
    }
}