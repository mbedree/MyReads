import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

class Book extends Component {

  onSelect(book, shelf) {
    BooksAPI.update(book, shelf).then((books) => {
      this.props.updateBooks()
    })
  }

render() {
  return (
    <div>
      {this.props.shelf === this.props.book.shelf && (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select
                  value={this.props.shelf}
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
            <div className="book-authors">{this.props.book.authors}</div>
          </div>
        </li>
      )}
    </div>
  )
}
}

export default Book;






// <li>
//   <div className="book">
//     <div className="book-top">
//       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.books[0].imgURL }}></div>
//       <div className="book-shelf-changer">
//         <select>
//           <option value="move" disabled>Move to...</option>
//           <option value="currentlyReading">Currently Reading</option>
//           <option value="wantToRead">Want to Read</option>
//           <option value="read">Read</option>
//           <option value="none">None</option>
//         </select>
//       </div>
//     </div>
//     <div className="book-title">{props.books[0].name}</div>
//     <div className="book-authors">{props.books[0].author}</div>
//   </div>
// </li>
// <li>
//   <div className="book">
//     <div className="book-top">
//       <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: props.books[1].imgURL }}></div>
//       <div className="book-shelf-changer">
//         <select>
//           <option value="move" disabled>Move to...</option>
//           <option value="currentlyReading">Currently Reading</option>
//           <option value="wantToRead">Want to Read</option>
//           <option value="read">Read</option>
//           <option value="none">None</option>
//         </select>
//       </div>
//     </div>
//     <div className="book-title">{props.books[1].name}</div>
//     <div className="book-authors">{props.books[1].author}</div>
//   </div>
// </li>
// <div className="bookshelf-books">
//   <ol className="books-grid">
//     <li>
//       <div className="book">
//         <div className="book-top">
//           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.books[2].imgURL }}></div>
//           <div className="book-shelf-changer">
//             <select>
//               <option value="move" disabled>Move to...</option>
//               <option value="currentlyReading">Currently Reading</option>
//               <option value="wantToRead">Want to Read</option>
//               <option value="read">Read</option>
//               <option value="none">None</option>
//             </select>
//           </div>
//         </div>
//         <div className="book-title">{props.books[2].name}</div>
//         <div className="book-authors">{props.books[2].author}</div>
//       </div>
//     </li>
//     <li>
//       <div className="book">
//         <div className="book-top">
//           <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: props.books[3].imgURL }}></div>
//           <div className="book-shelf-changer">
//             <select>
//               <option value="move" disabled>Move to...</option>
//               <option value="currentlyReading">Currently Reading</option>
//               <option value="wantToRead">Want to Read</option>
//               <option value="read">Read</option>
//               <option value="none">None</option>
//             </select>
//           </div>
//         </div>
//         <div className="book-title">{props.books[3].name}</div>
//         <div className="book-authors">{props.books[3].author}</div>
//       </div>
//     </li>
//   </ol>
// </div>
// <div className="bookshelf-books">
//   <ol className="books-grid">
//     <li>
//       <div className="book">
//         <div className="book-top">
//           <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: props.books[4].imgURL }}></div>
//           <div className="book-shelf-changer">
//             <select>
//               <option value="move" disabled>Move to...</option>
//               <option value="currentlyReading">Currently Reading</option>
//               <option value="wantToRead">Want to Read</option>
//               <option value="read">Read</option>
//               <option value="none">None</option>
//             </select>
//           </div>
//         </div>
//         <div className="book-title">{props.books[4].name}</div>
//         <div className="book-authors">{props.books[4].author}</div>
//       </div>
//     </li>
//     <li>
//       <div className="book">
//         <div className="book-top">
//           <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: props.books[5].imgURL }}></div>
//           <div className="book-shelf-changer">
//             <select>
//               <option value="move" disabled>Move to...</option>
//               <option value="currentlyReading">Currently Reading</option>
//               <option value="wantToRead">Want to Read</option>
//               <option value="read">Read</option>
//               <option value="none">None</option>
//             </select>
//           </div>
//         </div>
//         <div className="book-title">{props.books[5].name}</div>
//         <div className="book-authors">{props.books[5].author}</div>
//       </div>
//     </li>
//     <li>
//       <div className="book">
//         <div className="book-top">
//           <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: props.books[6].imgURL }}></div>
//           <div className="book-shelf-changer">
//             <select>
//               <option value="move" disabled>Move to...</option>
//               <option value="currentlyReading">Currently Reading</option>
//               <option value="wantToRead">Want to Read</option>
//               <option value="read">Read</option>
//               <option value="none">None</option>
//             </select>
//           </div>
//         </div>
//         <div className="book-title">{props.books[6].name}</div>
//         <div className="book-authors">{props.books[6].author}</div>
//       </div>
//     </li>
//   </ol>
// </div>
