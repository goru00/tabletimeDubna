const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

// headers

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db

const db = require('./models');
const Roles = db.roles;
const StudyFormats = db.studyformats;

db.mongoose
    .connect(
        `mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.txkgt.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.log("Connection error", err);
        process.exit();
    });

function initial() {
    Roles.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Roles({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
        
                console.log("added 'user' to roles collection");
            });
        
            new Roles({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
        
                console.log("added 'moderator' to roles collection");
            });
        
            new Roles({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
        
                console.log("added 'admin' to roles collection");
            });
        }
    });
    StudyFormats.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new StudyFormats({
                name: "fulltime"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'fulltime' to studyformats collection");
            });
            new StudyFormats({
                name: "parttime"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'parttime' to studyformats collection");
            });
            new StudyFormats({
                name: "extramural"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'extramural' to studyformats collection");
            });
        } 
    })
}
    
// routes

app.get("/", (req, res) => {
    res.json({
        message: "Welcome"
    });
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

// run server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});