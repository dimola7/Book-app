import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    Pressable
  } from 'react-native';
  
  const Settings = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Settings</Text>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1E1B26" 
    },
  })
  
  export default Settings;