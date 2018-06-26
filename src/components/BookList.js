import React from 'react';
import Book from './Book';

const BookList = props => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book) => (
          <Book
            book={book}
            shelf={props.shelf}
          />
        )}
      </ol>
    </div>
  )
}

export default BookList;
