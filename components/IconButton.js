import {Image, Pressable, StyleSheet, Text, View} from "react-native";

const IconButton = ({image, onPress, style}) => {

    return(
        <Pressable style={style} onPress={onPress}>
              <View>
                  <Image style={styles.image} source={image}></Image>
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

export default IconButton