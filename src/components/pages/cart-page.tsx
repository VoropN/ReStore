import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartTable from '../shopping-cart-table';

const CartPage = () => {
    const {orderTotal, numItems, cartItems} = useSelector(
      (state: any) => state.shoppingCart,
    );
    const itemPlural = cartItems.length > 1 && 's';
    const bookPlural = numItems > 1 && 's';
  return (
    <>
      <h1>Cart</h1>
      <div>
        You order <b>{cartItems.length}</b> item{itemPlural},<b> {numItems}</b>{' '}
        book{bookPlural}, totaling <b>${orderTotal}</b>
      </div>
      <ShoppingCartTable />
    </>
  );
}

export default CartPage;
