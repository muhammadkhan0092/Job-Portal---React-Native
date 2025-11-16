import ApartmentSearchComponent from "@/components/ApartmentSearchComponent";
import FiltersComponent from "@/components/FiltersComponent";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
const {width,height} = Dimensions.get('window');

const Explore = ()=>{
    return(
        <View style={styles.container}>
            <ExploreHeaderComponent/>
            <Search/>
            <FiltersComponent/>
            <Text style={styles.foundTextStyle}>Found 182 Apartments</Text>
            <ExploreFlatList/>
        </View>
    )
}
export default Explore;
const ExploreFlatList = ()=>(
    <FlatList
    style={styles.flatListStyle}
        data={[1,2,3,4]}
        renderItem={
            ({item})=>(
            <ApartmentSearchComponent/>
        )}
        horizontal={false}
        ItemSeparatorComponent={()=>(
            <View style={{height:height*0.017}}/>
        )}
        />
)
const ExploreHeaderComponent = ()=>(
    <View style={styles.headerContainer}>
        <View style={styles.backViewStyle}>
            <Image source={icons.backArrow} style={styles.headerImgStyle}/>
        </View>
        <Text style={styles.headerTextStyle}>Search for Your Ideal Home</Text>
        <Image style={styles.headerImgStyle} source={icons.bell}/>
    </View>
);
const styles = StyleSheet.create({
    container:{
        paddingTop:height*0.064,
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:width*0.046
    },
    flatListStyle:{
        flex:1,
        marginTop:height*0.025
    },
    headerContainer:{
        width:'100%',
        flexDirection:'row',
        marginBottom:height*0.0257,
        alignItems:'center'
    },
    headerImgStyle:{
        width:height*0.023,
        height:height*0.023
    },
    headerTextStyle:{
        fontFamily:'Rubik-Medium',
        fontSize:height*0.017,
        color:'#191D31',
        flex:1,
        textAlign:'center'
    },
    backViewStyle:{
        width:height*0.047,
        height:height*0.047,
        borderRadius:100,
        backgroundColor:'#8B5DFF1A',
        alignItems:'center',
        justifyContent:'center'
    },
    foundTextStyle:{
        fontFamily:'Rubik-SemiBold',
        color:'#191D31',
        fontSize:height*0.0214,
        marginTop:height*0.0343
    }
})