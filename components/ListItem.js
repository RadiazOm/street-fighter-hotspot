import {Image, Pressable, StyleSheet, Text, View} from "react-native";

const ListItem = ({character, location, image, navigation}) => {

    return(
        <Pressable onPress={() => {navigation.navigate('Character', {name: character, image: image, location: {latitude: location, longitude: location}})}}>
            <View style={styles.box}>
                <View>
                    <Image style={styles.image} source={image}></Image>
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Text>{character}</Text>
                    <Text>Location: {location}</Text>
                </View>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    box: {
        display: "flex",
        margin: 10,
        flexDirection: "row",
        width: '90%',
        marginHorizontal: 20,
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

export default ListItem