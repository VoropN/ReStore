import React from 'react';
import BookListItem from '../book-list-item';

const BookList = ({books, onAddedToCart}: any) => {
  return (
    <ul className='book-list'>
      {books.map((book: any) => (
        <li className='book-list__item' key={book.id}>
          <BookListItem
            book={book}
            onAddedToCart={() => onAddedToCart(book.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
