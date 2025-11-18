import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, StyleSheet, Text, View } from "react-native";
import PropertiesSubheadingComponent from "./PropertiesSubheadingComponent";

const PropertiesAgentComponent = ({text}:{text:string})=>(
    <>
    <PropertiesSubheadingComponent text={text}/>
    <View style={styles.rootStyle}>
        <Image source={images.avatar} style={styles.image}/>
        <View style={styles.relativeLayout}>
            <Text style={styles.textOne}>Muhammad Khan</Text>
            <Text style={styles.textTwo}>Owner</Text>
            <Image style={styles.imageOne} source={icons.chat}/>
            <Image style={styles.imageTwo} source={icons.phone}/>
        </View>
    </View>
    </>
);
export default PropertiesAgentComponent;
const styles = StyleSheet.create({
    rootStyle:{
        marginTop:16,
        flexDirection:'row',
        width:'100%'
    },
    image:{
        width:50,
        height:50
    },
    relativeLayout:{
        flex:1,
        position:'relative',
        marginStart:20
    },
    textOne:{
        top:7,
        start:0,
        position:'absolute'
    },
    textTwo:{
        top:33,
        start:0,
        position:'absolute'
    },
    imageOne:{
        top:16,
        end:48,
        width:28,
        height:28,
        position:'absolute'
    },
    imageTwo:{
        top:16,
        end:0,
        position:'absolute',
        width:28,
        height:28,
    }

})