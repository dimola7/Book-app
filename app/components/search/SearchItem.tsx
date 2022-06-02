import { View, Text, Image, StyleSheet } from "react-native";

const SearchItem = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={item.bookCover}
        // resizeMode="contain"
        style={styles.img}
      />
      <Text style={styles.text}>{item.bookName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        padding: 10,
    },
    img: {
        width: "100%",
        height: 300,
        marginBottom: 10
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",

    }
})

export default SearchItem;
