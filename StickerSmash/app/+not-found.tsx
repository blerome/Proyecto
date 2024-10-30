 import{ View, StyleSheet}  from "react-native";
 import {Link, Stack} from  "expo-router";

 export default function NotFoundScreen(){
    return (
        <>
        <Stack.Screen options={{title: "Oops! Tenemos obstrucción de nubes"}}/>
        <View  style={styles.container}>
            <Link href="/" style={styles.button}> Volver al Inicio
            </Link>

        </View>
        
        
        
        </>

        
    );
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF9E18",
  },  
  text:{
    color: "fff",
   },

   button:
   {  
    fontSize: 20,
    textDecorationLine: "underline",
    color:  "#fff",
   },

});