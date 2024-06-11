import {Image, StatusBar, Switch, Text, View} from "react-native";
import profilePlaceholder from "../../assets/icons/profilePlaceholder.png"
import {useContext, useEffect, useState} from "react";
import * as Location from "expo-location";
import { Linking } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DefaultTheme, useTheme} from "@react-navigation/native";
import {ThemeContext} from "../contexts/ThemeContext"



const ProfilePage = ({navigation, setTheme, setLocTracking}) => {

    const { colors } = useTheme()

    const themes = useContext(ThemeContext)

    const [tracking, setTracking] = useState(false)
    const [notif, setNotif] = useState(false)
    const [dark, setDark] = useState(false)

    useEffect(() => {
        (async () => {
            const darkMode = JSON.parse(await AsyncStorage.getItem('dark-mode'))
            const tracking = JSON.parse(await  AsyncStorage.getItem('tracking'))

            if (typeof tracking !== "undefined") {
                setTracking(tracking)
            }

            if (typeof dark !== "undefined") {
                console.log('setting dark')
                setDark(darkMode)
            }
        })()
    }, []);

    useEffect(() => {
        setTheme(dark ? themes.dark : themes.light)
    }, [dark]);

    useEffect(() => {
        setLocTracking(tracking)
    }, [tracking]);

    const toggleTracking = async () => {
        try {
            await AsyncStorage.setItem('tracking', JSON.stringify(!tracking))
        } catch (e) {
            alert(e)
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
        console.log('setting dark')
        setDark(prev => !prev)
    }



    return (
        <View style={{backgroundColor: colors.background, height: '100%'}}>
            <View style={{backgroundColor: 'blue', height: 250}}/>
            <Image source={profilePlaceholder} style={{position: 'absolute', right: '24%', top: 70, height: 200, width: 200, resizeMode: 'cover', borderRadius: 100}}></Image>
            <Text style={{fontFamily: 'Renegade-Pursuit', textAlign: 'center', marginTop: 60, fontSize: 40, color: colors.text}}>Jeffrey</Text>
            <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 20}}>
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: colors.text}}>Lvl</Text>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: colors.text}}>27</Text>
                </View>
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: colors.text}}>Fights</Text>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: colors.text}}>142</Text>
                </View>
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: colors.text}}>Master</Text>
                    <Text style={{fontFamily: 'Renegade-Pursuit', color: colors.text}}>Luke</Text>
                </View>
            </View>
            <View style={{marginHorizontal: 50, marginTop: 30}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{color: colors.text}}>Allow location tracking</Text>
                    <Switch
                        onValueChange={toggleTracking}
                        value={tracking}
                    />
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{color: colors.text}}>Send notifications</Text>
                    <Switch
                        onValueChange={toggleNotif}
                        value={notif}
                    />
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{color: colors.text}}>Dark mode</Text>
                    <Switch
                        trackColor={{false: '#999999', true: colors.primary}}
                        onValueChange={toggleDark}
                        value={dark}
                    />
                </View>
            </View>
        </View>
    )
}

export default ProfilePage