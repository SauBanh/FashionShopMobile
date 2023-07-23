import { useContext } from "react";
import { View, Text, Button } from "react-native";

import { CartContext } from "../store/context/carts-context";

const CartScreen = () => {
    const cartCtx = useContext(CartContext);
    function addCardHandler() {
        console.log("addCardHandler");
        cartCtx.addItemCart({
            id: "f1",
            title: "Áo thun nam tay ngắn",
            price: 300000,
            imageUrl: "https://i.imgur.com/tosuXfv.jpg",
            discount: 10,
        });
    }
    function deleteCardHandler() {
        console.log("deleteCardHandler");
        cartCtx.deleteItemCart("f1");
    }
    function test() {
        console.log(cartCtx.cartItems);
    }
    return (
        <View
            style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
        >
            <Button onPress={test} title="Test" />
            <Button onPress={addCardHandler} title="Add" />
            <Button onPress={deleteCardHandler} title="Delete" />
        </View>
    );
};

export default CartScreen;
