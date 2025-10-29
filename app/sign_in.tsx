import {Text, View} from "react-native";
import {useFonts} from "expo-font";
import {useEffect} from "react";
import {SplashScreen, Stack} from "expo-router";

const Sign_in = () => {
    const [fontsLoaded] = useFonts({
        "Rubik-Bold":require("../assets/fonts/Rubik-Bold.ttf"),
        "Rubik-Medium":require("../assets/fonts/Rubik-Medium.ttf")
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
        <View style={{
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text style={{fontFamily:'Rubik-Bold'}}>Sign In</Text>
        </View>
    )
}
export default Sign_in;