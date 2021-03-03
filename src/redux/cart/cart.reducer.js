import CartActionTypes from './cart.types';

const intialState = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state = intialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        default:
            return state;
    }
};

export default cartReducer;
