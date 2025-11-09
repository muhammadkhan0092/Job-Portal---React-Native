import {Image, StyleSheet, View, Dimensions, Text, TouchableOpacity} from "react-native";
import {Link} from "expo-router";
import images from "@/constants/images";
import {SafeAreaView} from "react-native-safe-area-context/src/SafeAreaView.web";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import {text} from "node:stream/consumers";
import RatingsView from "@/components/RatingsView";
import ApartmentGridComponent from "@/components/ApartmentGridComponent";
import ApartmentSearchComponent from "@/components/ApartmentSearchComponent";
import FiltersComponent from "@/components/FiltersComponent";
const { width, height } = Dimensions.get('window');
interface headingProps{
    text: string,
}
const FeaturedComponent = (props:featuredProps)=>{
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.featuredContainer}>
            <Image source={images.japan} style={styles.featuredImage}/>
            <Text style={styles.featuredPrice}>{props.price}</Text>
            <Text style={styles.featuredTitle}>{props.title}</Text>
            <Text style={styles.featuredLocation}>{props.location}</Text>
            <RatingsView ratingContainer={styles.ratingContainer} ratingStar={styles.ratingStar} ratingText={styles.ratingText}/>
            <Image style={styles.heart} source={icons.heart}/>
        </TouchableOpacity>
    )
}
const HeadingComponent = ({text}:headingProps)=>{
    return (
        <View style={styles.headingContainer}>
            <Text style={styles.headingText}>{text}</Text>
            <Text style={styles.seeAllText}>See All</Text>
        </View>
    )
}
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
            <FiltersComponent/>
            {/*<FeaturedComponent*/}
            {/*    onPress={()=>{}}*/}
            {/*    title={""}*/}
            {/*    location={""}*/}
            {/*    price={""}*/}
            {/*/>*/}
            {/*<ApartmentSearchComponent/>*/}
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
    },
    headingContainer:{
        width:'100%',
        flexDirection:'row',
        alignItems:"center"
    },
    headingText:{
        flex:1,
        fontSize:20,
        fontFamily:'Rubik-SemiBold',
        color:'#191D31'
    },
    seeAllText:{
        fontSize:16,
        fontFamily:'Rubik-SemiBold',
        color:'#8B5DFF'
    },
    featuredContainer:{
        width:250,
        height:340,
        borderRadius:24,
        position:'relative'
    },
    featuredImage:{
        width:250,
        height:340,
        borderRadius:24,
        resizeMode:'cover',
        backgroundColor:'red'
    },
    featuredPrice:{
        bottom:20,
        start:16,
        position:'absolute',
        fontFamily:'Rubik-Bold',
        fontSize:20,
        color:'white'
    },
    featuredTitle:{
        bottom:86,
        start:16,
        position:'absolute',
        fontFamily:'Rubik-Bold',
        fontSize:20,
        color:'white'
    },
    featuredLocation:{
        bottom:54,
        start:16,
        position:'absolute',
        fontFamily:'Rubik-Regular',
        fontSize:16,
        color:'white'
    },
    ratingContainer:{
        flexDirection:'row',
        position:'absolute',
        end:24,
        top:24,
        borderWidth:1,
        borderColor:'#04060F1F',
        backgroundColor:'white',
        borderRadius:100,
        alignItems:'center',
        paddingVertical:5.5,
        paddingHorizontal:10
    },
    ratingText:{
        fontSize:12,
        lineHeight:15,
        color:'#246BFD',
        fontFamily:'Rubik-SemiBold',
    },
    ratingStar:{
        width:11,
        height:11,
        resizeMode:'cover'
    },
    heart:{
        position:'absolute',
        end:16,
        bottom:20,
        width:22,
        height:22
    }
});