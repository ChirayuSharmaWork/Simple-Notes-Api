import { Note } from "../models/note.model.js"; 

const createNote = async (title,content) => {
    return await Note.create({title , content});
}

const getAllNotesValue = async () => {
    return await Note.find();
}

const getOneNoteValue = async (id) => {
    return await Note.findById(id);
}

const updateOneNoteService = async (id, title, content) => {
    return await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
  };

const deleteOneNoteService = async(id) => {
    return await Note.findByIdAndDelete(id);
}


export { createNote , getAllNotesValue,getOneNoteValue, updateOneNoteService , deleteOneNoteService};