import {StatusBar, Text, View} from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";


const MapPage = () => {

    console.log('hello')

    return(
        <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />


    )
}

export default MapPage