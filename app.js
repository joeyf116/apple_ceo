const express = require('express'),
    es6renderer = require('express-es6-template-engine'),
    path = require('path'), 
    cookieParser = require('cookie-parser'),
    logger = require('morgan');
    
const indexRouter = require('./routes/index'),
    ceoController = require('./routes/ceos');

const app = express();

app.engine('html', es6renderer);
app.set("views", './views');
app.set("view engine", "html");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ceos', ceoController);
// app.use('/users', usersRouter);

module.exports = app;
