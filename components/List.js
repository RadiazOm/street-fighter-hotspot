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
import {useEffect, useState} from "react";
import {useTheme} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";



const List = ({navigation}) => {

    const [characterData, setCharacterData] = useState([])

    const { colors } = useTheme()

    useEffect(() => {
        (async () => {

            try {
                const response = await fetch("https://raw.githubusercontent.com/RadiazOm/street-fighter-hotspot/master/characterData.json")
                const json = await response.json()
                const favoritedList = await orderList(json)
                setCharacterData(favoritedList)
            } catch (e) {
                console.log('could not get character data')
            }
        })()
    }, [])

    useEffect(() => {
        if (characterData.length !== 0) {
            console.log("listening for characterdata changes: " + characterData[0].character)
        }
    }, [characterData]);

    const orderList = async (list) => {
        let mutatedArray = list
        for (const character of mutatedArray) {
            if (JSON.parse(await AsyncStorage.getItem(character.character))) {
                mutatedArray.splice(mutatedArray.indexOf(character), 1)
                mutatedArray.unshift(character)
            }
        }
        return mutatedArray
    }

    const updateList = async () => {
        const favoritedList = await orderList(characterData)
        console.log(favoritedList[0].character)
        setCharacterData([...favoritedList])
    }

    return(
        <View style={{backgroundColor: colors.background}}>
            <FlatList data={characterData} renderItem={({item}) =>
                <ListItem
                    character={item.character}
                    location={{"longitude": item.longitude, "latitude": item.latitude}}
                    image={item.image} theme={item.theme}
                    description={item.description}
                    navigation={navigation}
                    updateList={updateList}
                    characterData={characterData}
                />}
            />
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