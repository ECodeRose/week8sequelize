const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres } = require("./controllers");

genreRouter.post("/genres/addGenre", addGenre);

// get all genres

genreRouter.get("/genres/getAllGenres", getAllGenres);

// update genre

//delete a single genre by genre name

module.exports = genreRouter;
