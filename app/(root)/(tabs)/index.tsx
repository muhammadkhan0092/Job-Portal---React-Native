import {Image, StyleSheet, View, Dimensions, Text, TouchableOpacity, FlatList} from "react-native";
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
            <FlatList
                data={[1,2,3,4]}
                horizontal={false}
                numColumns={2}
                ListHeaderComponent={
                    ()=>(
                        <>
                            <View style={styles.header}>
                                <Image style={styles.profileImage} source={images.avatar}/>
                                <View style={styles.greetingView}>
                                    <Text style={styles.goodMorning}>Good Morning</Text>
                                    <Text>M.Khan Ahmad</Text>
                                </View>
                                <Image style={styles.notification} source={icons.bell}/>
                            </View>
                            <Search/>
                            <HeadingComponent text={"Featured"}/>
                            <FeaturedComponent title={"Apartment Squares"} location={"Los Angeles"} price={"$59210"}/>
                            <HeadingComponent text={"Recommendations"}/>
                        </>
                    )
                }
                columnWrapperStyle={{ gap: 16 }}
                ItemSeparatorComponent={()=>(<View style={{height:20}}/>)}
                renderItem={(item)=>(
                    <ApartmentGridComponent/>
                )}
            />
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
        alignItems:"center",
        marginTop:32
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
        width:width*0.57,
        height:height*0.36,
        borderRadius:24,
        position:'relative'
    },
    featuredImage:{
        width:width*0.57,
        height:height*0.36,
        borderRadius:24,
        resizeMode:'cover',
        backgroundColor:'red'
    },
    featuredPrice:{
        bottom:height*0.021,
        start:width*0.03,
        position:'absolute',
        fontFamily:'Rubik-Bold',
        fontSize:height*0.021,
        color:'white'
    },
    featuredTitle:{
        bottom:height*0.09,
        start:width*0.03,
        position:'absolute',
        fontFamily:'Rubik-Bold',
        fontSize:height*0.021,
        color:'white'
    },
    featuredLocation:{
        bottom:height*0.057,
        start:width*0.03,
        position:'absolute',
        fontFamily:'Rubik-Regular',
        fontSize:height*0.017,
        color:'white'
    },
    ratingContainer:{
        flexDirection:'row',
        position:'absolute',
        end:width*0.05,
        top:height*0.02,
        borderWidth:1,
        borderColor:'#04060F1F',
        backgroundColor:'white',
        borderRadius:100,
        alignItems:'center',
        paddingVertical:height*0.005,
        paddingHorizontal:width*0.023
    },
    ratingText:{
        fontSize:height*0.012,
        lineHeight:height*0.018,
        color:'#246BFD',
        fontFamily:'Rubik-SemiBold',
    },
    ratingStar:{
        width:height*0.011,
        height:height*0.011,
        resizeMode:'cover'
    },
    heart:{
        position:'absolute',
        end:width*0.037,
        bottom:height*0.025,
        width:width*0.050,
        height:height*0.023
    }
});