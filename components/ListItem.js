import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";

const ListItem = ({character, location, image, theme, description, navigation}) => {

    const { colors } = useTheme()

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
            </View>
        </Pressable>
    )
}

export default ListItem