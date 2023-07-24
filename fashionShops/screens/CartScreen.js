import { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { CartContext } from "../store/context/carts-context";
import CartList from "../components/CartUI/CartList";
import { GlobalStyles } from "../constants/styles";
import Title from "../components/UI/Title";

const CartScreen = () => {
    const cartCtx = useContext(CartContext);
    if (cartCtx.cartItems.length === 0) {
        return (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Title fontSize={30}>Cart is empty.</Title>
            </View>
        );
    }
    return (
        <View style={styles.rootContainer}>
            <CartList items={cartCtx.cartItems} />
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: GlobalStyles.color.backgroundContentColor,
        width: "100%",
        // justifyContent: "center",
        // alignItems: "center",
    },
});
