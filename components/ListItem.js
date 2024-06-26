import {Image, Pressable, StyleSheet, Text, View, TouchableHighlight} from "react-native";
import {useTheme} from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

const ListItem = ({character, location, image, theme, description, navigation, updateList, characterData}) => {

    // get theme colors
    const { colors, dark } = useTheme()

    // state variable for favorite tracking, default false (no one has favorites right off the bat :) )
    const [favorite, setFavorite] = useState(false)

    // check if they do have favorites stored
    useEffect(() => {
        (async () => {

            try {
                let fav = JSON.parse(await AsyncStorage.getItem(character))

                if (typeof fav !== "undefined") {
                    setFavorite(fav)
                }
            } catch (e) {
                console.log("Could not get favorite")
            }
        })()

    }, [characterData]);

    // when u click the button, store favorite in storage and update list to show ur favorite at the top
    const setToggleFavorite = async () => {
        await AsyncStorage.setItem(character, JSON.stringify(!favorite))
        setFavorite(prev => !prev)
        updateList()
    }

    // listItem view
    return(
        <Pressable onPress={() => {navigation.navigate('Character', {name: character, image: image, location: location, theme: theme, description: description})}}>
            <View style={{ display: "flex", margin: 10, flexDirection: "row", width: '90%', marginHorizontal: 20, padding: 10, backgroundColor: colors.card, borderRadius: 10}}>
                <View>
                    <Image style={{ height: 100,  width: 100, resizeMode: "contain" }} source={{ uri: image }}></Image>
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Text style={{color: colors.text}}>{character}</Text>
                    <Text style={{color: colors.text}}>Location: {location.longitude + ' ' + location.latitude}</Text>
                </View>
                <Pressable onPress={setToggleFavorite} style={{position: "absolute", right: 10, top: 10}}>
                    <AntDesign name={favorite ? 'star' : 'staro'} size={30} color={dark ? 'white' : 'black'} />
                </Pressable>
            </View>
        </Pressable>
    )
}

export default ListItem