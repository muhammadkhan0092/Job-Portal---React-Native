import FacilitiesComponent from "@/components/FacilitiesComponent";
import PropertiesAgentComponent from "@/components/properties/PropertiesAgentComponent";
import PropertiesHeaderImage from "@/components/properties/PropertiesHeaderImage";
import PropertiesHeaderIntro from "@/components/properties/PropertiesHeaderIntro";
import PropertiesHighlightComponent from "@/components/properties/PropertiesHighlightComponent";
import PropertiesOverviewComponent from "@/components/properties/PropertiesOverviewComponent";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

const Property = ()=>{
    const {id} = useLocalSearchParams()
    console.log('in props')
    return (
        <View style={styles.root}>
            <PropertiesHeaderImage/>
             <View style={styles.paddedContainer}>
                <PropertiesHighlightComponent/>
                 <PropertiesHeaderIntro/>
            <PropertiesAgentComponent text="Agent"/>
            <PropertiesOverviewComponent text="Overview"/>
            <FacilitiesComponent/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    root:{
        flex:1,
        flexDirection:'column'
    },
    paddedContainer:{
        flex:1,
        flexDirection:'column',
        paddingStart:20,
        paddingEnd:20
    }
});
export default Property;