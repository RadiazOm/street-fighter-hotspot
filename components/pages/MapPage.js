import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet } from "react-native";
import { AnimatedRegion, Circle, Marker } from "react-native-maps";
import MapView from "react-native-maps";
import * as Location from 'expo-location'
import { Accuracy } from "expo-location";
import myLocationIcon from "../../assets/icons/myLocationIcon.png"
import IconButton from "../IconButton.js";
import { useTheme } from "@react-navigation/native";


const MapPage = ({navigation, route, tracking}) => {

    // State variable for the characterData we will fetch
    const [characterData, setCharacterData] = useState([])

    // JSON object for light mode on the map
    const lightMapStyle = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ebe3cd"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#523735"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f1e6"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#c9b2a6"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#dcd2be"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ae9e90"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#93817c"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#a5b076"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#447530"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f1e6"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fdfcf8"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f8c967"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#e9bc62"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e98d58"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#db8555"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#806b63"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8f7d77"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ebe3cd"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#b9d3c2"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#92998d"
                }
            ]
        }
    ]

    // JSON object for dark mode on the map
    const darkMapStyle = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#263c3f"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6b9a76"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#38414e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#212a37"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9ca5b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#1f2835"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#f3d19c"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2f3948"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#17263c"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#515c6d"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#17263c"
                }
            ]
        }
    ]

    // get current Theme
    const { dark } = useTheme()
    const mapViewRef = useRef(null)
    const [location, setLocation] = useState(null);

    // radius for how inaccurate our tracking is
    const [radius, setRadius] = useState(10)

    // Get location tracking permissions, and subscribe to callback
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted' || !tracking) {
                setLocation(null)
            } else {
                await Location.watchPositionAsync({accuracy: Accuracy.Balanced}, (coords) => {
                    setLocation({"longitude": coords.coords.longitude, "latitude": coords.coords.latitude})
                    setRadius(coords.coords.accuracy)
                });
            }
        })()
    }, [tracking]);


    // Get characterData content from fetch
    useEffect(() => {
        (async () => {

            try {
                const response = await fetch("https://raw.githubusercontent.com/RadiazOm/street-fighter-hotspot/master/characterData.json")
                const json = await response.json()
                setCharacterData(json)
            } catch (e) {
                alert('Could not get character data')
            }
        })();
    }, []);


    // If we have come from a different stack. Animate to the given region (character location)
    if (route.params) {
        console.log(route.params)
        mapViewRef.current.animateToRegion({
            latitude: route.params.latitude,
            longitude: route.params.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
        }, 1000)
    }

    // mapview content
    return(
        <View style={styles.container}>
            <MapView ref={mapViewRef} style={styles.map}
                 initialRegion={{
                     // Rotterdam cooridnates
                     longitude: 4.484650,
                     latitude: 51.917381,
                     latitudeDelta: 0.0020,
                     longitudeDelta: 0.0020
                 }}
                 customMapStyle={dark ? darkMapStyle : lightMapStyle}
            >
                {/* for every character, create a marker for them */}
                {characterData.map((character, index) => (
                    <Marker
                        key={index}
                        coordinate={{latitude: character.latitude, longitude: character.longitude}}
                        title={character.character}
                        description={character.shortDescription}
                        image={character.icon}
                        onCalloutPress={() => {navigation.navigate("Character", {name: character.character, image: character.image, location: {latitude: character.latitude, longitude: character.longitude}, description: character.description, theme: character.theme})}}
                    />
                ))}
                {/* our location using two circles, the first for the predicted location, the second for the inaccuracy */}
                {location ? <Circle center={location} radius={radius} strokeColor={'rgba(0, 0, 255, 0.8)'} fillColor={'rgba(0, 0, 255, 0.1)'}/> : null}
                {location ? <Circle center={location} radius={1} strokeColor={'rgba(255, 255, 255, 1)'} fillColor={'rgba(0, 100, 230, 1)'}/> : null}
            </MapView>

            {/* button for going back to our location */}
            <IconButton style={{position: "absolute", bottom: 20, right: 20}} image={myLocationIcon} onPress={() => {
                if (location) {

                mapViewRef.current.animateToRegion({
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: radius / 10000,
                    longitudeDelta: radius / 10000,
                }, 1000)
                } else {
                    alert("Location permision is denied")
                }}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1
    }
});


export default MapPage