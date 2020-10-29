const fs = require("fs");
const express = require("express");
const path = require("path");
const UUID = require("uuid");
const uel = require("url")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get("/notes", (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("*", function(req, res)  {
    return res.sendFile(path.join(__dirname, "../public/index.html"));
});

