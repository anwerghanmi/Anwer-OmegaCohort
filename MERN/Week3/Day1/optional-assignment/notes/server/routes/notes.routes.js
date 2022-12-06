// import the controller
const noteController = require("../controllers/notes.controllers")


// modulariz routes
module.exports = app =>{
    app.get('/api/notes', noteController.findAllNotes);
    app.post('/api/notes', noteController.createNotes);
    app.get('/api/notes/:id', noteController.findOneNote);
    app.put('/api/notes/:id', noteController.updateExistNote);
    app.delete('/api/notes/:id', noteController.deletExistNote);
}