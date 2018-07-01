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
    const title = typeof this.props.book.title === "undefined" ? "Title Unknown" : this.props.book.title;
    const authors = typeof this.props.book.authors === "undefined" ? "Author/s Unknown" : this.props.book.authors;
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
            <div className="book-authors">{authors.length === 1 ? authors
              : authors.map((author, i) => (
                <span key={i}>{author}<br/></span>
              ))
            }</div>
          </div>
        </li>
      </div>
    )
  }
}

export default SearchedBookList;
