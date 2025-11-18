import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, StyleSheet, View } from "react-native";

const PropertiesHeaderImage = ()=>(
    <View style={styles.container}>
        <Image style={styles.bgimage} source={images.japan}/>
        <Image source={icons.backArrow} style={styles.imgBack}/>
        <Image source={icons.send} style={styles.imgShare}/>
        <Image source={icons.heart} style={styles.imgHeart}/>
    </View>
);
export default PropertiesHeaderImage;
const styles = StyleSheet.create({
    container:{
        height:460,
        width:'100%',
        position:'relative'
    },
    bgimage:{
        height:460,
        width:'100%',
        position:'absolute',
        resizeMode:'cover'
    },
    imgBack:{
        width:28,
        height:28,
        start:24,
        top:70,
        position:'absolute'
    },
    imgHeart:{
        width:28,
        height:28,
        end:72,
        top:70,
        position:'absolute',
        tintColor:'#191D31'
    },
    imgShare:{
         width:28,
        height:28,
        end:24,
        top:70,
        position:'absolute'
    }
})