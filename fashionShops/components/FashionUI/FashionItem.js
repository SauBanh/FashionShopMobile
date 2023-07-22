import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/styles";
import { currencyFormat } from "../../util/currencyFormat";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const FashionItem = ({ id, title, price, imageUrl, description, discount }) => {
    const navigation = useNavigation();
    const isTextTooLong = title.length > 20;
    const renderText = isTextTooLong ? `${title.slice(0, 17)}...` : title;
    function selectFashionItemHandler() {
        navigation.navigate("FashionDetail", {
            fashionId: id,
        });
    }
    return (
        <Pressable
            onPress={selectFashionItemHandler}
            style={styles.rootcontainer}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <Text style={styles.textTitle}>{renderText}</Text>
            {/* <View style={{ width: "100%" }}></View> */}
            <View style={styles.bottomContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.textDiscount}>
                        {currencyFormat(price * (1 - discount / 100))}
                    </Text>
                    <Text style={styles.textPrice}>
                        {currencyFormat(price)}
                    </Text>
                </View>
            </View>

            <Pressable
                // style={{ backgroundColor: "#fff" }}
                style={styles.cartContainer}
                onPress={() =>
                    Alert.alert(
                        "Thêm vào giỏ hàng",
                        "Đã thêm vào giỏ hàng thành công"
                    )
                }
            >
                <Feather name="shopping-bag" size={24} color="white" />
            </Pressable>
            <View style={styles.favoriteContainer}>
                <MaterialIcons name="favorite" size={18} color="white" />
            </View>
        </Pressable>
    );
};

export default FashionItem;

const styles = StyleSheet.create({
    rootcontainer: {
        backgroundColor: "#fff",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        margin: 8,
        padding: 8,
        position: "relative",
        overflow: "hidden",
        elevation: 4,
        shadowColor: "#DC9FFF",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    imageContainer: {
        width: "100%",
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: GlobalStyles.color.backgroundContentColor,
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: 140,
        resizeMode: "cover",
    },
    textTitle: {
        fontSize: 15,
        textAlign: "center",
        color: GlobalStyles.color.primaryColor,
        fontWeight: "bold",
        width: "100%",
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        padding: 5,
        width: "100%",
    },
    priceContainer: {
        // flex: 3,
    },
    textDiscount: {
        fontWeight: "bold",
        fontSize: 16,
    },
    textPrice: {
        textDecorationLine: "line-through",
    },
    cartContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 14,
        borderTopLeftRadius: 20,
        position: "absolute",
        right: 0,
        bottom: 0,
        backgroundColor: GlobalStyles.color.primaryColor,
    },
    favoriteContainer: {
        position: "absolute",
        top: 15,
        right: 15,
        padding: 2,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: GlobalStyles.color.primaryColor,
        backgroundColor: GlobalStyles.color.primaryColor,
    },
});
