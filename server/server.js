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
const Dow = db.dow;

db.sequelize.sync({ force: false }).then(() => {
  initial();
});

function initial() {
    Role.findOne({ raw: true }).then(role => {
      if (!role)
      {
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
    });
    Dow.findOne({ raw: true }).then(dow => {
      if (!dow) 
      {
        Dow.create({
          id: uuid.v4(),
          name: "ПН"
        });
        Dow.create({
          id: uuid.v4(),
          name: "ВТ"
        });
        Dow.create({
          id: uuid.v4(),
          name: "СР"
        });
        Dow.create({
          id: uuid.v4(),
          name: "ЧТ"
        });
        Dow.create({
          id: uuid.v4(),
          name: "ПТ"
        });
        Dow.create({
          id: uuid.v4(),
          name: "СБ"
        });
        Dow.create({
          id: uuid.v4(),
          name: "ВС"
        });
      }
    });
}

// routes

app.get("/", (req, res) => {
    res.json({ message: "Hello" });
});
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/role.routes')(app);
require('./routes/teacher.routes')(app);

// run server

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
