const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const kycRoutes = require('./routes/kyc.routes');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const nonProtectedRoutes = [
    '/v1/auth/login',
    '/v1/auth/register',
    '/v1/auth/forgot-password',
    '/v1/auth/reset-password',
];

app.use((req, res, next) => {
    //  have an authentication middleware here
    if (nonProtectedRoutes.includes(req.path)) {
        next();
    }
    next();
});

app.get('/v1/auth/login', (req, res, next) => {
    res.send('Login endpoint');
});
app.get('/v1/auth/register', (req, res, next) => {
    res.send('Register endpoint');
});
app.get('/v1/auth/forgot-password', (req, res, next) => {
    res.send('Forgot Password endpoint');
});
app.get('/v1/auth/reset-password', (req, res, next) => {
    res.send('Reset Password endpoint');
});

app.use("/v1/kyc", kycRoutes)
module.exports = app; 