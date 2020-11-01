import React from 'react';
import { BookStoreService } from '../../services';

const bookStoreService = new BookStoreService();

export const BookStoreServiceContext = React.createContext(bookStoreService);
