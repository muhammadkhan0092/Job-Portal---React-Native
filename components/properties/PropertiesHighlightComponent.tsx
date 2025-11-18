import icons from "@/constants/icons";
import { Image, StyleSheet, Text, View } from "react-native";

const PropertiesHighlightComponent = ()=>(
    <>
    <Text style={styles.headingStyle}>Modernica Apartment</Text>
    <View style={styles.apartmentRow}>
        <Text style={styles.apartmentText}>{"Apartment".toUpperCase()}</Text>
        <Image style={styles.star} source={icons.star}/>
        <Text style={styles.reviewsText}>4.8 (1,275 reviews)</Text>
    </View>
    <View style={styles.detailsRow}>
        <PropsDetailComponent/>
        <View style={{width:24}}/>
        <PropsDetailComponent/>
         <View style={{width:24}}/>
        <PropsDetailComponent/>
    </View>
    </>
);
export default PropertiesHighlightComponent;

const PropsDetailComponent = ()=>(
    <View style={styles.detailItem}>
        <View style={styles.detailImageContainer}>
            <Image style={styles.detailImage} source={icons.bed}/>
        </View>
        <Text style={styles.detailText}>8 Beds</Text>
    </View>
)



const styles = StyleSheet.create({
    headingStyle:{
        marginTop:30,
        fontSize:24,
        fontFamily:'Rubik-Bold',
        color:'#191D31'
    },
    apartmentRow:{
        marginTop:16,
        flexDirection:'row',
        alignItems:'center'
    },
    apartmentText:{
        paddingVertical:6,
        paddingHorizontal:10,
        color:'#0061FF',
        fontFamily:'Rubik-SemiBold',
        fontSize:10,
        backgroundColor:'#0061FF0A',
        borderRadius:100
    },
    star:{
        marginStart:10,
        width:20,
        height:20
    },
    reviewsText:{
        marginStart:6,
        fontFamily:'Rubik-Medium',
        fontSize:14,
        color:'#666876'
    },
    detailsRow:{
        marginTop:16,
        flexDirection:'row',
    },
    detailItem:{
        flexDirection:'row',
        alignItems:'center'
    },
    detailImageContainer:{
        width:40,
        height:40,
        borderRadius:100,
        backgroundColor:'#0061FF0A',
        alignItems:'center',
        justifyContent:'center'
    },
    detailImage:{
        width:16,
        height:16
    },
    detailText:{
        marginStart:8,
        fontFamily:'Rubik-Medium',
        fontSize:14,
        color:'#191D31'
    }
});