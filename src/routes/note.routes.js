import express from "express"
import { addNote, getAllNotes , getOneNote,updateOneNote,deleteOneNote } from "../controllers/note.controllers.js";


const noteRouter = express.Router();

noteRouter.post("/", addNote);
noteRouter.get("/", getAllNotes);
noteRouter.get("/:id",getOneNote);
noteRouter.put("/:id",updateOneNote);
noteRouter.delete("/:id",deleteOneNote);


export { noteRouter };