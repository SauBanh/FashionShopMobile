import { useContext } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";

import { FavoritesContext } from "../../store/context/favorites-context";
import { CartContext } from "../../store/context/carts-context";

import Card from "../UI/Card";
import { GlobalStyles } from "../../constants/styles";
import { currencyFormat } from "../../util/currencyFormat";

const CartItem = ({
    id,
    title,
    price,
    imageUrl,
    discount,
    quantity,
    totalPrice,
}) => {
    const navigation = useNavigation();
    const isTextTooLong = title.length > 20;
    const renderText = isTextTooLong ? `${title.slice(0, 17)}...` : title;
    function selectFashionItemHandler() {
        navigation.navigate("FashionDetail", {
            fashionId: id,
        });
    }

    const favoriteFashionCtx = useContext(FavoritesContext);
    const cartFashionCtx = useContext(CartContext);
    const fashionIsFavorite = favoriteFashionCtx.ids.includes(id);
    function changeFavoriteStatusHandler() {
        if (fashionIsFavorite) {
            favoriteFashionCtx.removeFavorite(id);
        } else {
            favoriteFashionCtx.addFavorite(id);
        }
    }
    function deleteItemCartHandler() {
        cartFashionCtx.deleteAllItemCart(id);
    }
    function increase() {
        cartFashionCtx.addItemCart({
            id: id,
            title: title,
            price: price,
            imageUrl: imageUrl,
            discount: discount,
        });
    }

    function reduce() {
        cartFashionCtx.deleteItemCart(id);
    }
    return (
        // <View>
        <Card>
            <Pressable onPress={selectFashionItemHandler}>
                <View style={styles.rootContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: imageUrl }}
                        />
                    </View>
                    <View style={styles.contentContainer}>
                        {/* contentContainer */}
                        <View style={styles.titleContainer}>
                            <Text style={styles.textTitle}>{renderText}</Text>
                            <View style={styles.optionContainer}>
                                <Text style={styles.textOption}>
                                    Size:{" "}
                                    <Text style={styles.boldOption}>L</Text> |
                                    Color:{" "}
                                    <Text style={styles.boldOption}>Blue</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.priceContainer}>
                            {/* Price  */}
                            <View style={styles.priceInnerContainer}>
                                <Text style={styles.priceDiscount}>
                                    {currencyFormat(
                                        price * (1 - discount / 100)
                                    )}
                                </Text>
                                <Text style={styles.priceRoot}>
                                    {currencyFormat(price)}
                                </Text>
                                <Text style={styles.priceTotal}>
                                    Tổng: {currencyFormat(totalPrice)}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.actionContainer}>
                        <Pressable onPress={reduce}>
                            <View style={styles.minusAction}>
                                <Entypo name="minus" size={24} color="black" />
                            </View>
                        </Pressable>
                        <Text style={styles.quantityNum}>{quantity}</Text>
                        <Pressable onPress={increase}>
                            <View style={styles.plusAction}>
                                <Entypo name="plus" size={24} color="white" />
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.btnActionContainer}>
                        <Pressable
                            style={styles.favoriteContainer}
                            onPress={changeFavoriteStatusHandler}
                        >
                            <MaterialIcons
                                name={
                                    fashionIsFavorite
                                        ? "favorite"
                                        : "favorite-border"
                                }
                                size={26}
                                color={GlobalStyles.color.errorColor}
                            />
                        </Pressable>
                        <Pressable
                            style={styles.deleteContainer}
                            onPress={deleteItemCartHandler}
                        >
                            <Ionicons
                                name="ios-trash-outline"
                                size={26}
                                color={GlobalStyles.color.errorColor}
                            />
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </Card>
        // </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    rootContainer: {
        height: 100,
        flexDirection: "row",
        position: "relative",
    },
    imageContainer: {
        borderRadius: 10,
        // backgroundColor: "red",
        height: 100,
        width: 100,
        overflow: "hidden",
    },
    image: {
        height: "100%",
        width: "100%",
    },
    contentContainer: {
        marginLeft: 15,
    },
    titleContainer: {
        width: "100%",
    },
    textTitle: {
        fontSize: 14,
        width: "100%",
        fontWeight: "bold",
        color: GlobalStyles.color.primaryColor,
    },
    optionContainer: {
        // backgroundColor: "red",
    },
    textOption: {
        color: GlobalStyles.color.subTitleColor,
        fontWeight: "500",
        fontSize: 12,
    },
    boldOption: {
        fontWeight: "bold",
        color: GlobalStyles.color.primaryColor,
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // width: "100%",
    },
    priceInnerContaine: {
        // flex: 1,
    },
    priceDiscount: {
        fontSize: 16,
        fontWeight: "600",
    },
    priceRoot: {
        fontSize: 12,
        fontWeight: "400",
        textDecorationLine: "line-through",
    },
    actionContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        right: 0,
        borderWidth: 1,
        borderColor: GlobalStyles.color.subTitleColor,
        borderRadius: 10,
        // padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    minusAction: {
        padding: 7,
    },
    quantityNum: {
        // padding: 7,
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 15,
    },
    plusAction: {
        padding: 7,
        backgroundColor: GlobalStyles.color.primaryColor,
        borderRadius: 10,
    },
    btnActionContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        flexDirection: "row",
    },
    favoriteContainer: {
        marginHorizontal: 15,
    },
    priceTotal: {
        fontSize: 13,
    },
});
