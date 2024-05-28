import React, {useState, useEffect, useRef} from 'react';
import {StatusBar, Text, View, StyleSheet, Image} from "react-native";
import {AnimatedRegion, Circle, Marker, Animated} from "react-native-maps";
import MapView from "react-native-maps";
import * as Location from 'expo-location'
import {Accuracy} from "expo-location";
import myLocationIcon from "../../assets/icons/myLocationIcon.png"
import ryuIcon from "../../assets/characterImg/ryuIcon.png";
import kenIcon from "../../assets/characterImg/kenIcon.png";
import chunIcon from "../../assets/characterImg/chunIcon.png";
import guileIcon from "../../assets/characterImg/guileIcon.png";
import blankaIcon from "../../assets/characterImg/blankaIcon.png";
import zangiefIcon from "../../assets/characterImg/zangiefIcon.png";
import dhalsimIcon from "../../assets/characterImg/dhalsimIcon.png";
import hondaIcon from "../../assets/characterImg/hondaIcon.png";
import lilyIcon from "../../assets/characterImg/lilyIcon.png";
import jpIcon from "../../assets/characterImg/jpIcon.png";
import cammyIcon from "../../assets/characterImg/cammyIcon.png";
import marisaIcon from "../../assets/characterImg/marisaIcon.png";
import akumaIcon from "../../assets/characterImg/akumaIcon.png";
import lukeIcon from "../../assets/characterImg/lukeIcon.png";
import kimberleyIcon from "../../assets/characterImg/kimberleyIcon.png";
import manonIcon from "../../assets/characterImg/manonIcon.png";
import jamieIcon from "../../assets/characterImg/jamieIcon.png";
import juriIcon from "../../assets/characterImg/juriIcon.png";
import deejayIcon from "../../assets/characterImg/deejayIcon.png";
import IconButton from "../IconButton.js";



const MapPage = () => {

    const data = [
        {
            "character": "Ryu",
            "longitude": 4.47917,
            "latitude": 51.9225,
            "image": ryuIcon,
            "description": "Wandering martial artist, master of the Hadouken."
        },
        {
            "character": "Ken",
            "longitude": 4.4825,
            "latitude": 51.9250,
            "image": kenIcon,
            "description": "Fiery martial artist, Ryu's best friend."
        },
        {
            "character": "Chun-Li",
            "longitude": 4.4900,
            "latitude": 51.9175,
            "image": chunIcon,
            "description": "Interpol officer with powerful kicks."
        },
        {
            "character": "Guile",
            "longitude": 4.4750,
            "latitude": 51.9275,
            "image": guileIcon,
            "description": "U.S. Air Force major, master of Sonic Boom."
        },
        {
            "character": "Blanka",
            "longitude": 4.4850,
            "latitude": 51.9200,
            "image": blankaIcon,
            "description": "Wild man from Brazil, uses electric attacks."
        },
        {
            "character": "Zangief",
            "longitude": 4.4800,
            "latitude": 51.9150,
            "image": zangiefIcon,
            "description": "Russian wrestler, known as the Red Cyclone."
        },
        {
            "character": "Dhalsim",
            "longitude": 4.4950,
            "latitude": 51.9230,
            "image": dhalsimIcon,
            "description": "Yoga master from India, stretches limbs."
        },
        {
            "character": "E. Honda",
            "longitude": 4.4875,
            "latitude": 51.9210,
            "image": hondaIcon,
            "description": "Sumo wrestler aiming for global recognition."
        },
        {
            "character": "Lily",
            "longitude": 4.4780,
            "latitude": 51.9185,
            "image": lilyIcon,
            "description": "New fighter inspired by T. Hawk."
        },
        {
            "character": "JP",
            "longitude": 4.4810,
            "latitude": 51.9160,
            "image": jpIcon,
            "description": "Mysterious fighter with unique techniques."
        },
        {
            "character": "Cammy",
            "longitude": 4.4890,
            "latitude": 51.9190,
            "image": cammyIcon,
            "description": "British special forces operative."
        },
        {
            "character": "Marisa",
            "longitude": 4.4760,
            "latitude": 51.9220,
            "image": marisaIcon,
            "description": "Gladiator-inspired fighter with powerful attacks."
        },
        {
            "character": "???",
            "longitude": 4.4815,
            "latitude": 51.9180,
            "image": akumaIcon,
            "description": "Powerful martial artist."
        },
        {
            "character": "Luke",
            "longitude": 4.4880,
            "latitude": 51.9170,
            "image": lukeIcon,
            "description": "MMA-inspired fighter, ambitious and strong."
        },
        {
            "character": "Kimberley",
            "longitude": 4.4845,
            "latitude": 51.9240,
            "image": kimberleyIcon,
            "description": "Vibrant ninja with modern techniques."
        },
        {
            "character": "Manon",
            "longitude": 4.4820,
            "latitude": 51.9215,
            "image": manonIcon,
            "description": "Ballet dancer blending martial arts."
        },
        {
            "character": "Jamie",
            "longitude": 4.4775,
            "latitude": 51.9195,
            "image": jamieIcon,
            "description": "Practitioner of drunken boxing."
        },
        {
            "character": "Juri",
            "longitude": 4.4860,
            "latitude": 51.9255,
            "image": juriIcon,
            "description": "Thrill-seeking Taekwondo expert."
        },
        {
            "character": "Dee Jay",
            "longitude": 4.4805,
            "latitude": 51.9185,
            "image": deejayIcon,
            "description": "Cheerful Jamaican kickboxer."
        }
    ]

    const mapStyle = [
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
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
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
            "featureType": "poi.business",
            "stylers": [
                {
                    "visibility": "off"
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
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
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
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
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

    const mapViewRef = useRef(null)
    const [location, setLocation] = useState({"longitude": 4.484650, "latitude": 51.917381});
    const [radius, setRadius] = useState(10)
    const [region, setRegion] = useState(new AnimatedRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0020,
        longitudeDelta: 0.0020
    }))
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            await Location.watchPositionAsync({accuracy: Accuracy.BestForNavigation}, (coords) => {
                setLocation({"longitude": coords.coords.longitude, "latitude": coords.coords.latitude})
                setRadius(coords.coords.accuracy)
            });

        })();
    }, []);

    return(
        <View style={styles.container}>
            <MapView ref={mapViewRef} style={styles.map}
                 initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0020,
                    longitudeDelta: 0.0020,
                 }}
                 region={region}
                 customMapStyle={mapStyle}
            >
                {data.map((character, index) => (
                    <Marker
                        key={index}
                        coordinate={{latitude: character.latitude, longitude: character.longitude}}
                        title={character.character}
                        description={character.description}
                        image={character.image}
                    />
                ))}
                <Circle center={location} radius={radius} strokeColor={'rgba(0, 0, 255, 0.8)'} fillColor={'rgba(0, 0, 255, 0.1)'}/>
                <Circle center={location} radius={1} strokeColor={'rgba(255, 255, 255, 1)'} fillColor={'rgba(0, 100, 230, 1)'}/>
            </MapView>
            <IconButton style={{position: "absolute", bottom: 10, right: 10}} image={myLocationIcon} onPress={() => {
                mapViewRef.current.animateToRegion({
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: radius / 10000,
                    longitudeDelta: radius / 10000,
                }, 1000)}}/>
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