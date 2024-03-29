#!/usr/bin/env node
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "bbeauser",
    host: "lightyear.bluebear.local",
    port: 3307,
    password: "3e7e21116d",
    database: "LoginSystem",
});

app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        (err, results) => {
            console.log(err);
        }
    );
});

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, results) => {
            if (err) {
                res.send({err: err});
            }

            if (results) {
                res.send(results)
            } else {
                res.send({ message: "Wrong username/password combination!" });
            }
        }
    );
});

app.listen(3001, () => {
    console.log("running server");
});