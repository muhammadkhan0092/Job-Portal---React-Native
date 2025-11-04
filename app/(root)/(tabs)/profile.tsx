import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context/src/SafeAreaView.web";
import images from "@/constants/images";
import icons from "@/constants/icons";
interface SettingsItemProps{
    text: string,
    icon:any,
    onPress:()=>void
}
export function CustomSpacer(){
    return (
        <View style={styles.spacerStyle}/>
    )
}
export function SettingsItem(
    {text,icon,onPress}:SettingsItemProps
){
    return(
        <TouchableOpacity style={styles.settingsItemContainer} onPress={onPress}>
            <Image style={styles.settingsIcon} source={icon}/>
            <Text style={styles.settingsText}>{text}</Text>
            <Image style={styles.settingsForward} source={icons.rightArrow}/>
        </TouchableOpacity>
    )
}
const Profile = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topBarContainer}>
                <Text style={styles.topBarText}>Profile</Text>
                <Image style={styles.topBarImage} source={icons.bell}/>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.avatar} source={images.avatar}/>
                <Image style={styles.editIcon} source={icons.edit}/>
            </View>
            <Text style={styles.nameStyle}>Muhammad Khan</Text>
            <CustomSpacer/>
            <View style={{marginTop:12}}/>
            <SettingsItem text="My Booking" icon={icons.calendar} onPress={()=>{}}/>
            <SettingsItem text="Payments" icon={icons.wallet} onPress={()=>{}}/>
            <View style={{
                width:'100%',
                height:1,
                backgroundColor:'#8B5DFF1A',
                marginTop:12,
                marginBottom:12
            }}/>
            <SettingsItem text="Profile" icon={icons.person} onPress={()=>{}}/>
            <SettingsItem text="Notifications" icon={icons.bell} onPress={()=>{}}/>
            <SettingsItem text="Security" icon={icons.shield} onPress={()=>{}}/>
            <SettingsItem text="Language" icon={icons.language} onPress={()=>{}}/>
            <SettingsItem text="Help Center" icon={icons.info} onPress={()=>{}}/>
            <SettingsItem text="Invite Friends" icon={icons.people} onPress={()=>{}}/>
        </SafeAreaView>
    )
}
export default Profile;
const styles = StyleSheet.create(
    {
        profile:{
            fontSize:20,
            fontFamily:'Rubik-SemiBold',
            color:'#191D31'
        },
        container:{
            flex: 1,
            flexDirection:'column',
            backgroundColor:'white',
            paddingTop:16,
            paddingBottom:36,
            paddingHorizontal:20
        },
        topBarContainer:{
            flexDirection:'row',
            width:'100%',
            alignItems:'center'
        },
        topBarText:{
            flex:1,
            fontSize:20,
            fontFamily:'Rubik-SemiBold',
            color:'#191D31'
        },
        topBarImage:{
            width:22,
            height:22,
        },
        imageContainer:{
            alignSelf:'center',
            width:140,
            height:140,
            marginTop:16,
            position:'relative'
        },
        avatar:{
            borderRadius:100,
            width:140,
            height:140
        },
        editIcon:{
            width:29,
            height:29,
            position:'absolute',
            bottom:3,
            end:3
        },
        nameStyle:{
            fontSize:24,
            fontFamily:'Rubik-SemiBold',
            marginTop:14,
            alignSelf:'center'
        },
        spacerStyle:{
            width:'100%',
            height:1,
            backgroundColor:'#8B5DFF1A',
            marginTop:24
        },
        settingsItemContainer:{
            width:'100%',
            flexDirection:'row',
            paddingTop:12,
            paddingBottom:12,
            alignItems:'center',
        },
        settingsIcon:{
            width:28,
            height:28,
        },
        settingsText:{
            marginStart:12,
            flex:1,
            fontFamily:'RubikMedium',
            fontSize:18,
            color:'#191D31'
        },
        settingsForward:{
          width:20,
          height:20
        }
    }
)