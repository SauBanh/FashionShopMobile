import { View, FlatList, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import CartItem from "./CartItem";

function renderCARTItem(itemData) {
    const item = itemData.item;
    const cartItemProps = {
        id: item.id,
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
        discount: item.discount,
        quantity: item.quantity,
        totalPrice: item.totalPrice,
    };

    return <CartItem {...cartItemProps} />;
}

const CartList = ({ items }) => {
    return (
        <View style={styles.rootContainer}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderCARTItem}
                style={styles.container}
            />
        </View>
    );
};

export default CartList;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: GlobalStyles.color.backgroundContentColor,
        height: "100%",
        padding: 15,
    },
});
