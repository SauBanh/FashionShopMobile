import { View } from "react-native";

import { FASHION } from "../data/fashion-data";

import FashionList from "../components/FashionUI/FashionList";
import { GlobalStyles } from "../constants/styles";

const HomeScreen = () => {
    return (
        <View
            style={{
                backgroundColor: GlobalStyles.color.backgroundContentColor,
            }}
        >
            <FashionList items={FASHION} />
        </View>
    );
};

export default HomeScreen;
