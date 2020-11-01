
const updateBook = (items: any[], booId: number, quantity: number) => {
  const idx = items.findIndex((item) => item.id === booId);
  const { id, title, price, total, count }: any = items[idx];

  if (count + quantity <= 0) {
    return [
      ...items.slice(0, idx),
      ...items.slice(idx + 1),
    ]
  }

  const newCount = count + quantity;
  const newBook = { id, title, price, total: total + price * newCount, count: newCount };

  return [
    ...items.slice(0, idx),
    newBook,
    ...items.slice(idx + 1),
  ]
}

export const updateShoppingCart = (state: any, action: any) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      numItems: 0
    }
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const idx = state.shoppingCart.cartItems.findIndex((item: any) => item.id === bookId);
      const { id, title, price }: any = state.bookList.books.find((book: any) => book.id === bookId);
      const newBook = { id, title, price, total: price, count: 1 };

      const cartItems = idx !== -1
        ? updateBook(state.shoppingCart.cartItems, bookId, 1)
        : [...state.shoppingCart.cartItems, newBook]

      return {
        ...state,
        cartItems,
        orderTotal: cartItems.reduce((acc, cur) => acc + cur.total, 0),
        numItems: cartItems.reduce((acc, cur) => acc + cur.count, 0)
      };
    case 'BOOK_DELETED_FROM_CART': {
      const cartItems = updateBook(state.shoppingCart.cartItems, action.payload, -1);
      return {
        ...state,
        cartItems,
        orderTotal: cartItems.reduce((acc, cur) => acc + cur.total, 0),
        numItems: cartItems.reduce((acc, cur) => acc + cur.count, 0)
      };
    }
    case 'ALL_BOOKS_DELETED': {
      const count = state.shoppingCart.cartItems.find((item: any) => item.id === action.payload).count;
      const cartItems = updateBook(state.shoppingCart.cartItems, action.payload, -count);
      return {
        ...state,
        cartItems,
        orderTotal: cartItems.reduce((acc, cur) => acc + cur.total, 0),
        numItems: cartItems.reduce((acc, cur) => acc + cur.count, 0)
      };
    }
    default:
      return state.shoppingCart;
  }
};
