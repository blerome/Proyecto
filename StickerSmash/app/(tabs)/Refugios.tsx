import { Text, View, StyleSheet } from "react-native";

export default function RefugiosScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Localizar </Text>
      </View>
  
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#CC92C3",
    },  
    text:{
     color: "white",
    },
  
  });