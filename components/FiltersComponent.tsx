import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {useState} from "react";
import {categories} from "@/constants/data";

export default function FiltersComponent(){
    const params = useLocalSearchParams<{filter?:string}>();
    const [selectedCategory,setSelectedCategory] = useState(params.filter || 'All');
    const handleCategory = (category:string)=>{
        if(category===selectedCategory){
            setSelectedCategory('All');
            router.setParams({filter:'All'})
            return;
        }
        else
        {
            setSelectedCategory(category);
            router.setParams({filter:category})
            return
        }
    }
    return (
        <ScrollView style={styles.filterContainerStyle} showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{gap:12}} >
            {
                categories.map((item,index)=>(
                    <TouchableOpacity key={item.category || index}  onPress={()=>handleCategory(item.category)}
                        style={[styles.scrollItemStyle,item.category===selectedCategory?styles.selectedColor:styles.unselectedColor]}>
                        <Text style={[styles.textStyle,item.category===selectedCategory?styles.selectedText:styles.unselectedText]}>{item.category}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    filterContainerStyle:{
        marginTop:30,
    },
    scrollItemStyle:{
        paddingVertical:8,
        paddingHorizontal:20,
        alignSelf:'flex-start',
        borderRadius:30
    },
    textStyle:{
        fontSize:14,
        fontFamily:'Rubik-Regular',
    },
    selectedColor:{
        backgroundColor:'#8B5DFF'
    },
    unselectedColor:{
        backgroundColor:'#8B5DFF0A'
    },
    selectedText:{
        color:'white'
    },
    unselectedText:{
        color:'#191D31'
    }
})