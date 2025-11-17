import { StyleSheet, Text } from "react-native";
import PropertiesSubheadingComponent from "./PropertiesSubheadingComponent";

const PropertiesOverviewComponent = ({text}:{text:string})=>(
    <>
    <PropertiesSubheadingComponent text={text}/>
    <Text style={styles.textStyle}>Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and city views. Minutes from downtown, dining, and transit.</Text>
    </>
);
export default PropertiesOverviewComponent;

const styles = StyleSheet.create({
    textStyle:{
        marginTop:12,
        fontSize:16,
        fontFamily:'Rubik-Regular',
        color:'#666876'
    }
})