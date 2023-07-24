import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

const Card = ({ children, style }) => {
    return <View style={[styles.rootcontainer, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    rootcontainer: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 15,
        overflow: "hidden",
        elevation: 4,
        // shadowColor: "#a200ff",
        shadowColor: GlobalStyles.color.primaryColor,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
});
