const Genre = require("./model");
const Book = require("../books/model");

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      genrename: req.body.genrename,
    });

    res
      .status(201)
      .json({ message: `${genre.genrename} was added`, genre: genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.status(200).json({ message: `all genres`, genres: genres });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getBooksByGenre = async (req, res) => {
  const genre = await Genre.findOne({
    where: { id: req.params.id },
    include: [{ model: Book, as: "Books", attributes: ["id", "title"] }],
  });

  res.send({ message: "success", genre: genre });
};

module.exports = {
  addGenre: addGenre,
  getAllGenres: getAllGenres,
  getBooksByGenre: getBooksByGenre,
};
