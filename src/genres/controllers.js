const Genre = require("..genres/model");

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });
    res.status(201).json({ message: `${genre.title} was added`, genre: genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addGenre: addGenre,
};
