import { useGlobalContext } from "@/lib/global-provider";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";

export default function AppLayout(){
    const {user,refetch,isLoggedIn,loading} = useGlobalContext()
    if(true){
        return <Slot/>
    }
};
const styles = StyleSheet.create({
    root:{
        backgroundColor:'white',
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})