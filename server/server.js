const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const uuid = require('uuid');

const app = express();

// headers

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// db

const db = require('./models');

const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
    console.log('Recreated db');
    initial();
});

function initial() {
    Role.create({
      id: uuid.v4(),
      name: "user"
    });
   
    Role.create({
      id: uuid.v4(),
      name: "moderator"
    });
   
    Role.create({
      id: uuid.v4(),
      name: "admin"
    });
}

// routes

app.get("/", (req, res) => {
    res.json({ message: "Hello" });
});
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// run server

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
