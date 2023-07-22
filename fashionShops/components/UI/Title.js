import { Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

const Title = ({ children, fontSize }) => {
    return (
        <Text style={[styles.title, { fontSize: fontSize }]}>{children}</Text>
    );
};

export default Title;

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontWeight: "bold",
        color: GlobalStyles.color.primaryColor,
    },
});
