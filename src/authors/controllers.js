const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      authorname: req.body.authorname,
    });

    res
      .status(201)
      .json({ message: `${author.authorname} was added`, author: author });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json({ message: `all authors`, authors: authors });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getBooksByAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: { id: req.params.id },
      include: [{ model: Book, as: "Books", attributes: ["id", "title"] }],
    });

    res.send({ message: "success", author: author });
  } catch (error) {
    console.log("error.");
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addAuthor: addAuthor,
  getAllAuthors: getAllAuthors,
  getBooksByAuthor: getBooksByAuthor,
};
