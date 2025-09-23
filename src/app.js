import { noteRouter } from "./routes/note.routes.js";
import express from "express"
import connectDb from "./config/db.config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/note",noteRouter);
app.get("/" ,(req,res) => {
    res.send("hi testing")
});


connectDb().then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  });