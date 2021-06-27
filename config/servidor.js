var serv = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var exvalidator = require('express-validator');
var exsession = require('express-session');


var app = serv();
app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(exvalidator());

app.use(serv.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exvalidator());
app.use(exsession({
    secret:"intradskfnakfçn",
    resave: false,
    saveUninitialized: false
}))

consign().include("app/routes")
.then('app/controllers')
.then('config/db.js')
.then('app/models')
.into(app);


module.exports = app;