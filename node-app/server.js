'use strict';

const express = require('express')
// var bodyParser = require('body-parser')

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()

app.get('/:id', function(req, res) {
    var id = req.params.id;
    res.send(id)
});

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
