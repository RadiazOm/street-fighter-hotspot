
import CharacterPage from "../pages/CharacterPage";
import {createStackNavigator} from "@react-navigation/stack";
import MapPage from "../pages/MapPage";

const MapStack = createStackNavigator()

const MapStackScreen = () => {

    return (
        <MapStack.Navigator>
            <MapStack.Screen name={"Map"} component={MapPage}/>
            <MapStack.Screen name={"Character"} component={CharacterPage}/>
        </MapStack.Navigator>
    )
}


export default MapStackScreen