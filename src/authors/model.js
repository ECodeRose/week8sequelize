const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Author = sequelize.define(
  "Author",
  {
    authorname: {
      type: DataTypes.STRING,
      defaultValue: "some author",
    },
  },
  { timestamps: false }
);

module.exports = Author;
