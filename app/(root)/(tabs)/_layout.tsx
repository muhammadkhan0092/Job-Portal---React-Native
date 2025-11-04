import {Tabs} from "expo-router";
import {Image, StyleSheet, Text, View} from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";
interface tabItemProps{
    image:any,
    title:string,
    focused:boolean,
}
const TabIcon = ({image,title,focused}:tabItemProps)=>(
    <View style={styles.itemContainer}>
        <Image style={
            [styles.image,{tintColor:focused?'#8B5DFF':'#666876'}]
        } source={image}/>
        <Text style={[styles.text,{color:focused?'#8B5DFF':'#666876'}]}>{title}</Text>
    </View>
)
export default function TabLayout(){
    return(
        <Tabs
            screenOptions={
            {
                tabBarShowLabel:false,
                tabBarStyle:{
                    backgroundColor:'white',
                    minHeight:86,
                    borderTopColor:'#8B5DFF1A',
                    borderTopWidth:1,
                    borderRadius:10
                }
            }
            }
        >
            <Tabs.Screen
                name='index'
                options={
                {
                    headerShown:false,
                    title:'home',
                    tabBarIcon:({focused})=>(
                        <TabIcon image={icons.home} title="Home" focused={focused}/>
                    )
                }
            }
            />
            <Tabs.Screen
                name='explore'
                options={
                    {
                        headerShown:false,
                        title:'explore',
                        tabBarIcon:({focused})=>(
                            <TabIcon image={icons.search} title="Explore" focused={focused}/>
                        )
                    }
                }
            />
            <Tabs.Screen
                name='profile'
                options={
                    {
                        headerShown:false,
                        title:'profile',
                        tabBarIcon:({focused})=>(
                            <TabIcon image={icons.person} title="Profile" focused={focused}/>
                        )
                    }
                }
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        width:70,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    image:{
        width:20,
        height:20,
        marginTop:20
    },
    text:{
        fontSize:12,
        lineHeight:13,
        fontFamily:'Rubik-Medium',
        color:'#8B5DFF',
        marginTop:6,
    }
})