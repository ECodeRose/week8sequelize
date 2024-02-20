const Book = require("./model");
const Genre = require("../genres/model");
const Author = require("../authors/model");

// Add a book
// Post - path = /books/addBook
const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      AuthorId: req.body.AuthorId,
      GenreId: req.body.GenreId,
    });

    res.status(201).json({ message: `${book.title} was added`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// Get all books
// GET - path = /books/getAllBooks
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: ["Genre", "Author"],
      attributes: { exclude: ["GenreId", "AuthorId"] },
    });
    res.status(200).json({ message: `all books`, books: books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// Get a single book by its title
// Get - path = /books/getSingleBookByTitle/:title
const getSingleBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const book = await Book.findOne({
      where: { title },
      attributes: { exclude: ["GenreId", "AuthorId"] },
      include: ["Genre", "Author"],
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: `Book with title ${title} not found`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Book with title ${title} returned`,
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error getting book by title",
      error: error.errors,
    });
  }
};

// Delete a book by its title
// DELETE - path = /books/deleteBook
const deleteBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;

    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }

    const book = await Book.destroy({ where: { title } });

    if (book[0] === 0) {
      return res.status(404).json({
        success: false,
        message: `Book with title ${title} could not be found`,
      });
    }

    return res
      .status(200)
      .json({ success: true, message: `${title} has been deleted`, data: [] });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting book",
      error: error.errors,
    });
  }
};

// Delete all books
// DELETE - path = /books
const deleteAllBooks = async (req, res) => {
  try {
    await Book.destroy({ truncate: true });
    return res.status(200).json({
      success: true,
      message: "All books have been deleted",
      data: [],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting all books",
      error: error.errors,
    });
  }
};

// Update book
// PUT - path = /books/updateBook/:title
const updateBookByTitle = async (req, res) => {
  try {
    const searchTitle = req.params.title;
    const { title, author, genre } = req.body;

    if (!searchTitle) {
      return res
        .status(400)
        .json({ success: false, message: "searchTitle params is required" });
    }

    const book = await Book.update(
      { title, author, genre },
      { where: { title: searchTitle } }
    );

    if (book[0] === 0) {
      return res.status(404).json({
        success: false,
        message: `Book with title ${searchTitle} could not be found`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `${searchTitle} updated`,
      updatedData: { title, author, genre },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating book",
      error: error.errors,
    });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  getSingleBookByTitle: getSingleBookByTitle,
  deleteBookByTitle: deleteBookByTitle,
  deleteAllBooks: deleteAllBooks,
  updateBookByTitle: updateBookByTitle,
};
