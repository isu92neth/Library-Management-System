import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  burrowedMemberId: {
    type: String,
    default: "",
  },
  burrowedDate: {
    type: String,
    default: "",
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
