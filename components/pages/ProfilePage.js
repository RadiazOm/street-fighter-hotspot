import {Image, StatusBar, Switch, Text, View} from "react-native";
import profilePlaceholder from "../../assets/icons/profilePlaceholder.png"
import {useEffect, useState} from "react";
import * as Location from "expo-location";
import { Linking } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



const ProfilePage = ({navigation}) => {

    const [tracking, setTracking] = useState(false)
    const [notif, setNotif] = useState(false)
    const [dark, setDark] = useState(false)

    useEffect(() => {
        (async () => {
            let { status } = await Location.getForegroundPermissionsAsync()
            if (status === 'granted') {
                setTracking(true)
            }
            const darkMode = JSON.parse(await AsyncStorage.getItem('dark-mode'))
            setDark(darkMode)
        })()
    }, []);

    const toggleTracking = async () => {
        if (tracking === true) {
            await Linking.openSettings()
            return;
        }
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied')
            return;
        }

        setTracking(prev => !prev)
    }

    const toggleNotif = () => {
        setNotif(prev => !prev)
    }

    const toggleDark = async () => {
        try {
            await AsyncStorage.setItem('dark-mode', JSON.stringify(!dark))
        } catch (e) {
            alert(e)
        }
        setDark(prev => !prev)
    }



    return (
        <View style={{backgroundColor: dark ? '#222222' : '#efefef', height: '100%'}}>
            <View style={{backgroundColor: 'blue', height: 250}}/>
            <Image source={profilePlaceholder} style={{position: 'absolute', right: '24%', top: 70, height: 200, width: 200, resizeMode: 'cover', borderRadius: 100}}></Image>
            <Text style={{fontFamily: 'Renegade-Pursuit', textAlign: 'center', marginTop: 60, fontSize: 40, color: dark ? '#ffffff' : '#000000'}}>Jeffrey</Text>
            <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 20}}>
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: dark ? '#ffffff' : '#000000'}}>Lvl</Text>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: dark ? '#ffffff' : '#000000'}}>27</Text>
                </View>
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: dark ? '#ffffff' : '#000000'}}>Fights</Text>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: dark ? '#ffffff' : '#000000'}}>142</Text>
                </View>
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: dark ? '#ffffff' : '#000000'}}>Master</Text>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: dark ? '#ffffff' : '#000000'}}>Luke</Text>
                </View>
            </View>
            <View style={{marginHorizontal: 50, marginTop: 30}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{color: dark ? '#ffffff' : '#000000'}}>Allow location tracking</Text>
                    <Switch
                        onValueChange={toggleTracking}
                        value={tracking}
                    />
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{color: dark ? '#ffffff' : '#000000'}}>Send notifications</Text>
                    <Switch
                        onValueChange={toggleNotif}
                        value={notif}
                    />
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{color: dark ? '#ffffff' : '#000000'}}>Dark mode</Text>
                    <Switch
                        trackColor={{false: '#999999', true: '#007BFF'}}
                        onValueChange={toggleDark}
                        value={dark}
                    />
                </View>
            </View>
        </View>
    )
}

export default ProfilePage