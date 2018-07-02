import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import SearchedBookList from './SearchedBookList';

class SearchBar extends Component {
  state = {
    searchTerm: '',
    searchedBooks: [],
    results: "empty"
  }

  onSearchChange(term) {
    this.setState(() =>({
      searchTerm: term
    }))
    if(term === ''){
      this.setState(() =>({
        results: "empty"
      }))

    }
    else {
      BooksAPI.search(term)
      .then((books) => {
        if(books.error){
          this.setState(() => ({
            results: "false",
            searchedBooks: []
          }))
        }
        else {
          this.setState(() => ({
            results: "true",
            searchedBooks: books
          }))
        }
      })
    }
  }

  render() {
    return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.searchTerm}
                  onChange={event => this.onSearchChange(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
            {this.state.results === "empty" ?
              <div></div>
            :
              this.state.results === "false" ?
                <div>No Books Found</div>
              :
                <ol className="books-grid">
                {Object.keys(this.state.searchedBooks).map((id) => (
                  <SearchedBookList
                    book={this.state.searchedBooks[id]}
                    updateBooks={this.props.updateBooks}
                    key={id}
                    books={this.props.books}
                  />
                ))}
                </ol>
            }
            </div>
          </div>
    )
  }
}

export default SearchBar;
