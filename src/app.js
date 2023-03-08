const express = require("express");
const https = require("https");
var bodyParser = require('body-parser')
const v1MoodRouter = require("./v1/routes/moodRoutes");
const v1UserRouter = require("./v1/routes/userRoutes");
const v1LogRouter = require("./v1/routes/logRoutes");
const v1LoginRouter = require("./v1/routes/loginRoutes");

// Open our SSL certs and keys
const fs = require('fs');
var options = {
    key: fs.readFileSync('./security/localhost.key'),
    cert: fs.readFileSync('./security/localhost.crt'),
    requestCert: false,
    rejectUnauthorized: false
};


const app = express();

const server = https.createServer(options, app);

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    next();
})

app.use("/api/v1/mood", v1MoodRouter);
app.use("/api/v1/user", v1UserRouter);
app.use("/api/v1/log", v1LogRouter);
app.use("/api/v1/login", v1LoginRouter);


server.listen(PORT, () => { 
    console.log(`Mindful API is listening on port ${PORT}`); 
});