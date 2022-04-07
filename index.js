"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');

const port = process.argv[2];

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
router.setRequestUrl(app);
if (!port) {
    console.log('port error');
    return;
}
app.listen(port, function () {
    console.log('start server')
});