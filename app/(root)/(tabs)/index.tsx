import {Image, StyleSheet, View, Dimensions, Text} from "react-native";
import {Link} from "expo-router";
const { width, height } = Dimensions.get('window');


export default function HomeScreen() {
    return(
        <View
            style={{
                flex: 1,
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column'
            }}
        >
            <Text>Home</Text>
        </View>
    )
}