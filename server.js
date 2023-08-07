import express from "express";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";
import ticketRouter from "./routes/ticketRouter.js";
import middleware from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"
import cors from "cors";
dotenv.config();


const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors());
app.get("/",(req,res)=>{
    res.status(200).json({
        message : "Welcome to Help Desk API"
    })
})

app.use("/api/users",router);
app.use("/api/tickets",ticketRouter);
app.use(middleware.errorHandler);

app.listen(PORT, () => console.log(`server started on ${PORT} `))