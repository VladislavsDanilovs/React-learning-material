import React from "react";
/* In the cart-context, we are setting up the data just for autocompletion sake.
In Provider file is where you do the real work.*/
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
