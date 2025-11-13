import {router, useLocalSearchParams, usePathname} from "expo-router";
import {useCallback, useState} from "react";
import {Dimensions, Image, StyleSheet, Text, TextInput, View} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import {useDebouncedCallback} from "use-debounce";
const {width,height} = Dimensions.get('window')

const Search = ()=>{
    const path = usePathname();
    const params = useLocalSearchParams<{query?:string}>();
    const [search,setSearch]=useState(params.query);
    const debouncedSearch = useDebouncedCallback(
        (text:string)=>router.setParams({query:text}),
        500
    )
    const handleSearch = (text:string)=>{
        setSearch(text);
        debouncedSearch(text)
    }

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={icons.search}/>
            <TextInput  placeholderTextColor={"black"} value={search}  onChangeText={handleSearch} style={styles.text}/>
            <Image style={styles.icon} source={icons.filter}/>
        </View>
    )
}
export default Search;
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:height*0.055,
        backgroundColor:'#FBFBFD',
        borderColor:'#8B5DFF0A',
        borderRadius:10,
        paddingHorizontal:height*0.017,
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        width:height*0.02,
        height:height*0.02,
    },
    text:{
        fontSize:height*0.015,
        lineHeight:height*0.017,
        flex:1,
        color:'black',
        fontFamily:'Rubik-Regular'
    }
})