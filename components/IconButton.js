import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTheme } from "@react-navigation/native";


// view for back to my location button
const IconButton = ({onPress, style}) => {

    const { dark } = useTheme()

    return(
        <Pressable style={style} onPress={onPress}>
              <View>
                  <FontAwesome6 name="location-crosshairs" size={70} color={dark ? 'white' : 'black'} />
              </View>
        </Pressable>
    )
}

export default IconButton