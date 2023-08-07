import express from "express";
import ticketController from "../controllers/ticketController.js";
import protect  from "../middleware/authMiddleware.js";
import notesRouter from "./notesRouter.js";
 const  ticketRouter = express.Router();

 ticketRouter.route('/').get(protect, ticketController.getTickets).post(protect, ticketController.createTicket)
 
 ticketRouter
  .route('/:id')
  .get(protect, ticketController.getTicket)
  .delete(protect, ticketController.deleteTicket)
  .put(protect, ticketController.updateTicket)

  
  ticketRouter.use("/:ticketId/notes",notesRouter);

export default ticketRouter;




