import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {SplashScreen, Stack} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import {useFonts} from "expo-font";
import {useEffect} from "react";
import GlobalProvider from "@/lib/global-provider";

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
    const [fontsLoaded] = useFonts({
        "Rubik-Bold":require("../assets/fonts/Rubik-Bold.ttf"),
        "Rubik-Medium":require("../assets/fonts/Rubik-Medium.ttf"),
        "Rubik-SemiBold":require("../assets/fonts/Rubik-SemiBold.ttf"),
        "Rubik-Regular":require("../assets/fonts/Rubik-Regular.ttf"),
    });
    useEffect(() => {
        if(fontsLoaded){
            SplashScreen.hideAsync();
        }
    },[fontsLoaded]);
    if(!fontsLoaded){
        return null;
    }
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <GlobalProvider>
            <Stack screenOptions={{headerShown: false}}/>
            <StatusBar hidden={true}/>
        </GlobalProvider>
    </ThemeProvider>
  );
}
