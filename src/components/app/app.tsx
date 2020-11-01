import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {HomePage, CartPage} from '../pages';
import ShopHeader from '../shop-header';
import './app.scss';

export const App = () => {
  const {orderTotal, numItems} = useSelector((state: any) => state.shoppingCart);

  return (
    <>
      <ShopHeader numItems={numItems} total={orderTotal} />
      <div className='main'>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/cart' component={CartPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
