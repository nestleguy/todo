const sqlite3 = require('sqlite3').verbose();

// відкриваємо з'єднання з базою даних
const db = new sqlite3.Database('mydb.db');

// виконуємо запит для створення таблиці
db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL)', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Table users created successfully!');
});

// закриваємо з'єднання з базою даних
db.close();