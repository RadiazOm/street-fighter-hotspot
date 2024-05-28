import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import ListItem from "./ListItem";
import ryuImage from "../assets/img/ryu.png"
import kenImage from "../assets/img/ken.png"
import chunImage from "../assets/img/chun-li.png"
import guileImage from "../assets/img/guile.png"


const List = () => {
    const data = [
        {
            "character": "Ryu",
            "longitude": 4.47917,
            "latitude": 51.9225,
            "image": ryuImage
        },
        {
            "character": "Ken",
            "longitude": 4.4825,
            "latitude": 51.9250,
            "image": kenImage
        },
        {
            "character": "Chun-Li",
            "longitude": 4.4900,
            "latitude": 51.9175,
            "image": chunImage
        },
        {
            "character": "Guile",
            "longitude": 4.4750,
            "latitude": 51.9275,
            "image": guileImage
        },
        {
            "character": "Blanka",
            "longitude": 4.4850,
            "latitude": 51.9200
        },
        {
            "character": "Zangief",
            "longitude": 4.4800,
            "latitude": 51.9150
        },
        {
            "character": "Dhalsim",
            "longitude": 4.4950,
            "latitude": 51.9230
        },
        {
            "character": "E. Honda",
            "longitude": 4.4875,
            "latitude": 51.9210
        },
        {
            "character": "Lily",
            "longitude": 4.4780,
            "latitude": 51.9185
        },
        {
            "character": "JP",
            "longitude": 4.4810,
            "latitude": 51.9160
        },
        {
            "character": "Cammy",
            "longitude": 4.4890,
            "latitude": 51.9190
        },
        {
            "character": "Marisa",
            "longitude": 4.4760,
            "latitude": 51.9220
        },
        {
            "character": "Ed",
            "longitude": 4.4830,
            "latitude": 51.9205
        },
        {
            "character": "Akuma",
            "longitude": 4.4815,
            "latitude": 51.9180
        },
        {
            "character": "Luke",
            "longitude": 4.4880,
            "latitude": 51.9170
        },
        {
            "character": "Kimberley",
            "longitude": 4.4845,
            "latitude": 51.9240
        },
        {
            "character": "Manon",
            "longitude": 4.4820,
            "latitude": 51.9215
        },
        {
            "character": "Jamie",
            "longitude": 4.4775,
            "latitude": 51.9195
        },
        {
            "character": "Juri",
            "longitude": 4.4860,
            "latitude": 51.9255
        },
        {
            "character": "Dee Jay",
            "longitude": 4.4805,
            "latitude": 51.9185
        }
    ]

    return(
        <View style={{
            display: "flex",
            alignItems: "center"
        }}>
            <FlatList data={data} renderItem={({item}) => <ListItem character={item.character} location={item.latitude + ' ' + item.longitude} image={item.image}/>}/>
        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        display: "flex",
        flexDirection: "row",
        width: '90%',
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: "contain"
    }
});

export default List