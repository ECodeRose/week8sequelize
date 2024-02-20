const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getAllAuthors, getBooksByAuthor } = require("./controllers");

authorRouter.post("/authors/addAuthor", addAuthor);

authorRouter.get("/authors/getAllAuthors", getAllAuthors);

authorRouter.get("/authors/getBooksByAuthor/:id", getBooksByAuthor);

module.exports = authorRouter;
