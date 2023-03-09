const loginService = require("../../v1/services/loginService");
var jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    try {
        console.log("".concat("[Method: ", req.method, "], [Url: ", req.url, "], [Body: ", JSON.stringify(req.body), "]"));
        const { username, password } = req.body;

        // Decode base64 password
        const buff = Buffer.from(password, 'base64');
        const decoded_password = buff.toString('utf-8');

        // Locate the user in the db
        let user = await loginService.getOneUser(username);
        
        if (username == user[0].username && bcrypt.compareSync(decoded_password, user[0].hashed_password)) {
            var token = jwt.sign({ username: username }, 'secretkey', (err, token) => {
                res.send({
                   ok: true,
                   message: "Login successful",
                   user_id: user[0].user_id,
                   token: token
                })
            })
        } else {
            res.send({
                ok: false,
                message: "Username or password incorrect"
            })
        }
    } catch (err) {
        res.status(400).send(err.message)
    }
};

module.exports = {
    login
}