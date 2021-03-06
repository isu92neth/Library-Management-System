import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import Book from "./models/book.js";
import Member from "./models/member.js";

const server = express();
dotenv.config();

const PORT = process.env.PORT || 8080;
const databaseURL = process.env.MONGODB_URI;

mongoose
  .connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to DB");
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(cors());

/* *************** Books ***************** */

const convertToBook = (book) => {
  return {
    id: book._id,
    title: book.title,
    author: book.author,
    isAvailable: book.isAvailable,
    burrowedMemberId: book.burrowedMemberId,
    burrowedDate: book.burrowedDate,
  };
};

const sendBook = async (res, id) => {
  const book = await Book.findById(id);

  res.send(convertToBook(book));
};

// /book: view all books
server.get("/book", async (req, res) => {
  const books = await Book.find();
  res.send(
    books.map((book) => {
      return convertToBook(book);
    })
  );
});

// /book:id : View a book
server.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  sendBook(res, id);
});

// /book : POST: Create book
// title, author
server.post("/book", async (req, res) => {
  const { title, author } = req.body;
  const book = new Book({ title, author });

  const response = await book.save();

  res.send(convertToBook(response));
});

// /book/:id : Edit a book
server.put("/book/:id", async (req, res) => {
  const id = req.params.id;
  const { title, author } = req.body;

  const book = await Book.findByIdAndUpdate(id, {
    title,
    author,
  });

  sendBook(res, id);
});

// /book/:id/burrow : Burrow a book
server.put("/book/:id/burrow", async (req, res) => {
  const id = req.params.id;
  const { burrowedMemberId, burrowedDate } = req.body;

  const book = await Book.findByIdAndUpdate(id, {
    isAvailable: false,
    burrowedMemberId,
    burrowedDate,
  });

  sendBook(res, id);
});

// /book/:id/return : Return a book
server.put("/book/:id/return", async (req, res) => {
  const id = req.params.id;

  const book = await Book.findByIdAndUpdate(id, {
    isAvailable: true,
    burrowedMemberId: "",
    burrowedDate: "",
  });

  sendBook(res, id);
});

// /book/:id : Delete a book
server.delete("/book/:id", async (req, res) => {
  const id = req.params.id;

  const book = await Book.findByIdAndDelete(id);

  res.send(book);
});

/* *************** Members ***************** */

const convertToMember = (member) => {
  return {
    id: member._id,
    nic: member.nic,
    firstName: member.firstName,
    lastName: member.lastName,
    contactNumber: member.contactNumber,
    address: member.address,
    userType: member.userType,
  };
};

const sendMember = async (res, id) => {
  const member = await Member.findById(id);

  res.send(convertToMember(member));
};

// /member: view all members
server.get("/member", async (req, res) => {
  const members = await Member.find();

  res.send(
    members.map((member) => {
      return convertToMember(member);
    })
  );
});

// /member:id : View a member
server.get("/member/:id", async (req, res) => {
  const id = req.params.id;
  sendMember(res, id);
});

// /member : POST: Create member
server.post("/member", async (req, res) => {
  const { nic, firstName, lastName, contactNumber, address, userType } =
    req.body;

  const member = new Member({
    nic,
    firstName,
    lastName,
    contactNumber,
    address,
    userType,
  });
  const response = await member.save();
  res.send(convertToMember(response));
});

// /member/:id : Edit a member
server.put("/member/:id", async (req, res) => {
  const id = req.params.id;
  const { nic, firstName, lastName, contactNumber, address, userType } =
    req.body;

  const member = await Member.findByIdAndUpdate(id, {
    nic,
    firstName,
    lastName,
    contactNumber,
    address,
    userType,
  });
  sendMember(res, id);
});

// /member/:id : Delete a member
server.delete("/member/:id", async (req, res) => {
  const id = req.params.id;

  const member = await Member.findByIdAndDelete(id);
  res.send(member);
});
