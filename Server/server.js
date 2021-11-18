import express from "express";
import cors from "cors";

const server = express();

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(cors());

/* *************** Books ***************** */
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

/* *************** Members ***************** */
let members = [
  {
    id: "1",
    nic: "977685553V",
    firstName: "Isurika",
    lastName: "Adikari",
    contactNumber: "077-9887895",
    address: "No. 45/23, Malwatte Road, Kandy",
    userType: "University",
  },
  {
    id: "2",
    nic: "955685553V",
    firstName: "Nethmini",
    lastName: "Maheeka",
    contactNumber: "077-2335648",
    address: "No. 55/22, 1st Lane, Watapuluwa, Colombo",
    userType: "School",
  },
  {
    id: "3",
    nic: "957585553V",
    firstName: "Sachini",
    lastName: "Herath",
    contactNumber: "077-2335668",
    address: "No. 33/87, 2nd Lane, Manikhinne, Kandy",
    userType: "Employed",
  },
];

// /member: view all members
server.get("/member", (req, res) => {
  res.send(members);
});

// /member:id : View a member
server.get("/member/:id", (req, res) => {
  const id = req.params.id;
  const member = members.find((member) => member.id === id);
  res.send(member);
});

// /member : POST: Create member
server.post("/member", (req, res) => {
  const { nic, firstName, lastName, contactNumber, address, userType } =
    req.body;

  const member = {
    id: Math.random().toString(16).slice(2),
    nic,
    firstName,
    lastName,
    contactNumber,
    address,
    userType,
  };
  members.push(member);
  res.send(member);
});

// /member/:id : Edit a member
server.put("/member/:id", (req, res) => {
  const id = req.params.id;
  const { nic, firstName, lastName, contactNumber, address, userType } =
    req.body;

  const memberIndex = members.findIndex((member) => member.id === id);
  members[memberIndex] = {
    ...members[memberIndex],
    nic,
    firstName,
    lastName,
    contactNumber,
    address,
    userType,
  };

  res.send(members[memberIndex]);
});

// /member/:id : Delete a member
server.delete("/member/:id", (req, res) => {
  const id = req.params.id;

  members = members.filter((member) => member.id !== id);
  res.send(id);
});
