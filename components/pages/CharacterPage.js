import {Image, Pressable, StatusBar, Text, View} from "react-native";
import {useFonts} from "expo-font";


const CharacterPage = ({navigation, route}) => {

    const {name, image, location, theme, description} = route.params

    console.log(location)

    return(
        <View style={{height: '100%'}}>
            <View style={{backgroundColor: theme, height: 250}}/>
            <Image source={{ uri: image }} style={{position: 'absolute', right: '11%', top: 40, height: 300, width: 300, resizeMode: 'contain'}}></Image>
            <Text style={{fontFamily: 'Renegade-Pursuit', textAlign: 'center', marginTop: 100, fontSize: 40}}>{name}</Text>
            <Text style={{marginHorizontal: 50}}>{description}</Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center', marginTop: 10, fontSize: 20}}>Location</Text>
            <Pressable onPress={() => {navigation.navigate('Map', location)}} style={{backgroundColor: '#eeeeee', marginTop: 20, marginHorizontal: 50, height: 50, display: 'flex', justifyContent: 'center', borderRadius: 10, borderColor: theme, borderWidth: 3}}>
                <Text style={{textAlign: 'center'}}>{location.latitude + ', ' + location.longitude}</Text>
            </Pressable>
        </View>
    )
}

export default CharacterPage