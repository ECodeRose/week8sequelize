const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const {
  addBook,
  getAllBooks,
  getSingleBookByTitle,
  deleteBookByTitle,
  deleteAllBooks,
  updateBookByTitle,
} = require("./controllers");

// Add book
bookRouter.post("/books/addBook", addBook);

// Get all books
bookRouter.get("/books/getAllBooks", getAllBooks);

// Get a single book by title
bookRouter.get("/books/getSingleBookByTitle/:title", getSingleBookByTitle);

// Update book by title
bookRouter.put("/books/updateBook/:title", updateBookByTitle);

// Delete a single book by title
bookRouter.delete("/books/deleteBook/:title", deleteBookByTitle);

// Delete all books
bookRouter.delete("/books/", deleteAllBooks);

module.exports = bookRouter;
