import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";

import FashionList from "../components/FashionUI/FashionList";
import { GlobalStyles } from "../constants/styles";
import { FASHION } from "../data/fashion-data";
import Title from "../components/UI/Title";

const FavouriteScreen = () => {
    const favoritesFashionsCtx = useContext(FavoritesContext);
    const favoritesFashions = FASHION.filter((meal) =>
        favoritesFashionsCtx.ids.includes(meal.id)
    );
    if (favoritesFashions.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Title fontSize={20}>You have no favorites fashion yet.</Title>
            </View>
        );
    }
    return (
        <View
            style={{
                backgroundColor: GlobalStyles.color.backgroundContentColor,
            }}
        >
            <FashionList items={favoritesFashions} />
        </View>
    );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.color.backgroundContentColor,
    },
});
