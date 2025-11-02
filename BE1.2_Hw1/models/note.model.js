const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
      trim: true
    },
    content: {
      type: String,
      default: "" 
    },
    category: {
      type: String,
      enum: ["Personal", "Work", "Study", "Ideas", "Journal", "Other"],
      
    },
    tags: {
      type: [String], 
      default: []
    }
  },
  { timestamps: true } 
);

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
