import PropertiesHeaderImage from "@/components/properties/PropertiesHeaderImage";
import PropertiesHeaderIntro from "@/components/properties/PropertiesHeaderIntro";
import PropertiesHighlightComponent from "@/components/properties/PropertiesHighlightComponent";
import PropertiesReviewComponent from "@/components/properties/PropertiesReviewComponent";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

const Property = ()=>{
    const {id} = useLocalSearchParams()
    console.log('in props')
    return (
        <ScrollView horizontal={false} style={styles.root}>
            <PropertiesHeaderImage/>
             <View style={styles.paddedContainer}>
                <PropertiesHighlightComponent/>
                 <PropertiesHeaderIntro/>
            <PropertiesReviewComponent/>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    root:{
        flex:1,
        flexDirection:'column',
         marginBottom:50
    },
    paddedContainer:{
        flex:1,
        flexDirection:'column',
        paddingStart:20,
        paddingEnd:20}
});
export default Property;