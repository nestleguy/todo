const sqlite3 = require('sqlite3').verbose();

// відкриваємо з'єднання з базою даних
const db = new sqlite3.Database('mydb.db');

// додаємо нового користувача до бази даних
const newUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password123'
};

db.run(`INSERT INTO users(name, email, password) VALUES(?, ?, ?)`, [newUser.name, newUser.email, newUser.password], function(err) {
  if (err) {
    return console.log(err.message);
  }
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// закриваємо з'єднання з базою даних
db.close();
