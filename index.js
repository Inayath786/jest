const express = require('express');
const { getBooks, getBookById, addBook } = require('./book.js');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/api/books', (req, res) => {
  res.send(getBooks());
});

app.get('/book/details/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = getBookById(id);
  res.send(result);
});

app.get('/newbook', (req, res) => {
  const book = addBook(req.body);
  res.status(201).json(book);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = { app };
