import {Image, StyleSheet, View,Dimensions} from "react-native";
import {images} from "@/constants/images";
import {Colors} from "@/constants/theme";
const { width, height } = Dimensions.get('window');
const splashScreen=()=>{
    return(
        <View style={styles.container}>
            <Image
                source={images.splash}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'white',
        alignItems:"center"
    },
    image:{
        width:width*0.30,
        height:height*0.120,
    },
    textOne:{
        color:Colors.light.darkBlue,
        fontSize:height*0.021,
        letterSpacing:0.10,
        marginTop:height*0.010,
        fontWeight:'900'
    },
    textTwo:{
        marginTop:height*0.012,
        fontWeight:'500',
        fontSize:height*0.012,
        letterSpacing:0.10,
        lineHeight:height*0.012,
        color:Colors.light.textColorSilver
    }
})