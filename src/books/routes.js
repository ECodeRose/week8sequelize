const { Router } = require("express");
const bookRouter = Router();

const { addBook } = require("./controllers");

bookRouter.post("/books/addBook", addBook);

// get all books

// update book author

//delete a single book by title

module.exports = bookRouter;
