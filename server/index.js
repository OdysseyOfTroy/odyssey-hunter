const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: 'mysql_db',
    user: 'MYSQL_USER',
    password: 'MYSQL_PASSWORD',
    database: 'books'
})

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send('Hi There')
});

//get all books in the database
app.get('/get', (req, res) => {
    const SelectQuery = " SELECT * FROM books_reviews";
    db.query(SelectQuery, (err, result) => {
        res.send(result)
    })
})

app.listen('3001', () => { })