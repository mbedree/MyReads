import React from 'react'
import BookShelf from './components/BookShelf'
import SearchBar from './components/SearchBar'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
          <div>
            <Route exact path="/" render={() => (
              <BookShelf />
              )}
            />
            <Route path='/search' render={() => (
              <SearchBar />
            )}
         />
      </div>
    )
  }
}

export default BooksApp
