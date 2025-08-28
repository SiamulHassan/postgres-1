import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

// this will run database with creating tables for user and todos

// const insertUser = db.prepare(
// 	`INSERT INTO users (username,password) VALUES(?, ?)`
// );
// const result = insertUser.run(username, hashedPassword);
// const defaultTodo = 'Have to work on pet project';
// const insertTodo = db.prepare(`INSERT INTO todos (user_id,task) VALUES(?, ?)`);
// insertTodo.run(result.lastInsertRowid, defaultTodo);

// const getUser = db.prepare('SELECT * FROM users WHERE username = ?');
// const user = getUser.get(username)

// field - typeOfTheField - attributes
db.exec(`
    CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
    )
    `);
db.exec(`
    CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    task TEXT,
    completed BOOLEAN DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(id)
    )
    `);

export default db;
