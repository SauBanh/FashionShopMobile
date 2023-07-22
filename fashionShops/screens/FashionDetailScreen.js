import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
    Pressable,
} from "react-native";
import {
    FontAwesome,
    MaterialIcons,
    Feather,
    Ionicons,
} from "@expo/vector-icons";

import { FASHION } from "../data/fashion-data";
import { GlobalStyles } from "../constants/styles";
import { currencyFormat } from "../util/currencyFormat";
import { color } from "react-native-reanimated";

const itemsColor = [
    { key: "Green" },
    { key: "White" },
    { key: "Blue" },
    { key: "Red" },
    { key: "Gray" },
    { key: "Yellow" },
    { key: "Magenta" },
    { key: "Purple" },
];
const SizeItem = [
    { key: "S" },
    { key: "XS" },
    { key: "M" },
    { key: "L" },
    { key: "XL" },
    { key: "XXL" },
];

const FashionDetailScreen = ({ route, navigation }) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const fashionId = route.params.fashionId;
    const selectedFashion = FASHION.find((fashion) => fashion.id === fashionId);
    // const renderItemColor = (itemsColor) => (
    //     <Pressable style={styles.itemsColor}>
    //         <Text style={styles.itemText}>{itemsColor.item.key}</Text>
    //     </Pressable>
    // );
    const renderItemColor = (itemsColor) => {
        let isActive = false;
        if (color === itemsColor.item.key) {
            isActive = true;
        }
        return (
            <Pressable
                onPress={() => setColor(itemsColor.item.key)}
                style={[styles.itemsColor, isActive && styles.isActive]}
            >
                <Text style={[styles.itemText, isActive && styles.isActive]}>
                    {itemsColor.item.key}
                </Text>
            </Pressable>
        );
    };
    const renderItemSize = (itemsSize) => {
        let isActive = false;
        if (size === itemsSize.item.key) {
            isActive = true;
        }
        return (
            <Pressable
                onPress={() => setSize(itemsSize.item.key)}
                style={[styles.itemsColor, isActive && styles.isActive]}
            >
                <Text style={[styles.itemText, isActive && styles.isActive]}>
                    {itemsSize.item.key}
                </Text>
            </Pressable>
        );
    };

    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: selectedFashion.imageUrl }}
                />
                <Pressable style={[styles.cartContainer, styles.iconStyle]}>
                    <Feather
                        name="shopping-bag"
                        size={24}
                        color={GlobalStyles.color.primaryColor}
                    />
                </Pressable>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={[styles.backContainer, styles.iconStyle]}
                >
                    <Ionicons
                        name="chevron-back-outline"
                        size={24}
                        color={GlobalStyles.color.primaryColor}
                    />
                </Pressable>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentHeader}>
                    <View style={styles.startContainer}>
                        <FontAwesome
                            style={styles.star}
                            name="star"
                            size={14}
                            color="black"
                        />
                        <FontAwesome
                            style={styles.star}
                            name="star"
                            size={14}
                            color="black"
                        />
                        <FontAwesome
                            style={styles.star}
                            name="star"
                            size={14}
                            color="black"
                        />
                        <FontAwesome
                            style={styles.star}
                            name="star"
                            size={14}
                            color="black"
                        />
                        <FontAwesome
                            style={styles.star}
                            name="star-half"
                            size={14}
                            color="black"
                        />
                        <Text style={styles.textStar}>(11)</Text>
                    </View>
                    <Text style={styles.textReviews}>View All Reviews</Text>
                </View>
                <View style={styles.contentBody}>
                    <Text style={styles.title}>{selectedFashion.title}</Text>
                    <View style={[styles.priceContainer, styles.bottomStyle]}>
                        <View style={styles.priceInContainer}>
                            <Text style={styles.textDiscount}>
                                {currencyFormat(
                                    selectedFashion.price *
                                        (1 - selectedFashion.discount / 100)
                                )}
                            </Text>
                            <Text style={styles.textPrice}>
                                {currencyFormat(selectedFashion.price)}
                            </Text>
                        </View>
                        <Pressable style={styles.favoriteContainer}>
                            <MaterialIcons
                                name="favorite-border"
                                size={24}
                                color={GlobalStyles.color.primaryColor}
                            />
                        </Pressable>
                    </View>
                    <View style={[styles.bottomStyle, { paddingVertical: 20 }]}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                paddingBottom: 10,
                                color: GlobalStyles.color.primaryColor,
                            }}
                        >
                            Color
                        </Text>
                        <FlatList
                            data={itemsColor}
                            renderItem={renderItemColor}
                            keyExtractor={(item) => item.key}
                            horizontal={true} // Đặt thuộc tính horizontal thành true để tạo nằm ngang
                            // showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
                            showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                        />
                    </View>
                    <View style={[styles.bottomStyle, { paddingVertical: 20 }]}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                paddingBottom: 10,
                                color: "#FF2343",
                            }}
                        >
                            Size
                        </Text>
                        <FlatList
                            data={SizeItem}
                            renderItem={renderItemSize}
                            keyExtractor={(item) => item.key}
                            horizontal={true} // Đặt thuộc tính horizontal thành true để tạo nằm ngang
                            // showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
                            showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                        />
                    </View>
                </View>
                <View style={styles.contentFooter}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            paddingBottom: 10,
                        }}
                    >
                        Mô tả sản phẩm
                    </Text>
                    <Text>{selectedFashion.description}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default FashionDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    imageContainer: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: 480,
    },
    cartContainer: {
        position: "absolute",
        top: 50,
        right: 20,
    },
    backContainer: {
        position: "absolute",
        top: 50,
        left: 20,
    },
    iconStyle: {
        padding: 8,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000000b9",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: "#fff",
    },
    contentContainer: {
        width: "100%",
        backgroundColor: "white",
        marginTop: -30,
        borderRadius: 20,
        padding: 20,
    },
    contentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    startContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    star: {
        color: "#F7C932",
        paddingHorizontal: 2,
    },
    textStar: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight: "700",
        color: GlobalStyles.color.subTitleColor,
    },
    textReviews: {
        fontWeight: "bold",
        color: GlobalStyles.color.subTitleColor,
        fontSize: 14,
    },
    contentBody: {
        paddingTop: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "600",
        color: GlobalStyles.color.primaryColor,
        paddingBottom: 10,
    },
    priceContainer: {
        flexDirection: "row",
        paddingBottom: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },
    priceInContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    textDiscount: {
        fontSize: 22,
        paddingRight: 10,
    },
    textPrice: {
        textDecorationLine: "line-through",
    },
    favoriteContainer: {
        padding: 8,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#a00df6ba",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: "white",
    },
    itemsColor: {
        padding: 12,
        marginHorizontal: 7,
        minWidth: 70,
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: GlobalStyles.color.subTitleColor,
        borderStyle: "dashed",
    },
    itemText: {
        fontWeight: "500",
    },
    bottomStyle: {
        borderBottomWidth: 0.2,
        borderBottomColor: GlobalStyles.color.subTitleColor,
    },
    contentFooter: {
        paddingVertical: 20,
    },
    isActive: {
        borderStyle: "solid",
        borderColor: GlobalStyles.color.primaryColor,
        color: GlobalStyles.color.primaryColor,
        fontWeight: "bold",
    },
});
