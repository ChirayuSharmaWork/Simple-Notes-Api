import mongoose from "mongoose";

const connectDb = async () => {
    return mongoose.connect("mongodb://localhost:27017/notesdb")
}

export default connectDb;