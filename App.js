import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MapPage from "./components/pages/MapPage";
import ListPage from "./components/pages/ListPage";
import ProfilePage from "./components/pages/ProfilePage";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Tab.Navigator>
        <Tab.Screen name={"Map"} component={MapPage}/>
        <Tab.Screen name={"List"} component={ListPage}/>
        <Tab.Screen name={"Profile"} component={ProfilePage}/>
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
