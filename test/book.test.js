let { getBooks, getBookById, addBook } = require('../book.js');

describe('Book api testing', () => {
  it('should return all books', () => {
    let books = getBooks();
    expect(books.length).toBe(3);
    expect(books).toEqual([
      { id: 1, title: 'Inayath', author: 'Hello' },
      { id: 2, title: 'Hey', author: 'akhil' },
      { id: 3, title: 'Heyys', author: 'kazeem' },
    ]);
  });

  it('should return book by id', () => {
    let book = getBookById(1);
    expect(book).toEqual({ id: 1, title: 'Inayath', author: 'Hello' });
  });

  it('shouls return undefined for non existance id', () => {
    let book = getBookById(99);
    expect(book).toBeUndefined();
  });

  it('should add new book', () => {
    let newbook = { id: 4, title: 'Hellllloo', author: 'althaf' };
    let addbook = addBook(newbook);
    expect(addbook).toEqual({ id: 4, title: 'Hellllloo', author: 'althaf' });
    const books = getBooks();
    expect(books.length).toBe(4);
  });
});
