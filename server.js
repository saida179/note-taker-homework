//referring back to activity
const express = require("express");
const path = require("path");
//const UUID = require("uuid");
const url = require("url");
const db = require("./db/db.json")

//express yourself
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//HEY LISTEN TO THIS
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));