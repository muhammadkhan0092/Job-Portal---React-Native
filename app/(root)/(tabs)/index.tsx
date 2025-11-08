import {Image, StyleSheet, View, Dimensions, Text} from "react-native";
import {Link} from "expo-router";
import images from "@/constants/images";
import {SafeAreaView} from "react-native-safe-area-context/src/SafeAreaView.web";
import icons from "@/constants/icons";
import Search from "@/components/Search";
const { width, height } = Dimensions.get('window');


export default function HomeScreen() {
    return(
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.header}>
                <Image style={styles.profileImage} source={images.avatar}/>
                <View style={styles.greetingView}>
                    <Text style={styles.goodMorning}>Good Morning</Text>
                    <Text>M.Khan Ahmad</Text>
                </View>
                <Image style={styles.notification} source={icons.bell}/>
            </View>
            <Search/>
            <Text>Hello g</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingStart:20,
        paddingEnd:20,
        paddingTop:16,
        paddingBottom:36,
        backgroundColor:'white'
    },
    header:{
        width:'100%',
        flexDirection:'row',
        alignItems:"center",
        marginBottom:24
    },
    greetingView:{
        flexDirection:'column',
        flex:1,
        marginStart:10
    },
    goodMorning:{
        color:'#8C8E98',
        fontSize:12,
        fontFamily:'Rubik-Regular'
    },
    name:{
        color:'#191D31',
        fontSize:16,
        fontFamily:'Rubik-Medium'
    },
    profileImage:{
        width:44,
        height:44,
        borderRadius:100
    },
    notification:{
        width:22,
        height:22
    }
})