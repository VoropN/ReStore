import React from 'react';
import { connect } from 'react-redux';
import { allBooksDeletedById, bookAddedToCart, bookDeletedFromCart } from '../../actions';
import './shopping-cart-table.scss';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}: any) => {
  const renderRow = ({id, title, total, count}: any, idx: number) => {
    return (
      <tr key={id} className='shopping-cart-item'>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td className='actions-button'>
          <i className='btn btn-success fa fa-plus-circle' onClick={() => onIncrease(id)} />
          <i className='btn btn-warning fa fa-minus-circle' onClick={() => onDecrease(id)} />
          <i className='btn btn-danger fa fa-trash-o' onClick={() => onDelete(id)}/>
        </td>
      </tr>
    );
  }

  return (
    <div className='shopping-cart'>
      <table className='shopping-cart-table'>
        <thead>
          <tr className='shopping-cart-title'>
            <th>#</th>
            <th>Books</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className='shopping-cart-total'>
        Total: <div className='sum'> ${total}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }: any) => ({
  items: cartItems,
  total: orderTotal
});

const mapStateToDispatch = {
  onIncrease: bookAddedToCart,
  onDecrease: bookDeletedFromCart,
  onDelete: allBooksDeletedById,
};

export default connect(mapStateToProps, mapStateToDispatch)(ShoppingCartTable);
