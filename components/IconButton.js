import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {useTheme} from "@react-navigation/native";

const IconButton = ({image, onPress, style}) => {

    const { dark } = useTheme()

    return(
        <Pressable style={style} onPress={onPress}>
              <View>
                  <FontAwesome6 name="location-crosshairs" size={70} color={dark ? 'white' : 'black'} />
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