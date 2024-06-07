import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import mapIcon from "./assets/icons/mapIcon.png"
import listIcon from "./assets/icons/listIcon.png"
import profileIcon from "./assets/icons/profileIcon.png"

import MapPage from "./components/pages/MapPage";
import ListPage from "./components/pages/ListPage";
import ProfilePage from "./components/pages/ProfilePage";
import MapStackScreen from "./components/stacks/MapStackScreen";
import ListStackScreen from "./components/stacks/ListStackScreen";
import {useFonts} from "expo-font";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator()

export default function App() {

    const [fontsLoaded, fontError] = useFonts({
        "Renegade-Pursuit": require('./assets/font/RenegadePursuit.ttf')
    })

    // TODO: use the context api of react so that the theme dynamically changes when u press the theme button
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        (async () => {
            const dark = JSON.parse(await AsyncStorage.getItem('dark-mode'))
            setDarkMode(dark)
        })()
    }, []);

  return (
      <NavigationContainer>
        <StatusBar/>
        <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor: darkMode ? '#000000' : '#ffffff', tabBarInactiveBackgroundColor: darkMode ? '#000000' : '#ffffff', tabBarActiveTintColor: darkMode ? '#ffffff' : '#000000', tabBarInActiveTintColor: darkMode ? '#ffffff' : '#000000', headerTintColor: darkMode ? '#ffffff' : '#000000', headerStyle: {backgroundColor: darkMode ? '#000000' : '#ffffff'} }}>
            <Tab.Screen options={{
            tabBarIcon: ({size, focused, color}) => {
                return (
                    <Image style={{width: size, height: size}} source={mapIcon}/>
            )
        }, headerShown: false, title: "Map"}} name={"MapStack"} component={MapStackScreen}/>
            <Tab.Screen options={{
            tabBarIcon: ({size, focused, color}) => {
                return (
                    <Image style={{width: size, height: size}} source={listIcon}/>
                )
            }, headerShown: false, title: "List"}} name={"ListStack"} component={ListStackScreen}/>
            <Tab.Screen options={{
            tabBarIcon: ({size, focused, color}) => {
                return (
                    <Image style={{width: size, height: size}} source={profileIcon}/>
                )
            }
        }} name={"Profile"} component={ProfilePage}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
