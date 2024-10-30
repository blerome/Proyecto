
import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage= require("../../assets/images/Alertazul.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
            <ImageViewer  imgSource={PlaceholderImage}/>
      </View>
         </View>

  );
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
     alignItems: "center",
    backgroundColor: "#7CDEEF",
  },
    
  text:{
    color: "white",
    fontSize: 28,
   },

   button:
   {  
    fontSize: 20,
    textDecorationLine: "underline",
    color:  "white",
   },

  
   imageContainer: {
    flex: 1,
    justifyContent:"center",

   },

});
