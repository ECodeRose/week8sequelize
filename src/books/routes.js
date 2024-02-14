const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks } = require("./controllers");

bookRouter.post("/books/addBook", addBook);

// get all books

bookRouter.get("/books/getAllBooks", getAllBooks);

// update book author

//delete a single book by title

module.exports = bookRouter;
