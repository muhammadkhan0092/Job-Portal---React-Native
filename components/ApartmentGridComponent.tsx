import {Image, StyleSheet, Text, View} from "react-native";
import icons from "@/constants/icons";
import RatingsView from "@/components/RatingsView";
import images from "@/constants/images";

const ApartmentGridComponent = ()=>(
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image}/>
            <RatingsView ratingContainer={styles.ratingContainer} ratingStar={styles.ratingStar} ratingText={styles.ratingText} />
        </View>
        <Text style={styles.title}>La Grand Maison</Text>
        <Text style={styles.location}>Tokyo, Japan</Text>
        <View style={styles.priceAndHeartContainer}>
            <Text style={styles.price}>$12219</Text>
            <Image style={styles.heartImage} source={icons.heart}/>
        </View>
    </View>
)
export default ApartmentGridComponent;
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        paddingTop:16,
        paddingBottom:20,
        paddingStart:14,
        paddingEnd:14,
        backgroundColor:'white',
        borderRadius:12,
        borderWidth:0.1,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        width:'auto',
        height:'auto',
        alignSelf:'flex-start',
        borderColor:'gray'
    },
    imageContainer:{
        width:159,
        height:154,
        borderRadius:10,
        position:'relative',
        backgroundColor:'blue'
    },
    image:{
        width:159,
        height:154,
        borderRadius:10,
    },
    ratingContainer:{
        flexDirection:'row',
        position:'absolute',
        end:12,
        top:12,
        borderWidth:1,
        borderColor:'#04060F1F',
        backgroundColor:'white',
        borderRadius:100,
        alignItems:'center',
        paddingVertical:5.5,
        paddingHorizontal:10
    },
    ratingText:{
        fontSize:10,
        lineHeight:13,
        color:'#246BFD',
        fontFamily:'Rubik-SemiBold',
    },
    ratingStar:{
        width:8,
        height:8,
        resizeMode:'cover'
    },
    title:{
        fontSize:16,
        fontFamily:'Rubik-SemiBold',
        color:'#191D31',
        marginTop:12
    },
    location:{
        fontSize:12,
        fontFamily:'Rubik-Regular',
        color:'#8C8E98',
        marginTop:10
    },
    priceAndHeartContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    price:{
        color:'#8B5DFF',
        fontFamily:'Rubik-SemiBold',
        fontSize:16,
        flex:1
    },
    heartImage:{
        width:20,
        height:20,
       tintColor:'gray'
    }
});