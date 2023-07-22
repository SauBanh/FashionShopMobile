import { View } from "react-native";

import FashionList from "../components/FashionUI/FashionList";
import { GlobalStyles } from "../constants/styles";

const HomeScreen = () => {
    return (
        <View
            style={{
                backgroundColor: GlobalStyles.color.backgroundContentColor,
            }}
        >
            <FashionList />
        </View>
    );
};

export default HomeScreen;
