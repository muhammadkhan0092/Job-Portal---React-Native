import {useLocalSearchParams, usePathname} from "expo-router";
import {useState} from "react";
import {Image, StyleSheet, Text, TextInput, View} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";

const Search = ()=>{
    const path = usePathname();
    const params = useLocalSearchParams<{query?:string}>();
    const [search,setSearch]=useState(params.query);

    const handleSearch = (text:string)=>{
        setSearch(text);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={icons.search}/>
            <TextInput placeholderTextColor={"#8C8E98"} value={search}  onChangeText={handleSearch} style={styles.text}/>
            <Image style={styles.icon} source={icons.filter}/>
        </View>
    )
}
export default Search;
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:52,
        backgroundColor:'#FBFBFD',
        borderColor:'#8B5DFF0A',
        borderRadius:10,
        padding:16,
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        width:20,
        height:20,
    },
    text:{
        fontSize:14,
        flex:1,
        lineHeight:17,
        color:'#8C8E98',
        fontFamily:'Rubik-Regular'
    }
})