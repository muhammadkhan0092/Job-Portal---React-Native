import { StyleSheet, Text } from "react-native";

const PropertiesSubheadingComponent = ({text}:{text:string})=>(
    <>
    <Text style={styles.headingStyle}>{text}</Text>
    </>
);
export default PropertiesSubheadingComponent;
const styles = StyleSheet.create({
    headingStyle:{
        fontFamily:'Rubik-SemiBold',
        fontSize:20,
        color:'#191D31',
        marginTop:30
    }
});