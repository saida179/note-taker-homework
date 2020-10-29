const fs = require("fs");
const express = require("express");
const path = require("path");
const UUID = require("uuid");
const uel = require("url")

//express yourself
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//GET note
app.get("/notes", (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//GET * returning index
app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Get /api/notes
app.get("/api/notees", (req, rest) => {})
//POST /api/notes
app.post("/api/notes", (req,res) => {})
//DELETE /api/notes:id
app.delete("/api/notes/:id", (req, res) => {})

//HEY LISTEN TO THIS
app.listen(PORT, function () {});

//DEPLOY THE APP TO HEROKU...?????