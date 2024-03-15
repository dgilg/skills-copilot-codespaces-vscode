// Create web server
 Run: node comments.js
// Open browser: http://localhost:3000
// Test: http://localhost:3000/comments
// Test: http://localhost:3000/comments/1

var express = require('express');
var app = express();

var comments = [
  { name: 'John', comment: 'Hello World' },
  { name: 'Jane', comment: 'Hello John' },
  { name: 'Doe', comment: 'Hello Doe' },
  { name: 'Smith', comment: 'Hello Smith' },
  { name: 'Doe', comment: 'Hello Doe' },
  { name: 'Smith', comment: 'Hello Smith' },
  { name: 'Doe', comment: 'Hello Doe' },
  { name: 'Smith', comment: 'Hello Smith' },
  { name: 'Doe', comment: 'Hello Doe' },
  { name: 'Smith', comment: 'Hello Smith' }
];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.get('/comments/:id', function(req, res) {
  var id = req.params.id;
  if (id < 0 || id >= comments.length) {
    res.statusCode = 404;
    return res.send('Error 404: No comment found');
  }
  res.json(comments[id]);
});

app.listen(3000);
console.log('Server is running on http://localhost:3000');