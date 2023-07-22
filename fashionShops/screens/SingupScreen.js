import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import { GlobalStyles } from "../constants/styles";
import ButtonUi from "../components/UI/ButtonUI";
import Title from "../components/UI/Title";
import ConnectMore from "../components/ConnectMore/ConnectMore";

const LoginScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);

    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView contentContainerStyle={styles.rootContainer}>
                <View style={styles.container}>
                    <View>
                        <Title fontSize={30}>Create an account</Title>
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
                            <View style={styles.inputContainer}>
                                <Feather
                                    name="lock"
                                    size={24}
                                    color={GlobalStyles.color.primaryColor}
                                />
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Your password"
                                    secureTextEntry={showPassword}
                                />
                                <Feather
                                    name={showPassword ? "eye-off" : "eye"}
                                    size={24}
                                    color={GlobalStyles.color.primaryColor}
                                    onPress={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Feather
                                    name="lock"
                                    size={24}
                                    color={GlobalStyles.color.primaryColor}
                                />
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Comfirm password"
                                    secureTextEntry={showPassword}
                                />
                                <Feather
                                    name={showPassword ? "eye-off" : "eye"}
                                    size={24}
                                    color={GlobalStyles.color.primaryColor}
                                    onPress={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />
                            </View>
                        </View>
                        <View style={styles.space}>
                            <Text
                                style={[
                                    styles.textSpace,
                                    {
                                        color: "#000",
                                        fontSize: 15,
                                        fontWeight: "bold",
                                    },
                                ]}
                                onPress={() =>
                                    navigation.navigate("ForgotPassword")
                                }
                            >
                                Forgot Password?
                            </Text>
                        </View>
                        <ButtonUi
                            onPress={() => navigation.navigate("Login")}
                            fontSize={20}
                            textColor="white"
                        >
                            Sign Up
                        </ButtonUi>
                        <View style={styles.space}>
                            <Text style={styles.textSpace}>or</Text>
                        </View>
                        <ConnectMore />
                        <View style={styles.space}>
                            <Text
                                style={styles.textRetister}
                                onPress={() => navigation.navigate("Login")}
                            >
                                Already have an account?
                                <Text style={styles.retister}> Sign In</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.color.backgroundScreenColor,
    },
    container: {
        flex: 1,
        // alignItems: "center",
        marginHorizontal: 30,
        backgroundColor: "#fff",
        marginTop: 40,
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
    textRetister: {
        fontSize: 14,
        textAlign: "center",
        color: GlobalStyles.color.subTitleColor,
    },
    retister: {
        color: GlobalStyles.color.primaryColor,
    },
});
