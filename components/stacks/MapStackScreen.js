
import CharacterPage from "../pages/CharacterPage";
import {createStackNavigator} from "@react-navigation/stack";
import MapPage from "../pages/MapPage";

const MapStack = createStackNavigator()

const MapStackScreen = ({route, tracking}) => {

    return (
        <MapStack.Navigator>
            <MapStack.Screen name={"Map"}>
                {(props) => <MapPage {...props} tracking={tracking}/>}
            </MapStack.Screen>
            <MapStack.Screen name={"Character"} component={CharacterPage}/>
        </MapStack.Navigator>
    )
}


export default MapStackScreen