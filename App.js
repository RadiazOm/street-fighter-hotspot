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

const Tab = createBottomTabNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar/>
        <Tab.Navigator>
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
