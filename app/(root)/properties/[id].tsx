import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

const Property = ()=>{
    const {id} = useLocalSearchParams()
    return (
        <View style={{
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>Property is {id}</Text>
        </View>
    )
}
export default Property;