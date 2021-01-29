  const fs = require("fs");
const UUID = require("uuid");

module.exports = function(app) {

    app.get("/api/notes", (req, res) => {
        fs.readFile('./db/db.json', "utf8", (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            return res.json(notes);
        });
    })

//POST /api/notes
app.post("/api/notes", (req, res) => {
    req.body.id = UUID.v1()
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        let newNotes = JSON.parse(data);
        newNotes.push(req.body);

        fs.writeFile('./db/db.json', JSON.stringify(newNotes), (err) => {
            if (err) throw err;
            res.json(req.body);
        });
    });
})

//DELETE /api/notes:id
app.delete("/api/notes/:id", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        let newNotes = JSON.parse(data);
        newNotes = newNotes.filter(note => note.id !== req.params.id)

        fs.writeFile('./db/db.json', JSON.stringify(newNotes), (err) => {
            if (err) throw err;
            res.json("Success!");
        });
    });
});

};