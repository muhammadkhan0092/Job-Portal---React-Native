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
            <Link href="/explore">Explore</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/sign_in">Sign In</Link>
            <Link href="/properties/1">Properties</Link>
        </View>
    )
}