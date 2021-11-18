import express from "express";
import cors from "cors";

const server = express();

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(cors());

let books = [
  {
    id: "1",
    title: "Harry Potter",
    author: "J. K. Rowling",
    isAvailable: true,
    burrowedMemberId: "",
    burrowedDate: "",
  },
  {
    id: "2",
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    isAvailable: true,
    burrowedMemberId: "",
    burrowedDate: "",
  },
];

// /book: view all books
server.get("/book", (req, res) => {
  res.send(books);
});

// /book:id : View a book
server.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id === id);
  res.send(book);
});

// /book : POST: Create book
// title, author
server.post("/book", (req, res) => {
  const { title, author } = req.body;

  const book = {
    id: Math.random().toString(16).slice(2),
    title,
    author,
    isAvailable: true,
    burrowedMemberId: "",
    burrowedDate: "",
  };
  books.push(book);
  res.send(book);
});

// /book/:id : Edit a book
server.put("/book/:id", (req, res) => {
  const id = req.params.id;
  const { title, author } = req.body;
  const bookIndex = books.findIndex((book) => book.id === id);
  books[bookIndex] = {
    ...books[bookIndex],
    title,
    author,
  };

  res.send(books[bookIndex]);
});

// /book/:id/burrow : Burrow a book
server.put("/book/:id/burrow", (req, res) => {
  const id = req.params.id;
  const { burrowedMemberId, burrowedDate } = req.body;

  const bookIndex = books.findIndex((book) => book.id === id);
  books[bookIndex] = {
    ...books[bookIndex],
    isAvailable: false,
    burrowedMemberId,
    burrowedDate,
  };

  res.send(books[bookIndex]);
});

// /book/:id/return : Return a book
server.put("/book/:id/return", (req, res) => {
  const id = req.params.id;

  const bookIndex = books.findIndex((book) => book.id === id);
  books[bookIndex] = {
    ...books[bookIndex],
    isAvailable: true,
    burrowedMemberId: "",
    burrowedDate: "",
  };

  res.send(books[bookIndex]);
});

// /book/:id : Delete a book
server.delete("/book/:id", (req, res) => {
  const id = req.params.id;

  books = books.filter((book) => book.id !== id);
  res.send(id);
});
