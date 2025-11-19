import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, StyleSheet, Text, View } from "react-native";

const PropertiesReviewComponent = ()=>(
    <>
    <View style={styles.firstRow}>
        <Image style={styles.star} source={icons.star}/>
        <Text style={styles.noOfReviews}>4.8 (1,275 reviews)</Text>
        <Text style={styles.seeAll}>See All</Text>
    </View>
     <View style={styles.secondRow}>
        <Image style={styles.profile} source={images.avatar}/>
        <Text style={styles.name}>Muhammad Khan</Text>
    </View>
    <Text style={styles.reviewText}>The apartment is very clean and modern. I really like the interior design. Looks like I'll feel at home 😍</Text>
    <View style={styles.thirdRow}>
        <Image source={icons.heart} style={styles.heart}/>
        <Text style={styles.heartNumber}>938</Text>
        <Text style={styles.daysAgo}>6 days ago</Text>
    </View>
    </>
);
export default PropertiesReviewComponent;
const styles = StyleSheet.create({
    firstRow:{
        flexDirection:'row',
        width:'100%',
        marginTop:30,
         alignItems:'center'
    },
    secondRow:{
        flexDirection:'row',
        marginTop:24,
        alignItems:'center'
    },
    thirdRow:{
        flexDirection:'row',
        marginTop:12,
        width:'100%',
        alignItems:'center'
    },
    star:{
        width:24,
        height:24
    },
    noOfReviews:{
        marginStart:12,
        fontSize:20,
        fontFamily:'Rubik-SemiBold',
        color:'#191D31',
        flex:1
    },
    seeAll:{
        color:'#0061FF',
        fontSize:16,
        fontFamily:'Rubik-SemiBold'
    },
    profile:{
        width:40,
        height:40
    },
    name:{
        marginStart:10,
        fontFamily:'Rubik-SemiBold',
        fontSize:16,
        color:'#191D31'
    },
    reviewText:{
        marginTop:12,
        color:'#666876',
        fontFamily:'Rubik-Regular',
        fontSize:16
    },
    heart:{
        width:20,
        height:20,
        tintColor:'#0061FF'
    },
    heartNumber:{
        flex:1,
        fontFamily:'Rubik-Medium',
        fontSize:14,
        marginStart:6,
        color:'#191D31'
    },
    daysAgo:{
        color:'#8C8E98',
        fontFamily:'Rubik-Regular',
        fontSize:14,
    }
})