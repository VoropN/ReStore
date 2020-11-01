import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {bookAddedToCart, fetchBooks} from '../../actions';
import ErrorIndicator from '../error-indicator';
import {withBookStoreService} from '../hoc';
import Spinner from '../spinner';
import BookList from './book-list';
import './book-list.scss';

const BookListContainer = ({
  books,
  loading,
  error,
  fetchBooks,
  onAddedToCart,
}: any) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator error={error.message} />;
  }

  return <BookList books={books} onAddedToCart={onAddedToCart} />;
};

const mapStateToProps = ({ bookList: { books, loading, error } }: any) => ({
  books,
  loading,
  error,
});
const mapDispatchToProps = (dispatch: any, {bookStoreService}: any) => {
  return {
    fetchBooks: () => fetchBooks(bookStoreService, dispatch),
    onAddedToCart: (id: any) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
