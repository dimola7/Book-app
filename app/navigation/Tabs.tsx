import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Bookmarks from "../screens/Bookmarks";
import Settings from "../screens/Settings";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#1E1B26",
            height: "10%",
          },
          headerStyle: {backgroundColor: "#1E1B26"},
          headerTitleStyle: {color: "#fff"},
          
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case "Home":
                return (
                  <>
                    <Icon name={"home"} size={30} color={"#fff"}/>
                  </>
                );

              case "Search":
                return (
                  <>
                    <Icon name={"search"} size={30} color={"#fff"}/>
                  </>
                );

              case "Bookmarks":
                return (
                  <>
                    <Icon name={"bookmark-o"} size={30} color={"#fff"}/>
                  </>
                );

              case "Setting":
                return (
                  <>
                    <Icon name={"cog"} size={30} color={"#fff"}/>
                  </>
                );
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Bookmarks" component={Bookmarks} />
        <Tab.Screen name="Setting" component={Settings} />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
