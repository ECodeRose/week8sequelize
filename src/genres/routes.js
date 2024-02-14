const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres } = require("./controllers");

genreRouter.post("/genres/addGenre", addGenre);

genreRouter.get("/genres/getAllGenres", getAllGenres);

module.exports = genreRouter;
