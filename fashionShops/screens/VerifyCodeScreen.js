import { useRef } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

import { GlobalStyles } from "../constants/styles";
import ButtonUi from "../components/UI/ButtonUI";
import Title from "../components/UI/Title";

const VerifyCodeScreen = ({ navigation }) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.container}>
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Title fontSize={30}>Verify Code</Title>
                    <View
                        style={[
                            styles.space,
                            {
                                alignItems: "center",
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.textSpace,
                                {
                                    maxWidth: 200,
                                },
                            ]}
                        >
                            The confirmation code was sent via email
                        </Text>
                    </View>
                    <View style={styles.otpContainer}>
                        <View style={styles.otpBox}>
                            <TextInput
                                style={styles.optText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={firstInput}
                                onChangeText={(text) => {
                                    text && secondInput.current.focus();
                                }}
                            />
                        </View>
                        <View style={styles.otpBox}>
                            <TextInput
                                style={styles.optText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={secondInput}
                                onChangeText={(text) => {
                                    text
                                        ? thirdInput.current.focus()
                                        : !text && firstInput.current.focus();
                                }}
                            />
                        </View>
                        <View style={styles.otpBox}>
                            <TextInput
                                style={styles.optText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={thirdInput}
                                onChangeText={(text) => {
                                    text
                                        ? fourthInput.current.focus()
                                        : !text && secondInput.current.focus();
                                }}
                            />
                        </View>
                        <View style={styles.otpBox}>
                            <TextInput
                                style={styles.optText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={fourthInput}
                                onChangeText={(text) => {
                                    !text && thirdInput.current.focus();
                                }}
                            />
                        </View>
                    </View>
                    <ButtonUi
                        onPress={() => navigation.navigate("SetNewPassword")}
                        fontSize={20}
                        textColor="white"
                    >
                        Verify
                    </ButtonUi>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.color.backgroundScreenColor,
    },
    container: {
        marginHorizontal: 30,
        marginTop: 50,
    },
    otpContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
    },
    otpBox: {
        borderRadius: 5,
        borderColor: GlobalStyles.color.primaryColor,
        borderWidth: 1,
    },
    optText: {
        fontSize: 25,
        color: GlobalStyles.color.primaryColor,
        padding: 0,
        textAlign: "center",
        paddingHorizontal: 18,
        paddingVertical: 10,
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
