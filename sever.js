const fs = require("fs");
const express = require("express");
const path = require("path");
//const UUID = require("uuid");
const url = require("url");
const db = require("./db/db.json")

//express yourself
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


module.exports = function(app) {

//GET note
app.get("/notes", (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//GET * returning index
app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Get /api/notes
app.get("/api/notes", (req, res) => {
    fs.readFile('./db/db.json', "utf8", (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        return res.json(notes);
    });
})
//POST /api/notes
app.post("/api/notes", (req,res) => {})
//DELETE /api/notes:id
app.delete("/api/notes/:id", (req, res) => {})

//HEY LISTEN TO THIS
app.listen(PORT, function () {});

};

//DEPLOY THE APP TO HEROKU...?????