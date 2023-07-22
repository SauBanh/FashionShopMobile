import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { GlobalStyles } from "../../constants/styles";

const ConnectMore = () => {
    return (
        <View>
            <View>
                <Pressable
                    onPress={() =>
                        Alert.alert(
                            "Đăng nhập bằng Google",
                            "Tính năng này chưa được phát triển"
                        )
                    }
                >
                    <View style={styles.buttonContainer}>
                        <AntDesign name="google" size={30} color="black" />
                        <Text style={styles.titleButton}>Sign With Google</Text>
                    </View>
                </Pressable>
            </View>
            <View>
                <Pressable
                    onPress={() =>
                        Alert.alert(
                            "Đăng nhập bằng Apple",
                            "Tính năng này chưa được phát triển"
                        )
                    }
                >
                    <View style={styles.buttonContainer}>
                        <AntDesign name="apple1" size={30} color="black" />
                        <Text style={styles.titleButton}>Sign With Apple</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default ConnectMore;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        padding: 15,
        marginVertical: 15,
        borderColor: GlobalStyles.color.textColor,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: "center",
        // justifyContent:
    },
    titleButton: {
        // marginLeft: 15,
        textAlign: "center",
        flex: 1,
        fontWeight: "bold",
        fontSize: 18,
    },
});
