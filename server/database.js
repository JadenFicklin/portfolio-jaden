require("dotenv").config();
const { PORT, DATABASE_URL } = process.env;
const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");
//added for hosting
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

//added for hosting
app.use(express.static(path.resolve(__dirname, "../build")));

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

//endpoints
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  return sequelize
    .query(
      `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`
    )
    .then((result) => res.send(result[0]).status(200));
});

//added for hosting
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

//npm i sequelize pg pg-hstore axios dotenv express cors bcrypt react-router-dom@6 react-player
//npm i @emailjs/browser
//npm i @fortawesome/free-brands-svg-icons
//npm i @fortawesome/react-fontawesome
//npm i animate.css
//npm i gsap-trial
//npm i loaders.css
//npm i react-leaflet //
//npm i react-loaders
//npm i sass

//npm i sequelize pg pg-hstore axios dotenv express cors bcrypt react-router-dom@6 react-player @emailjs/browser @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome animate.css gsap-trial loaders.css react-leaflet react-loaders sass
