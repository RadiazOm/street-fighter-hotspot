import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import mapIcon from "./assets/icons/mapIcon.png"
import listIcon from "./assets/icons/listIcon.png"
import profileIcon from "./assets/icons/profileIcon.png"
import ProfilePage from "./components/pages/ProfilePage";
import MapStackScreen from "./components/stacks/MapStackScreen";
import ListStackScreen from "./components/stacks/ListStackScreen";
import {useFonts} from "expo-font";
import {createContext, useContext, useEffect, useReducer, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default function App() {

    const [fontsLoaded, fontError] = useFonts({
        "Renegade-Pursuit": require('./assets/font/RenegadePursuit.ttf')
    })

    const darkMode = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            card: '#010409',
            background: '#0D1117'
        },
    };

    const [theme, setTheme] = useState(useColorScheme() ? darkMode : DefaultTheme)
    const [locationTracking, setLocationtracking] = useState(false)

    useEffect(() => {
        (async () => {
            const dark = JSON.parse(await AsyncStorage.getItem('dark-mode'))
            const tracking = JSON.parse(await  AsyncStorage.getItem('tracking'))

            if (typeof tracking !== "undefined") {
                setLocationtracking(tracking)
            }

            if (typeof dark !== "undefined") {
                setTheme(dark ? darkMode : DefaultTheme)
            }
        })()
    }, []);

  return (
      <NavigationContainer theme={theme}>
        <StatusBar/>
        <Tab.Navigator>
            <Tab.Screen options={{
            tabBarIcon: ({size, focused, color}) => {
                return (
                    <FontAwesome name="map-marker" size={24} color={theme.dark ? 'white' : 'black'} />
            )
        }, headerShown: false, title: "Map"}} name={"MapStack"}>
                {(props) => <MapStackScreen {...props} tracking={locationTracking}/>}
            </Tab.Screen>
            <Tab.Screen options={{
            tabBarIcon: ({size, focused, color}) => {
                return (
                    <FontAwesome name="list" size={24} color={theme.dark ? 'white' : 'black'} />
                )
            }, headerShown: false, title: "List"}} name={"ListStack"} component={ListStackScreen}/>
            <Tab.Screen options={{
            tabBarIcon: ({size, focused, color}) => {
                return (
                    <Ionicons name="person-circle-sharp" size={30} color={theme.dark ? 'white' : 'black'} />
                )
            }
            }} name={"Profile"}>
                {(props) => <ProfilePage {...props} setTheme={setTheme} setLocTracking={setLocationtracking}/>}
            </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

