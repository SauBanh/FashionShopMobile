import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Alert,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import { GlobalStyles } from "../constants/styles";
import ButtonUi from "../components/UI/ButtonUI";
import Title from "../components/UI/Title";
import ConnectMore from "../components/ConnectMore/ConnectMore";

const LoginScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);
    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.container}>
                <View>
                    <Title fontSize={30}>Hello</Title>
                    <View style={styles.space}>
                        <Text style={styles.textSpace}>
                            Welcome Back Yo've veen missed
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
                                onPress={() => setShowPassword(!showPassword)}
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
                        onPress={() => navigation.navigate("FashionOverview")}
                        fontSize={20}
                        textColor="white"
                    >
                        Sign In
                    </ButtonUi>
                    <View style={styles.space}>
                        <Text style={styles.textSpace}>or</Text>
                    </View>
                    <ConnectMore />
                    <View style={styles.space}>
                        <Text
                            style={styles.textRetister}
                            onPress={() => navigation.navigate("Singup")}
                        >
                            Don't Have Account?
                            <Text style={styles.retister}> Sign Up</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: GlobalStyles.color.backgroundScreenColor,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        marginHorizontal: 30,
        backgroundColor: "#fff",
        marginTop: 70,
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
        marginLeft: 15,
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
