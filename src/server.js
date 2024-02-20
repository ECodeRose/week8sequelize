require("dotenv").config();
const express = require("express");
const sequelize = require("./db/connection");

// Import models
const Book = require("./books/model");
const Genre = require("./genres/model");
const Author = require("./authors/model");

// Import routers
const bookRouter = require("./books/routes");
const genreRouter = require("./genres/routes");
const authorRouter = require("./authors/routes");

// Get port from .env or use 5001
const port = process.env.PORT || 5001;

// Create express app
const app = express();

// Add middleware to parse JSON
app.use(express.json());

// Routes
app.use(bookRouter);
app.use(genreRouter);
app.use(authorRouter);

const syncTables = () => {
  // Define relationships
  Genre.hasMany(Book);
  Book.belongsTo(Genre);

  Author.hasMany(Book);
  Book.belongsTo(Author);

  // Sync models with the database
  Genre.sync();
  Author.sync();
  Book.sync();
};

// Health check
app.get("/health", (req, res) => {
  try {
    res.status(200).json({ success: true, message: "API is healthy" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "API Error", error: error.message });
  }
});

// server listens on port
app.listen(port, () => {
  // table sync
  syncTables();
  console.log(`Server is listening on port ${port}`);
});
