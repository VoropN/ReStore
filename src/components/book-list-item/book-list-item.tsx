import React from 'react';
import './book-list-item.scss';

const BookListItem = ({book, onAddedToCart}: any) => {
  return (
    <>
      <img alt='book' className='book-image' src={book.src} />
      <div className='book-content'>
        <h6 className='book-title'>{book.title}</h6>
        <div className='book-author'>
          <b>Author:</b> {book.author}
        </div>
        <div className='book-price'>${book.price}</div>
        <button onClick={onAddedToCart} className='btn btn-primary btn-add'>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default BookListItem;
