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
        cartItems: addItemToCart(state.cart, action.payload),
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
    // case "GET_TODOS":
    //   return {
    //     ...state,
    //     loading: false,
    //     todos: action.payload,
    //   };

    // case "DELETE_TODO":
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) => todo._id !== action.payload), //filtering the id that needs to be deleted
    //   };

    // case "ADD_TODO":
    //   return {
    //     ...state,
    //     todos: [...state.todos, action.payload],
    //   };

    // case "COMPLETED_TODO":
    //   return {
    //     ...state,
    //     // looping through each todos items and checking the clicked chekcbox todo id with the existing id of todo, when it is matching I am toggling the "completed" for true or false and if not matching I am just returing the todo
    //     todos: state.todos.map((todo) =>
    //       todo._id === action.payload
    //         ? { ...todo, completed: !todo.completed }
    //         : todo
    //     ),
    //   };

    // case "TODO_ERROR":
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
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
