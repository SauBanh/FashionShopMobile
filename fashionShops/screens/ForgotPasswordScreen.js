import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { GlobalStyles } from "../constants/styles";
import ButtonUi from "../components/UI/ButtonUI";
import Title from "../components/UI/Title";

const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.container}>
                <View>
                    <Title fontSize={30}>Forgot Password?</Title>
                    <View style={styles.space}>
                        <Text style={styles.textSpace}>
                            Type your email, we will send your verivication code
                            via email
                        </Text>
                    </View>
                    <View>
                        <View style={styles.inputContainer}>
                            <MaterialCommunityIcons
                                name="email-outline"
                                size={24}
                                color={GlobalStyles.color.primaryColor}
                            />
                            <TextInput
                                style={styles.inputText}
                                keyboardType="email-address"
                                placeholder="Your email address"
                            />
                        </View>
                    </View>
                    <ButtonUi
                        onPress={() => navigation.navigate("VerifyCode")}
                        fontSize={20}
                        textColor="white"
                    >
                        Reset Password
                    </ButtonUi>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.color.backgroundScreenColor,
    },
    container: {
        marginHorizontal: 30,
        marginTop: 50,
    },
    inputContainer: {
        flexDirection: "row",
        padding: 15,
        marginVertical: 20,
        backgroundColor: "#f5f5f5",
        justifyContent: "space-between",
        borderRadius: 10,
    },
    inputText: {
        fontSize: 20,
        flex: 1,
        marginHorizontal: 15,
        // color: GlobalStyles.color.primaryColor,
    },
    space: {
        marginVertical: 20,
    },
    textSpace: {
        textAlign: "center",
        fontSize: 18,
        color: GlobalStyles.color.subTitleColor,
    },
});
