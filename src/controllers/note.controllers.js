// import { createNote,getAllNotesValue,getOneNoteValue,updateOneNoteService ,deleteOneNoteService } from "../services/note.services.js"
import { createNote,getAllNotesValue,getOneNoteValue,updateOneNoteService,deleteOneNoteService  } from "../services/note.services.js";

const addNote = async (req,res) => {
    const {title ,content } = req.body;
    res.json(await createNote(title,content));
}

const getAllNotes = async (req,res) => {
    const allNotes =  await getAllNotesValue();
    res.json(allNotes);
}

const getOneNote = async (req,res) => {
    const oneNote =  await getOneNoteValue(req.params.id);
    res.json(oneNote);
}

const updateOneNote = async (req,res) => {
    const {title, content} = req.body;
    const id = req.params.id;
    const updatedValue = await updateOneNoteService(id,title,content);
    res.json(updatedValue)
}

const deleteOneNote = async (req,res) => {
    await deleteOneNoteService(req.params.id);
    res.status(204).end();
}

export { addNote , getAllNotes, getOneNote, updateOneNote , deleteOneNote}