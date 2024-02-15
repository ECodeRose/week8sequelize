const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { addBook, getAllBooks, getSingleBookByTitle } = require("./controllers");

bookRouter.post("/books/addBook", addBook);

// get all books
bookRouter.get("/books/getAllBooks", getAllBooks);

// get a single book by title
bookRouter.get("books/getSingleBookByTitle/:title", getSingleBookByTitle);

// update book author

//delete a single book by title

module.exports = bookRouter;
