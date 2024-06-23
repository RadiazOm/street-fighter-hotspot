import { Image, Switch, Text, View } from "react-native";
import profilePlaceholder from "../../assets/icons/profilePlaceholder.png"
import { useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../contexts/ThemeContext"



const ProfilePage = ({ setTheme, setLocTracking }) => {

    // get theme colors
    const { colors } = useTheme()

    // get darkmode object and lightmode object
    const themes = useContext(ThemeContext)

    // state variables for settings
    const [tracking, setTracking] = useState(false)
    const [dark, setDark] = useState(false)

    // get settings from asyncstorage
    useEffect(() => {
        (async () => {
            const darkMode = JSON.parse(await AsyncStorage.getItem('dark-mode'))
            const tracking = JSON.parse(await AsyncStorage.getItem('tracking'))

            if (typeof tracking !== "undefined") {
                setTracking(tracking)
            }

            if (typeof dark !== "undefined") {
                setDark(darkMode)
            }
        })()
    }, []);

    // if darkmode is changed, change everywhere else (theme is a state variable in app.js)
    useEffect(() => {
        setTheme(dark ? themes.dark : themes.light)
    }, [dark]);

    // same thing as darkmode
    useEffect(() => {
        setLocTracking(tracking)
    }, [tracking]);

    // when clicked on the allow tracking button, change asyncstorage and state variable
    const toggleTracking = async () => {
        try {
            await AsyncStorage.setItem('tracking', JSON.stringify(!tracking))
        } catch (e) {
            alert(e)
        }
        setTracking(prev => !prev)
    }

    // same thing as above but for dark mode
    const toggleDark = async () => {
        try {
            await AsyncStorage.setItem('dark-mode', JSON.stringify(!dark))
        } catch (e) {
            alert(e)
        }
        setDark(prev => !prev)
    }

    // your profile view
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