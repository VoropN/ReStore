import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {BookStoreServiceContext} from './components/bookstore-service-context/bookstore-sevice-context';
import {BookStoreService} from './services';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './store';
import ErrorBoundary from './components/error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ErrorBoundary>
        <BookStoreServiceContext.Provider value={bookStoreService}>
          <Router>
            <App />
          </Router>
        </BookStoreServiceContext.Provider>
      </ErrorBoundary>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
