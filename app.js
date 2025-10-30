// app.js
// TODO: create a skeleton Express application with routes for login, registration,
// teacher views, and supervisor views

require('./db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//enable sessions
const session = require('express-session');
const sessionOptions = {
  secret: 'secret cookie thang (store this elsewhere!)',
  resave: true,
  saveUninitialized: true
};
app.use(session(sessionOptions));

// view engine set up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// body parser setup
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

// Home redirect (optional)
app.get('/', (req, res) => {
  res.redirect('/login');
});

// Authentication
app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

app.get('/setup', (req, res) => {
  res.render('setup', { title: 'Account Setup' });
});

// supervisor routes
app.get('/supervisor/home', (req, res) => {
  res.render('supervisor-home', { title: 'Supervisor Home' });
});

app.get('/supervisor/view', (req, res) => {
  res.render('supervisor-view', { title: 'All Lesson Plans' });
});

app.get('/supervisor/view/:slug', (req, res) => {
  res.render('supervisor-view-one', { title: 'View Lesson Plan', slug: req.params.slug });
});

app.get('/supervisor/profile', (req, res) => {
  res.render('supervisor-profile', { title: 'Supervisor Profile' });
});

// teacher routes 
app.get('/teacher/home', (req, res) => {
  res.render('teacher-home', { title: 'Teacher Home' });
});

app.get('/teacher/view', (req, res) => {
  res.render('teacher-view', { title: 'All Lesson Plans' });
});

app.get('/teacher/view/create', (req, res) => {
  res.render('teacher-create', { title: 'Create Lesson Plan' });
});

app.get('/teacher/view/:slug', (req, res) => {
  res.render('teacher-view-one', { title: 'View Lesson Plan', slug: req.params.slug });
});

app.get('/teacher/standards', (req, res) => {
  res.render('teacher-standards', { title: 'Teaching Standards' });
});

app.get('/teacher/profile', (req, res) => {
  res.render('teacher-profile', { title: 'Teacher Profile' });
});

// start server
app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
