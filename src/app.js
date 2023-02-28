const express = require("express");
var bodyParser = require('body-parser')
const v1MoodRouter = require("./v1/routes/moodRoutes");
const v1UserRouter = require("./v1/routes/userRoutes");
const v1LogRouter = require("./v1/routes/logRoutes");
const v1LoginRouter = require("./v1/routes/loginRoutes");


const app = express(); 
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
})

app.use("/api/v1/mood", v1MoodRouter);
app.use("/api/v1/user", v1UserRouter);
app.use("/api/v1/log", v1LogRouter);
app.use("/api/v1/login", v1LoginRouter);


app.listen(PORT, () => { 
    console.log(`Mindful API is listening on port ${PORT}`); 
});