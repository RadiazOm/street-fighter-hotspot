import {FlatList, StyleSheet, View} from "react-native";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const List = ({navigation}) => {

    // State variable for the characterData we will fetch
    const [characterData, setCharacterData] = useState([])

    // get current Theme
    const { colors } = useTheme()

    // Get characterData content from fetch
    useEffect(() => {
        (async () => {

            try {
                const response = await fetch("https://raw.githubusercontent.com/RadiazOm/street-fighter-hotspot/master/characterData.json")
                const json = await response.json()
                const favoritesList = await orderList(json)
                setCharacterData(favoritesList)
            } catch (e) {
                console.log('could not get character data')
            }
        })()
    }, [])


    // order list Favorites on top. not Favorites on bottom
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


    // When u click on a favorite button, reorder the list
    const updateList = async () => {
        const favoritesList = await orderList(characterData)
        setCharacterData([...favoritesList])
    }

    // List view
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

export default List