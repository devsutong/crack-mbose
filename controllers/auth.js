const User = require('../models/User');

API_KEY = process.env.API_KEY
const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_KEY}`

exports.register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
    }
};
