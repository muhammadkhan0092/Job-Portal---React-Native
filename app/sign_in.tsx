import {useFonts} from "expo-font";
import {useEffect} from "react";
import {SafeAreaView} from "react-native-safe-area-context/src/SafeAreaView.web";
import images from "@/constants/images";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import icons from "@/constants/icons";
const { width, height } = Dimensions.get('window');
const Sign_in = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.onboarding} style={styles.image}/>
            <Text style={styles.welcomeToScout}>Welcome to Real Scout</Text>
            <Text style={styles.textSpanOne}>Let’s get you closer to <Text style={styles.textSpanTwo}>your ideal home</Text></Text>
            <Text style={styles.textLogin}>Login to Real Scout with Google</Text>
            <View style={styles.loginContainer}>
                <Image style={styles.google} source={icons.google}/>
                <Text style={styles.signUpText}>Sign Up with Google</Text>
            </View>
        </SafeAreaView>
    )
}
export default Sign_in;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: width*0.046,
        backgroundColor:'white'
    },
    image:{
        height:height*0.5,
        width:'100%',
        resizeMode: "cover",
    },
    welcomeToScout:{
        alignSelf:'center',
        fontSize:height*0.0171,
        lineHeight:height*0.0309,
        color:'#666876'
    },
    textSpanOne:{
        fontSize:height*0.0343,
        lineHeight:height*0.044,
        color:'#191D31',
        fontFamily:'Rubik-SemiBold',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:12
    },
    textSpanTwo:{
        fontSize:height*0.0343,
        lineHeight:height*0.044,
        color:'#8B5DFF',
        justifyContent:'center',
        alignSelf:'center'
    },
    textLogin:{
        fontSize:height*0.019,
        lineHeight:height*0.034,
        fontFamily:'Rubik-Regular',
        color:'#666876',
        alignSelf:'center',
        marginTop:12
    },
    loginContainer:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'white',
        elevation:50,
        justifyContent:'center',
        paddingVertical:18.5,
        marginTop:20,
        marginStart:30
    },
    signUpText:{
        fontSize:height*0.019,
        lineHeight:height*0.025,
        fontFamily:'Rubik-Medium',
        color:'#191D31',
        marginStart:10
    },
    google:{
      width:height*0.023,
      height:height*0.023
    }
})