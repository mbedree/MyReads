import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

const BookShelf = props => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <BookList
              books={props.books}
              shelf={"currentlyReading"}
            />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <BookList
              books={props.books}
              shelf={"wantToRead"}
            />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <BookList
              books={props.books}
              shelf={"read"}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>

    </div>
  );
}

export default BookShelf;
