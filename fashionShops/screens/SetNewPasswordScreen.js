import { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import { GlobalStyles } from "../constants/styles";
import ButtonUi from "../components/UI/ButtonUI";
import Title from "../components/UI/Title";

const SetNewPasswordScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.container}>
                <View>
                    <Title fontSize={30}>New Password</Title>
                    <View style={styles.space}>
                        <Text style={styles.textSpace}>
                            Create your new password to Login
                        </Text>
                    </View>
                    <View>
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
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        </View>
                    </View>
                    <ButtonUi
                        onPress={() => navigation.navigate("Login")}
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

export default SetNewPasswordScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.color.backgroundScreenColor,
        // alignItems: "center",
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
