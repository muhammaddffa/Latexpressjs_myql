const express = require('express');
const mysql = require('mysql2');
const usersRotes = require('./routes/users')
const middlewareLogRequest = require('./middleware/log')
const cors = require('cors')
const http = require('http')
const dbPool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'express_mysql',
    port:'3307'
  });

const app = express();

app.use(middlewareLogRequest);
app.use(express.json())
app.use(cors());

// app.method(path, handler);
app.use('/users', usersRotes);



app.use('/cek', (req, res) => {
    dbPool.query('SELECT * FROM users', (err, rows) => {
        console.log("ASU ", rows);
        if(err){
            res.json({
                message: 'connection failed'
            })
        }

        res.status(200).json({
            message: 'connection success',
            data: rows,
        })
    })

})

app.use ("/", (req, res) => {
    res.status(200).json('Hello Word');
})


app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000');
})