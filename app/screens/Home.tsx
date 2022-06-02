import {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    StyleSheet
} from 'react-native';
import { MyBooks } from "../data/books";
// import TopBooks from "../components/TopBooks";

import { FONTS, icons } from '../constants';

interface Props {
    id: number;
    bookName: string;
    bookCover: string;
    rating: number;
    language: string;
    pageNo: number;
    author: string;
    description: string;
    backgroundColor: string;
    navTintColor: string;
    completion: string;
}

const Home = ({ navigation }:any) => {

    const profileData = {
        name: 'Dimola',
    }

    // categories
    const categoriesData = [
        {
            id: 1,
            categoryName: "Best Seller",
            books: [
                MyBooks[0], MyBooks[1], MyBooks[3]
            ]
        },
        {
            id: 2,
            categoryName: "New Releases",
            books: [
                MyBooks[1]
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                MyBooks[2]
            ]
        },
    ]

    const [selectedCategory, setSelectedCategory] = useState(1);

    function renderHeader(profileData:any) {
        return (
            <View style={styles.greetings}>
                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: 24 }}>
                        <Text style={styles.welcome}>Welcome</Text>
                        <Text style={styles.name}>{profileData.name}!</Text>
                    </View>
                </View>
            </View>
        )
    }

    
    const renderMyBookSection = (MyBooks:any) => {
        
        const renderItem = ({ item, index }:{item: Props, index: number}) => {
            return (
                <TouchableOpacity
                style={{
                    flex: 1,
                    marginLeft: index == 0 ? 24 : 0,
                    marginRight: 12
                }}
                onPress={() => navigation.navigate("BookDetail", {
                    book: item
                })}
                >
                    {/* Book Cover */}
                    {/* <TopBooks data="MyBooks" navi="navigation"/> */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={{ paddingHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h2, color: "#fff" }}>My Books</Text>
                </View>

                {/* Books */}
                <View style={{ flex: 1, marginTop: 24 }}>
                    <FlatList
                        data={MyBooks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                    {/* {MyBooks.map(item) => (

                    )} */}
                </View>
            </View>
        )
    }

    const renderCategoryHeader = () => {

        const renderItem = ({ item }:any) => {
            return (
                <TouchableOpacity
                    style={{ marginRight: 24 }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ ...FONTS.h2, color: "#FFFFFF" }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{ ...FONTS.h2, color: "#64676D" }}>{item.categoryName}</Text>
                    }
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1, paddingLeft: 24 }}>
                <FlatList
                    data={categoriesData}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    const renderCategoryData = () => {
        var books:any = []

        let selectedCategoryBooks = categoriesData.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }:any) => {
            return (
                <View style={{ marginVertical: 8 }}>
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => navigation.navigate("BookDetail", {
                            book: item
                        })}
                    >
                        {/* Book Cover */}
                        <Image
                            source={item.bookCover}
                            resizeMode="cover"
                            style={{ width: 100, height: 150, borderRadius: 10 }}
                        />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            {/* Book name and author */}
                            <View>
                                <Text style={{ paddingRight: 24, ...FONTS.h2, color: "#FFFFFF" }}>{item.bookName}</Text>
                                <Text style={{ ...FONTS.h3, color: "#64676D" }}>{item.author}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Bookmark Button */}
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 5, right: 15 }}
                        onPress={() => console.log("Bookmark")}
                    >
                        <Image
                            source={icons.bookmark_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: "#64676D"
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={{ flex: 1, marginTop: 12, paddingLeft: 24 }}>
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Section */}
            <View style={{ height: 100 }}>
                {renderHeader(profileData)}
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: 12 }}>
                {/* Books Section */}
                <View>
                    {renderMyBookSection(MyBooks)}
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: 24 }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1B26" 
    },
    name: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "600",
    },
    welcome: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
    },
    greetings: {
        flex: 1,
        flexDirection: 'row', 
        paddingHorizontal: 24, 
        alignItems: 'center'
    }
  });

export default Home;