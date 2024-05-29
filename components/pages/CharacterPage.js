import {Image, StatusBar, Text, View} from "react-native";


const CharacterPage = ({route}) => {

    const {name, image, location} = route.params

    return(
        <View>
            <Text>
                {name}
            </Text>
            <Image source={image}/>
            <Text>
                {location.latitude + ", " + location.longitude}
            </Text>
        </View>
    )
}

export default CharacterPage