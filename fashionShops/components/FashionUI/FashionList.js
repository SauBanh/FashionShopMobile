import { View, FlatList, StyleSheet } from "react-native";

import { FASHION } from "../../data/fashion-data";
import FashionItem from "./FashionItem";

function renderFASHIONItem(itemData) {
    const item = itemData.item;
    const fashionItemProps = {
        id: item.id,
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
        description: item.description,
        discount: item.discount,
    };
    return <FashionItem {...fashionItemProps} />;
}

const FashionList = () => {
    return (
        <View style={styles.rootContainer}>
            <FlatList
                data={FASHION}
                keyExtractor={(item) => item.id}
                renderItem={renderFASHIONItem}
                numColumns={2}
                style={styles.container}
            />
        </View>
    );
};

export default FashionList;

const styles = StyleSheet.create({
    rootContainer: {
        // backgroundColor: "#fff",
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        marginVertical: 8,
        paddingHorizontal: 8,
    },
});
