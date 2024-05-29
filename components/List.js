import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import ListItem from "./ListItem";
import ryuImage from "../assets/characterImg/ryu.png"
import kenImage from "../assets/characterImg/ken.png"
import chunImage from "../assets/characterImg/chun-li.png"
import guileImage from "../assets/characterImg/guile.png"
import blankaImage from "../assets/characterImg/blanka.png"
import zangiefImage from "../assets/characterImg/zangief.png"
import dhalsimImage from "../assets/characterImg/dhalsim.png"
import hondaImage from "../assets/characterImg/honda.png"
import lilyImage from "../assets/characterImg/lily.png"
import jpImage from "../assets/characterImg/jp.png"
import cammyImage from "../assets/characterImg/cammy.png"
import marisaImage from "../assets/characterImg/marisa.png"
import akumaImage from "../assets/characterImg/akuma.png"
import lukeImage from "../assets/characterImg/luke.png"
import kimberleyImage from "../assets/characterImg/kimberley.png"
import manonImage from "../assets/characterImg/manon.png"
import jamieImage from "../assets/characterImg/jamie.png"
import juriImage from "../assets/characterImg/juri.png"
import deejayImage from "../assets/characterImg/deejay.png"



const List = ({navigation}) => {
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
            "latitude": 51.9200,
            "image": blankaImage
        },
        {
            "character": "Zangief",
            "longitude": 4.4800,
            "latitude": 51.9150,
            "image": zangiefImage
        },
        {
            "character": "Dhalsim",
            "longitude": 4.4950,
            "latitude": 51.9230,
            "image": dhalsimImage
        },
        {
            "character": "E. Honda",
            "longitude": 4.4875,
            "latitude": 51.9210,
            "image": hondaImage
        },
        {
            "character": "Lily",
            "longitude": 4.4780,
            "latitude": 51.9185,
            "image": lilyImage
        },
        {
            "character": "JP",
            "longitude": 4.4810,
            "latitude": 51.9160,
            "image": jpImage
        },
        {
            "character": "Cammy",
            "longitude": 4.4890,
            "latitude": 51.9190,
            "image": cammyImage
        },
        {
            "character": "Marisa",
            "longitude": 4.4760,
            "latitude": 51.9220,
            "image": marisaImage
        },
        {
            "character": "???",
            "longitude": 4.4815,
            "latitude": 51.9180,
            "image": akumaImage
        },
        {
            "character": "Luke",
            "longitude": 4.4880,
            "latitude": 51.9170,
            "image": lukeImage
        },
        {
            "character": "Kimberley",
            "longitude": 4.4845,
            "latitude": 51.9240,
            "image": kimberleyImage
        },
        {
            "character": "Manon",
            "longitude": 4.4820,
            "latitude": 51.9215,
            "image": manonImage
        },
        {
            "character": "Jamie",
            "longitude": 4.4775,
            "latitude": 51.9195,
            "image": jamieImage
        },
        {
            "character": "Juri",
            "longitude": 4.4860,
            "latitude": 51.9255,
            "image": juriImage
        },
        {
            "character": "Dee Jay",
            "longitude": 4.4805,
            "latitude": 51.9185,
            "image": deejayImage
        }
    ]

    return(
        <View>
            <FlatList data={data} renderItem={({item}) => <ListItem character={item.character} location={item.latitude + ' ' + item.longitude} image={item.image} navigation={navigation}/>}/>
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