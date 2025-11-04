import {useFonts} from "expo-font";
import {useEffect} from "react";
import {SafeAreaView} from "react-native-safe-area-context/src/SafeAreaView.web";
import images from "@/constants/images";
import {Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import icons from "@/constants/icons";
import {Colors} from "@/constants/theme";
import {login} from "@/lib/appWrite";
import {getContext} from "expo-router/build/rsc/server";
import {useGlobalContext} from "@/lib/global-provider";
import {Redirect} from "expo-router";
const { width, height } = Dimensions.get('window');
const Sign_in =() => {
    const {user,refetch,isLoggedIn,loading} = useGlobalContext()
    if(isLoggedIn){
        return <Redirect href="/"/>
    }
    const signInHandler = async ()=>{
        const result = await login()
        if(result){
            //refetch({"":""})
        }
        else
        {
            Alert.alert("Error","Failed to login");
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.onboarding} style={styles.image}/>
            <Text style={styles.welcomeToScout}>Welcome to Real Scout</Text>
            <Text style={styles.textSpanOne}>Let’s get you closer to <Text style={styles.textSpanTwo}>your ideal home</Text></Text>
            <Text style={styles.textLogin}>Login to Real Scout with Google</Text>
            <View style={styles.logoShadow}>
                <TouchableOpacity onPress={signInHandler} style={styles.loginContainer}>
                    <Image style={styles.google} source={icons.google}/>
                    <Text style={styles.signUpText}>Sign Up with Google</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Sign_in;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor:'white'
    },
    image:{
        height:height*0.5,
        width:'100%',
        resizeMode: "cover",
        marginTop:height*0.02
    },
    welcomeToScout:{
        alignSelf:'center',
        fontSize:height*0.0171,
        lineHeight:height*0.0309,
        marginTop:height*0.02,
        letterSpacing:width*0.01,
        color:Colors.light.textColorSilver,
        textTransform:'uppercase'
    },
    textSpanOne:{
        fontSize:height*0.0343,
        lineHeight:height*0.044,
        color:'#191D31',
        fontFamily:'Rubik-SemiBold',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:height*0.0144,
        textAlign:'center',
        marginStart:width*0.046,
        marginEnd:width*0.046
    },
    textSpanTwo:{
        fontSize:height*0.0343,
        lineHeight:height*0.044,
        color:Colors.light.darkBlue,
        justifyContent:'center',
        alignSelf:'center',
    },
    textLogin:{
        fontSize:height*0.019,
        lineHeight:height*0.034,
        fontFamily:'Rubik-Regular',
        color:Colors.light.textColorSilver,
        alignSelf:'center',
        marginTop:height*0.0144
    },
    logoShadow:{
        marginStart:width*0.046,
        marginEnd:width*0.046,
        width:'90%',
        backgroundColor:Colors.light.shadowColor,
        padding:5,
        borderRadius:100,
        marginTop:20,
    },
    loginContainer:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'white',
        elevation:30,
        justifyContent:'center',
        paddingVertical:18.5,
        borderRadius:100
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