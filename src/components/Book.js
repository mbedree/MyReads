import React from 'react';

const Book = props => {

  return (
    <div>
      {props.shelf === props.book.shelf && (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.book.imgURL }}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{props.book.name}</div>
            <div className="book-authors">{props.book.author}</div>
          </div>
        </li>
      )}
    </div>
  );
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
