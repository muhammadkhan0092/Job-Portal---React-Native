import {Image, StyleSheet, Text, View} from "react-native";
import icons from "@/constants/icons";
import RatingsView from "@/components/RatingsView";

const ApartmentSearchComponent = ()=>{
    return (
        <View style={styles.rootContainerStyle}>
            <View style={styles.imageContainerStyle}>
                <Image style={styles.image}/>
                <RatingsView ratingContainer={styles.ratingContainer} ratingStar={styles.ratingStar} ratingText={styles.ratingText}/>
            </View>
            <View style={styles.contentContainerStyle}>
                <View style={styles.titleAndHeartStyle}>
                    <Text style={styles.titleStyle}>Lucky Lake{'\n'}Apartments</Text>
                    <Image style={styles.heartStyle} source={icons.heart}/>
                </View>
                <View style={styles.locationAndPriceContainerStyle}>
                    <Text style={styles.locationStyle}>Beijing, China</Text>
                    <Text style={styles.priceStyle}>$1234</Text>
                </View>
            </View>
        </View>
    )
}
export default ApartmentSearchComponent;
const styles = StyleSheet.create({
    rootContainerStyle:{
        backgroundColor:'white',
        flexDirection:'row',
        width:'100%',
        height:'auto',
        alignSelf:'flex-start',
        borderRadius:28,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        paddingVertical:14,
        paddingStart:14,
        paddingEnd:18,
    },
    imageContainerStyle:{
        position:'relative',
        width:100,
        height:100,
        borderRadius:10,
        backgroundColor:'red'
    },
    image:{
        width:100,
        height:100,
        borderRadius:10
    },
    contentContainerStyle:{
        marginStart:14,
        marginTop:10,
        flex:1,
        height:'auto',
        alignItems:'flex-start'
    },
    titleStyle:{
        fontSize:18,
        lineHeight:22,
        fontFamily:'Rubik-Semibold',
        color:'#191D31',
        flex:1
    },
    titleAndHeartStyle:{
        flexDirection:'row',
        height:'auto',
        alignItems:'flex-start'
    },
    locationAndPriceContainerStyle:{
        marginTop:10,
        flexDirection:'row',
        width:'100%',
    },
    locationStyle:{
        fontSize:14,
        fontFamily:'Rubik-Regular',
        color:'#666876',
        flex:1
    },
    priceStyle:{
        fontSize:18,
        fontFamily:'Rubik-Semibold',
        color:'#8B5DFF',
    },
    heartStyle:{
        width:22,
        height:22,
        tintColor:'gray',
    },
    ratingText:{
        fontSize:8,
        lineHeight:11,
        color:'#246BFD',
        fontFamily:'Rubik-SemiBold',
    },
    ratingStar:{
        width:8,
        height:8,
        resizeMode:'cover'
    },
    ratingContainer:{
        flexDirection:'row',
        position:'absolute',
        end:6.17,
        top:6.17,
        borderWidth:1,
        borderColor:'#04060F1F',
        backgroundColor:'white',
        borderRadius:100,
        alignItems:'center',
        paddingVertical:2,
        paddingHorizontal:6
    },
})