import {useGlobalContext} from "@/lib/global-provider";
import {Redirect, Slot} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context/src/SafeAreaView.web";
import {ActivityIndicator, StyleSheet} from "react-native";

export default function AppLayout(){
    const {user,refetch,isLoggedIn,loading} = useGlobalContext()
    if(loading){
        return <SafeAreaView style={styles.root}>
            <ActivityIndicator/>
        </SafeAreaView>
    }
    if(!isLoggedIn){
        return <Redirect href='/'/>
    }
    return <Slot/>
};
const styles = StyleSheet.create({
    root:{
        backgroundColor:'white',
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})