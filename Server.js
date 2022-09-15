const express = require('express')
const app = express()
const PORT = 5000
const fs = require('fs')
const path = require('path');
app.use(express.static(path.join(__dirname, 'Public')));

const getDate = (req, res, next) => {
    console.log("Time:", new Date())
    if ((new Date().getDay() > 0 && new Date().getDay() < 6) && (new Date().getHours() >= 9 && (new Date().getHours() + 1) <= 17)) {
        console.log("app is open 🕖")
        next()
    } else {
        //console.error(err.stack);
        //res.status(500).send('Something broke ⛔!');
        console.log("app error ⛔")
    }
}
// application level middleware
app.use(getDate);

app.get('/Home', (req, res) => {
    fs.readFile('./public/Home/home.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.get('/Service', (req, res) => {
    fs.readFile('./Public/Service/Service.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.get('/Contact', (req, res) => {
    fs.readFile('./Public/Contact/Contact.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.listen(5000, () => console.log(`Server is listening on port ${PORT}`))