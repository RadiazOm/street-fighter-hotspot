import {createContext } from "react";
import { useColorScheme } from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

const darkMode = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        card: '#010409',
        background: '#0D1117'
    },
};

export const ThemeContext = createContext({dark: darkMode, light: DefaultTheme})