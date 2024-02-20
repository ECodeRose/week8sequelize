const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres, getBooksByGenre } = require("./controllers");

genreRouter.post("/genres/addGenre", addGenre);

genreRouter.get("/genres/getAllGenres", getAllGenres);

genreRouter.get("/genres/getBooksByGenre/:id", getBooksByGenre);

module.exports = genreRouter;
