import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.scss';

const ShopHeader = ({ numItems, total }: any) => {
  return (
    <div className='header'>
      <Link to='/ReStore/'>
        <h3>ReStore</h3>
      </Link>
      <Link to='/ReStore/cart/'>
        <div className='cart'>
          <i className='cart-icon fa fa-shopping-cart' />
          {numItems} book{numItems > 1 && 's'}
          <div className='total'> (${total})</div>
        </div>
      </Link>
    </div>
  );
};

export default ShopHeader;
