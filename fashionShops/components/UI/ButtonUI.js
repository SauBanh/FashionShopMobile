import { View, Text, Pressable, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

const ButtonUi = ({ children, onPress, fontSize, textColor }) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.labelContainer}>
                    <Text
                        style={[
                            styles.label,
                            { fontSize: fontSize, color: textColor },
                        ]}
                    >
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default ButtonUi;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: GlobalStyles.color.primaryColor,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
    },
    labelContainer: {
        alignContent: "center",
    },
    label: {
        textAlign: "center",
        fontWeight: "bold",
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 10,
    },
});
