import images from "@/constants/images";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
const {width,height} = Dimensions.get('window');
interface props{
    number?:string
}
const GalleryComponent = ({number}:props)=>(
    <View style={styles.containerStyle}>
        <Image style={styles.imageStyle} source={images.japan}/>
        {
            number && (<Text style={styles.textStyle}>20+</Text>) 
        }
    </View>
);
const styles = StyleSheet.create({
    containerStyle:{
        width:width*0.273,
        height:width*0.273,
        position:'relative',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    imageStyle:{
        width:width*0.273,
        height:width*0.273,
        position:'absolute',
         borderRadius:10
    },
    textStyle:{
        fontFamily:'Rubik-Bold',
        fontSize:width*0.046,
        color:'white'
    }
});
export default GalleryComponent;