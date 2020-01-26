const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080

app.use(bodyParser())
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATH, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.listen(port, () => {
    console.log(`server running on the port ${port}`)
})

app.get("/", (req, res) => {
})