const { responseError, responseSuccess } = require("response-manager");
const db = require("../config/db");

// create

exports.createItem = (name, description, callback) => {
  const sql = `INSERT INTO items(name,description) VALUES(?, ?)`;

  db.run(sql, [name, description], function (err) {
    callback(err, { id: this.lastID });
  });
};

// read
exports.getItems = (req, res) => {
  try {
    const sql = `SELECT * FROM items`;
    db.all(sql, [], (err, rows) => {
      if (err) {
        responseError(res, 400, "Failed to fetch data from database", err);
      } else {
        responseSuccess(res, 200, "Data fetched successfully", rows);
      }
    });
  } catch (error) {
    responseError(res, 400, "Bad Request", error);
  }
};
// update
exports.updateItem = async (req, res) => {};
// delete
exports.deleteItem = (req, res) => {};
