const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const booksLoaded = (newBook: any) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBook
  };
};

const booksError = (error: any) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

export const fetchBooks = (bookStoreService: any, dispatch: any) => {
  dispatch(booksRequested());
  bookStoreService
    .getBooks()
    .then((data: any) => dispatch(booksLoaded(data)))
    .catch((error: any) => dispatch(booksError(error)));
};

export const bookAddedToCart = (bookId: number) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

export const bookDeletedFromCart = (bookId: number) => {
  return {
    type: 'BOOK_DELETED_FROM_CART',
    payload: bookId
  }
}

export const allBooksDeletedById = (bookId: number) => {
  return {
    type: 'ALL_BOOKS_DELETED',
    payload: bookId
  }
}
