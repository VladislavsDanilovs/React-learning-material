import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    /* to add item to the array we will use updatedItems array. 
      state.items means that is the items in the current state snapshot which we get as a first argument in the reducer by React,
      and then use concat() that is built in method in JS, which adds a new item to an array, but unlike push(), its doesnt edit the existing array,
      but return a new array, thats is important for this case.
      Because we want to update our state in a immutable way (we dont want to edit our old state snapshot, because of the reference value thing in JS, that would mean that existing data in memory gets edited without React knowing about it)   
      and after that we're concating action.item, so we expecting to have all the data needed on that action.item (name, amounts of items, price) 
      SO everything that we passed throw addItemToCartHandler() method 
      
      for an amount, its should be the old state snapshot 
      (So basically old price (that is already in cart or 0 ) + new item price * quantity of new items)
      
      returning new state snapshot
      */
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    /*findIndex() built in method in JS which find the index of an item in an array
      So if item that we're currently looking at in the array has the same id as the item we're adding, then it will RETURN
      INDEX of the item if it exists  */
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    /* Here we want to get that item using recieved index*/
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    /* if it's not undefined, index exists then we putting into array that found item, and updating amount field to just add 1 amount to current amount */
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      /* updatedItems is equals to a new array where I copy the existing items, so that I update this immutably 
    without edditing the old array in memory, hence I'm creating a new array where I copy the old objects.   */
      updatedItems = [...state.items];
      /*Here we're overwriting value with the updatedItem. So I pick the old item which we identified in the cart items array,
    and overwrite it with this updatedItem */
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    /* For state in this case we can use items, but for action we can use only id 
    because of line 101 */
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  /* Here you want to return default value, for our case it is an empty cart*/
  return defaultCartState;
};

const CartProvider = (props) => {
  /* Second argument we can pass our default state */
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  /* Here we want to dispacth action, it could be any action, but typacaly its an object
  which has some property which allows you to identify that action inside of your reducer function
  here we choose key for an object 'type' but it could be any name such as 'identifier' and etc. 
  for type value it could be ADD_ITEM, ADD_CART_ITEM and etc.
  
  Adding second property to this action object (item) name also can be custom, and pointing at our item argument :item because of (addItemToCartHandler = (item))
  
  */
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  /* from items: [] we changed to cartState.items, bcs we managing items with state.
  So here, we're using cartContext which will contain state because of cartState. And since here in jsx code bellow we're returning context provider, 
  we will be able to get that data without multiple props chains.
  In MealItem we are using context, and on that passing a new valid item object throw addItem property which refers to addItemToCartHandler.  */
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
