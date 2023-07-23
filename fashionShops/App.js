import { StatusBar } from "expo-status-bar";
import { Alert, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";

import FavoritesContextProvider from "./store/context/favorites-context";

import { GlobalStyles } from "./constants/styles";

import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FashionDetailScreen from "./screens/FashionDetailScreen";
import LoginScreen from "./screens/LoginScreen";
import SingupScreen from "./screens/SingupScreen";
import SearchScreen from "./screens/SearchScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import SetNewPasswordScreen from "./screens/SetNewPasswordScreen";
import VerifyCodeScreen from "./screens/VerifyCodeScreen";

import ListProductFashionScreen from "./screens/ListProductFashionScreen";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const BottomTabs = createBottomTabNavigator();

function ActionFashion() {
    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                drawerActiveBackgroundColor: GlobalStyles.color.primaryColor,
                drawerActiveTintColor: "white",
                drawerInactiveTintColor: GlobalStyles.color.primaryColor,
                headerTintColor: GlobalStyles.color.primaryColor,
                headerRight: ({ tintColor }) => (
                    <Ionicons
                        name="exit-outline"
                        size={25}
                        color={tintColor}
                        style={{ marginVertical: 15, marginHorizontal: 15 }}
                        onPress={() => navigation.navigate("Login")}
                    />
                ),
            })}
        >
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="ListProduct"
                component={ListProductFashionScreen}
                options={{
                    title: "Admin",
                    drawerIcon: ({ color, size }) => (
                        <AntDesign name="dashboard" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

function FashionOverview() {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerTintColor: GlobalStyles.color.primaryColor,
                tabBarActiveTintColor: GlobalStyles.color.primaryColor,
                headerRight: ({ tintColor }) => (
                    <Ionicons
                        name="notifications"
                        size={25}
                        color={tintColor}
                        style={{ marginVertical: 15, marginHorizontal: 15 }}
                        onPress={() =>
                            Alert.alert(
                                "Thông báo",
                                "Tính năng này chưa được phát triển"
                            )
                        }
                    />
                ),
            }}
        >
            <BottomTabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Favourite"
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="favorite"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart" color={color} size={size} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="ActionFashion"
                component={ActionFashion}
                options={{
                    headerShown: false,
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        // <Ionicons name="person" color={color} size={size} />
                        <Image
                            source={{
                                uri: "https://i.imgur.com/gVyFQAe.jpg",
                            }}
                            style={{
                                height: size,
                                width: size,
                                borderRadius: size,
                                borderWidth: 1,
                                borderColor: color,
                            }}
                        />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar translucent style="dark" />
            <FavoritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerTintColor: GlobalStyles.color.primaryColor,
                        }}
                    >
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="ForgotPassword"
                            component={ForgotPasswordScreen}
                            options={{
                                headerTitle: "Forgot Password",
                            }}
                        />
                        <Stack.Screen
                            name="VerifyCode"
                            component={VerifyCodeScreen}
                            options={{
                                headerTitle: "Verify Code",
                            }}
                        />
                        <Stack.Screen
                            name="SetNewPassword"
                            component={SetNewPasswordScreen}
                            options={{
                                headerTitle: "Set New Password",
                            }}
                        />
                        <Stack.Screen
                            name="Singup"
                            component={SingupScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="FashionOverview"
                            component={FashionOverview}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="FashionDetail"
                            component={FashionDetailScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </>
    );
}
