import icons from "@/constants/icons";
import { Image, StyleSheet, Text, View } from "react-native";
import PropertiesSubheadingComponent from "./PropertiesSubheadingComponent";

const PropertiesLocationComponent = ({text}:{text:string})=>(
    <>
    <PropertiesSubheadingComponent text={text}/>
    <View style={styles.root}>
        <Image style={styles.imageStyle} source={icons.location}/>
        <Text style={styles.textStyle}>Grand City St. 100, New York, United States</Text>
    </View>
    </>
);
export default PropertiesLocationComponent;
const styles = StyleSheet.create({
    root:{
        marginTop:20,
        flexDirection:'row'
    },
    textStyle:{
        marginStart:8,
        fontSize:14,
        color:'#666876',
        fontFamily:'Rubik-Medium'
    },
    imageStyle:{
        width:20,
        height:20
    }
})