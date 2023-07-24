import { View, FlatList, StyleSheet } from "react-native";
import FashionItem from "./FashionItem";

function renderFASHIONItem(itemData) {
    const item = itemData.item;
    if (item.empty) {
        return <View style={styles.hidden} />;
    }
    const fashionItemProps = {
        id: item.id,
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
        // description: item.description,
        discount: item.discount,
    };

    return <FashionItem {...fashionItemProps} />;
}

const FashionList = ({ items }) => {
    if (items.length % 2 !== 0) {
        items.push({ id: "empty", title: "", empty: true });
    }

    return (
        <View style={styles.rootContainer}>
            <FlatList
                data={items}
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
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        marginVertical: 8,
        paddingHorizontal: 8,
    },
    hidden: {
        flex: 1,
        margin: 8,
        padding: 8,
        flex: 1,
        backgroundColor: "transparent",
    },
});
