const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'website_ratings'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Endpoint to receive rating
app.post('/submit-rating', (req, res) => {
    let rating = req.body.rating;
    let sql = 'INSERT INTO ratings (rating) VALUES (?)';
    db.query(sql, [rating], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Rating added to database');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});