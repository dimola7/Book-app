import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { useState, useEffect, ChangeEvent } from "react";
import { MyBooks } from "../data/books";
import SearchItem from "../components/search/SearchItem";

const Search = () => {
  const [data, setData] = useState(MyBooks);

  const item = ({ item }: any) => {
    return (
      <View>
        <SearchItem item={item}/>
      </View>
    );
  };

  const handleSearch = (input: any) => {
    let searchData = MyBooks.filter((item) => {
      return item.bookName.toLowerCase().includes(input.toLowerCase());
    });
    setData(searchData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Find a Book</Text>
      <TextInput
        style={styles.input}
        onChangeText={(input) => {
          handleSearch(input);
        }}
        placeholder="search..."
      />
      <View style={{display: "flex", justifyContent: "center", width: "100%", paddingHorizontal: 100}} >
      <FlatList
        style={{display: "flex", marginBottom: 150, width: "100%"}}
        contentContainerStyle={{display: "flex", justifyContent: "center", }}
        data={data}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1B26",
    flex: 1,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
    marginTop: 20,
  },
  input: {
    height: 60,
    margin: 15,
    fontSize: 20,
    borderWidth: 1,
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  flex: {
    display: "flex",
  },
  // results: {
    // display: "flex",
    // justifyContent: "center",
  // }
});

export default Search;
