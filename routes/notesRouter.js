import express from "express";
import notesController from "../controllers/notesController.js";
import protect  from "../middleware/authMiddleware.js";



const notesRouter = express.Router({ mergeParams: true })

notesRouter.route('/').get(protect, notesController.getNotes)
.post(protect, notesController.addNote)

export default notesRouter;