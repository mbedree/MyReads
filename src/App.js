import React from 'react'
import BookShelf from './components/BookShelf'
import SearchBar from './components/SearchBar'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
      this.setState(() => ({
        books
      }))
  }

  updateBooks = () => {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  render() {
    return (
          <div>
            <Route exact path="/" render={() => (
              <BookShelf
                books={this.state.books}
                updateBooks={this.updateBooks}
              />
              )}
            />
            <Route path='/search' render={() => (
              <SearchBar
                books={this.state.books}
                updateBooks={this.updateBooks}
              />
            )}
         />
      </div>
    )
  }
}

export default BooksApp
