const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getAllAuthors } = require("./controllers");

authorRouter.post("/authors/addAuthor", addAuthor);

authorRouter.get("/authors/getAllAuthors", getAllAuthors);

module.exports = authorRouter;
