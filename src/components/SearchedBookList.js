import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

class SearchedBookList extends Component {
  constructor(props) {
    super(props);
  }

  onSelect(book, shelf) {
    BooksAPI.update(book, shelf).then((books) => {
      this.props.updateBooks()
    })
  }

  render(){
    const thumbnail = typeof this.props.book.imageLinks === "undefined" ? "BookCover2.png" : this.props.book.imageLinks.thumbnail;
    const title = typeof this.props.book.title === "undefined" ? "" : this.props.book.title;
    const author = typeof this.props.book.authors === "undefined" ? "" : this.props.book.authors;
    return(
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
              <div className="book-shelf-changer">
              <select
                value="none"
                onChange={(event) => this.onSelect(this.props.book, event.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{author}</div>
          </div>
        </li>
      </div>
    )
  }
}

export default SearchedBookList;
