import React from 'react';
import Book from './Book';

const BookList = props => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {Object.keys(props.books).map((id) => (
          <Book
            book={props.books[id]}
            shelf={props.shelf}
            key={id}
            updateBooks={props.updateBooks}
          />
        ))}
      </ol>
    </div>
  )
}

export default BookList;
