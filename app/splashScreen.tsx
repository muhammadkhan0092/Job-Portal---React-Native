import {Image, StyleSheet, View, Dimensions, Text} from "react-native";

import {Colors} from "@/constants/theme";
const { width, height } = Dimensions.get('window');
//
//
// export default function SplashScreen() {
//     return(
//         <View style={Mstyles.container}>
//             <Image
//                 source={images.splash}
//             />
//             <Text style={Mstyles.textOne}>Real Scout</Text>
//             <Text
//                 style={Mstyles.textTwo}>Connecting You to Your Ideal Home.</Text>
//         </View>
//     )
// }
// const Mstyles = StyleSheet.create({
//     container:{
//         flex: 1,
//         width: width,
//         height: height,
//         flexDirection:'column',
//         backgroundColor:'white',
//         alignItems:"center",
//         justifyContent:'center',
//     },
//     image:{
//         width:width*0.30,
//         height:height*0.120,
//     },
//     textOne:{
//         color:Colors.light.darkBlue,
//         fontSize:height*0.021,
//         letterSpacing:0.10,
//         marginTop:height*0.010,
//         fontWeight:'900'
//     },
//     textTwo:{
//         marginTop:height*0.012,
//         fontWeight:'500',
//         fontSize:height*0.012,
//         letterSpacing:0.10,
//         lineHeight:height*0.012,
//         color:Colors.light.textColorSilver
//     }
// })