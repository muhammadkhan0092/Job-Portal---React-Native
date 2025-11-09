import {Image, StyleSheet, Text, View} from "react-native";
import icons from "@/constants/icons";
const RatingsView = (props:ratingsProps)=>{
    const {ratingContainer,ratingStar,ratingText} = props;
   return (
       <View style={ratingContainer}>
           <Image style={ratingStar} source={icons.star}/>
           <Text style={ratingText}>4.5</Text>
       </View>
   )
}
export default RatingsView;
