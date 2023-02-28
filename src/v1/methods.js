let jwt = require('jsonwebtoken')

module.exports.ensureToken = function(req, res, next) {
 
    var bearerHeader = req.headers["authorization"]
    
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        jwt.verify(bearerToken, 'secretkey', (err, result) => {
            if(err) {
                console.log("Incorrect JWT Bearer token:", bearerToken)
                res.sendStatus(403)
            } else {
                next()
            }
        })
    } else {
        console.log("JWT Auth Bearer not found!")
        res.sendStatus(403)
    }
}