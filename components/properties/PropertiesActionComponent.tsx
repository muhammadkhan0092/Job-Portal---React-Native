import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PropertiesActionComponent = ()=>(
    <View style={styles.root}>
        <View style={styles.column}>
            <Text style={styles.priceHeading}>Price</Text>
            <Text style={styles.price}>$17821</Text>
        </View>
        <TouchableOpacity style={styles.bookingNow} onPress={()=>{}}>
            <Text style={styles.bookingText}>Booking</Text>
        </TouchableOpacity>
    </View>
);
export default PropertiesActionComponent;
const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        width:'100%',
        paddingTop:24.5,
        paddingBottom:36.5,
        paddingHorizontal:24,
        alignItems:'center',
        marginTop:42,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderColor:'#0061FF1A',
        borderWidth:1
    },
    column:{
        flexDirection:'column'
    },
    bookingNow:{
        flex:1,
        backgroundColor:'#0061FF',
        paddingVertical:14,
        paddingHorizontal:16,
        alignItems:'center',
        borderRadius:100,
        marginStart:60
    },
    bookingText:{
        fontFamily:'Rubik-SemiBold',
        fontSize:16,
         color:'white',
    },
    priceHeading:{
        fontFamily:'Rubik-Medium',
        fontSize:12,
        color:'#666876'
    },
    price:{
        fontFamily:'Rubik-SemiBold',
        fontSize:24,
        color:'#0061FF',
        marginTop:6
    }
})