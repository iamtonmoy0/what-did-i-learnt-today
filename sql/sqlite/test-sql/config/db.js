const sqlite3 = require("sqlite3").verbose();

const dbName = "mydb";

const db = new sqlite3.Database(dbName, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("connected to db");
    db.run(
      "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)",
      (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log("Table exists or was created");
        }
      }
    );
  }
});

module.exports = db;
