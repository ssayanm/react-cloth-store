export default (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };

    case "ADD_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    // case "REMOVE_ITEM":
    //   return {
    //     ...state,
    //     cartItems: removeItemFromCart(state.cartItems, action.payload),
    //   };
    // case "CLEAR_ITEM_FROM_CART":
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter(
    //       (cartItem) => cartItem.id !== action.payload.id
    //     ),
    //   };
    default:
      return state;
  }
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
