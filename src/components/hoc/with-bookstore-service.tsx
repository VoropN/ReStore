import React, { useContext } from 'react';
import { BookStoreServiceContext } from '../bookstore-service-context';

export const withBookStoreService = () => (Wrapped: any) => (props: any) => {
  const bookStoreServiceContext = useContext(BookStoreServiceContext);

  return <Wrapped {...props} bookStoreService={bookStoreServiceContext} />;
};

