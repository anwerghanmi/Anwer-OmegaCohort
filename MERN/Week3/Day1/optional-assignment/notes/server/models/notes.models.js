// import mongoose
const mongoose = require ("mongoose")

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength:[3, "{PATH} must have at leaste 3 chars"]
    },
    content: {
        type: String,
        required: true
    },
    is_important: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Notes = mongoose.model("Notes", NotesSchema );
module.exports=Notes;