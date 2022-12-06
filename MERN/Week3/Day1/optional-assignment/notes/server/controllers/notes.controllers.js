// import models

const { response } = require("express")
const Notes = require ("../models/notes.models")

// CRUD  operation 

// get all Notes
module.exports.findAllNotes = (req, res) => {
    Notes.find()
    .then((allNotes) =>{
        res.json(allNotes)      //what it returns will recieved in react
    })
    .catch(err =>{
        res.json({message: "somthing went wrong", serverError: err})
    })
}

// create new note
module.exports.createNotes = (request, response) => {
    Notes.create(request.body)
    .then(newCreatedNotes =>{
        response.json({notes : newCreatedNotes})
    })
    .catch(err => response.json({message: "somthing went wrong"}))
}

// get one note by id
module.exports.findOneNote = (req, res)=> {
    Notes.findById(req.params.id)
    .then(oneNote =>{
        res.json({ Note: oneNote})
    })
    .catch(err => response.json({message: "somthing went wrong", error: err}))
}

// update one note
module.exports.updateExistNote = (req, res) =>{
    Notes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {new: true, runValidators: true}
        )
        .then(updateNote => res.json ({ Note: updateNote}))
        .catch(err => res.json({message: "somthing wnet wrong", error: err}));
}


// delete one note

module.exports.deletExistNote = (req, res) =>{
    Notes.deleteOne({ _id: req.params.id})
    .then(result => res.json ({ result: result}))
    .catch( err => res.json ({ message: "somthing went wrong", error: err}));
}

