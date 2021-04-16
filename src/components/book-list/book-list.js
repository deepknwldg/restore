import React, { Component } from "react";
import BookListItem from "../book-list-item";

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => {
          return (
            <li>
              <BookListItem key={book.id} book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BookList;
