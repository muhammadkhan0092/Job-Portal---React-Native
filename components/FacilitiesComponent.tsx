import icons from "@/constants/icons";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
const {width,height} = Dimensions.get('window');
const FacilitiesComponent = ()=>(
    <View style={styles.containerStyle}>
        <View style={styles.ImagecontainerStyle}>
        <Image style={styles.imageStyle} source={icons.laundry}/>
    </View>
    <Text style={styles.text}>Laundry</Text>
    </View>
);
export default FacilitiesComponent;

const styles = StyleSheet.create({
    containerStyle:{
        flexDirection:'column',
        justifyContent:'center'
    },
    ImagecontainerStyle:{
        width:width*0.138,
        height:width*0.138,
        borderRadius:100,
        backgroundColor:'#8B5DFF1A',
        alignItems:'center',
        justifyContent:'center'
    },
    imageStyle:{
        width:width*0.064,
        height:width*0.064,
        resizeMode:'cover'
    },
    text:{
        fontSize:width*0.0324,
        color:'#191D31',
        fontFamily:'Rubik-Regular',
        marginTop:height*0.008
    }
});