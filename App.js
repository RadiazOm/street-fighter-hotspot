import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfilePage from "./components/pages/ProfilePage";
import MapStackScreen from "./components/stacks/MapStackScreen";
import ListStackScreen from "./components/stacks/ListStackScreen";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator()


export default function App() {

    // Loading the font
    useFonts({
        "Renegade-Pursuit": require('./assets/font/RenegadePursuit.ttf')
    })

    // Darkmode color theme
    const darkMode = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            card: '#010409',
            background: '#0D1117'
        },
    };

    // useState variable for which theme u are using
    const [theme, setTheme] = useState(useColorScheme() ? darkMode : DefaultTheme)

    // setting variable to see if u want location tracking or not
    const [locationTracking, setLocationtracking] = useState(false)

    // get the necessary values from asyncstorage to apply to our state variables
    useEffect(() => {
        (async () => {
            const dark = JSON.parse(await AsyncStorage.getItem('dark-mode'))
            const tracking = JSON.parse(await AsyncStorage.getItem('tracking'))

            if (typeof tracking !== "undefined") {
                setLocationtracking(tracking)
            }

            if (typeof dark !== "undefined") {
                setTheme(dark ? darkMode : DefaultTheme)
            }
        })()
    }, []);

    // main navigation container (bottom tabs)
  return (
      <NavigationContainer theme={theme}>
        <StatusBar/>
        <Tab.Navigator>
            <Tab.Screen options={{
            tabBarIcon: () => {
                return (
                    <FontAwesome name="map-marker" size={24} color={theme.dark ? 'white' : 'black'} />
                )
                // these variables are here because of the second stack we have, otherwise we would have double headers
            }, headerShown: false, title: "Map"}} name={"MapStack"}>
                {(props) => <MapStackScreen {...props} tracking={locationTracking}/>}
            </Tab.Screen>

            <Tab.Screen options={{
            tabBarIcon: () => {
                return (
                        <FontAwesome name="list" size={24} color={theme.dark ? 'white' : 'black'} />
                    )
            }, headerShown: false, title: "List"}} name={"ListStack"} component={ListStackScreen}/>

            <Tab.Screen options={{
            tabBarIcon: () => {
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

