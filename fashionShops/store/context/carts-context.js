import { createContext, useReducer } from "react";

export const CartContext = createContext({
    cartItems: [],
    totalQuantity: 0,
    addItemCart: ({ id, title, price, imageUrl, discount }) => {},
    deleteItemCart: (id) => {},
    deleteAllItemCart: (id) => {},
});

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return addItemToCart(state, action.payload);
        case "DELETE":
            return removeItemFromCart(state, action.payload);
        case "DELETE_ALL_ITEM":
            return removeAllItemFromCart(state, action.payload);
        default:
            return state;
    }
}

const addItemToCart = (state, newItem) => {
    const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
        const updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex].quantity++;
        updatedItems[existingItemIndex].totalPrice +=
            newItem.price * (1 - newItem.discount / 100);

        return {
            ...state,
            cartItems: updatedItems,
            totalQuantity: state.totalQuantity + 1,
        };
    } else {
        return {
            ...state,
            cartItems: [
                ...state.cartItems,
                {
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    imageUrl: newItem.imageUrl,
                    discount: newItem.discount,
                    quantity: 1,
                    totalPrice: newItem.price,
                },
            ],
            totalQuantity: state.totalQuantity + 1,
        };
    }
};

const removeItemFromCart = (state, itemId) => {
    const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === itemId
    );
    const existingItem = state.cartItems[existingItemIndex];

    if (existingItem.quantity === 1) {
        const updatedItems = state.cartItems.filter(
            (item) => item.id !== itemId
        );
        return {
            ...state,
            cartItems: updatedItems,
            totalQuantity: state.totalQuantity - 1,
        };
    } else {
        const updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex].quantity--;
        updatedItems[existingItemIndex].totalPrice -= existingItem.price;

        return {
            ...state,
            cartItems: updatedItems,
            totalQuantity: state.totalQuantity - 1,
        };
    }
};

const removeAllItemFromCart = (state, itemId) => {
    const existingItem = state.cartItems.find((item) => item.id === itemId);
    const updatedItems = state.cartItems.filter((item) => item.id !== itemId);
    return {
        ...state,
        cartItems: updatedItems,
        totalQuantity: state.totalQuantity - existingItem.quantity,
    };
};

function CartContextProvider({ children }) {
    const [cartState, dispatch] = useReducer(cartReducer, {
        cartItems: [],
        totalQuantity: 0,
    });

    function addItemCart(cart) {
        dispatch({ type: "ADD", payload: cart });
        // console.log(cartState);
    }

    function deleteItemCart(id) {
        dispatch({ type: "DELETE", payload: id });
        // console.log(cartState);
    }
    function deleteAllItemCart(id) {
        dispatch({ type: "DELETE_ALL_ITEM", payload: id });
        // console.log(cartState);
    }

    const value = {
        cartItems: cartState.cartItems,
        totalQuantity: cartState.totalQuantity,
        addItemCart: addItemCart,
        deleteItemCart: deleteItemCart,
        deleteAllItemCart: deleteAllItemCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

export default CartContextProvider;
