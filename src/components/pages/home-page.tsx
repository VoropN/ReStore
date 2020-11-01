import React from 'react';
import BookListContainer from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <>
      <BookListContainer />
      <ShoppingCartTable/>
    </>
  );
};

export default HomePage;
