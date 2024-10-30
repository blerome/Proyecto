import { Text, View, StyleSheet,TextInput } from "react-native";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import * as React from 'react';
import { useState } from "react";
import { RadioButton } from 'react-native-paper';


export default function ReportesScreen() {
  const [checked, setChecked] = React.useState('first');
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectedImage, setSelectedImage] = useState<string | undefined >(
undefined
  );

  const pickImageAsync = async () =>{
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
     });
if(!result.canceled){
  setSelectedImage(result.assets[0].uri);
  console.log(result);
}else{
  alert("No seleccionaste ninguna Imagen");
}

  }


    return (
      <View style={styles.container}>
        <Text style={styles.text}>Generar Reporte</Text>
        <TextInput
        style={styles.InputText}
                defaultValue="CP"
      />
       <TextInput
        style={styles.InputText}
                defaultValue="Dirección"
      />
       <TextInput
        style={styles.InputText}
                defaultValue="Calle"

               
      />
       <RadioButton.Group
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      >

<View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="Bajo" color="blue" />
          <Text>Bajo</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="Medio" color="orange" />
          <Text>Medio</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="Alto" color="red" />
          <Text>Alto</Text>
        </View>
      </RadioButton.Group>
      <Text>El riesgo es: {selectedValue}</Text>
      
    

      <View style={styles.footerContainer}>

        <Button 
        onPress={pickImageAsync}
        label="Agregar imagen" theme="primary"/>
        <Button label="Guardar foto"/>
        </View> 
      </View>
      
  
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#56BADE",
    },  
    text:{
     color: "white",
     fontSize: 38,
    },

    InputText:{
      height: 40,
          width: 330,
          backgroundColor: "white",
          borderColor: 'gray',
          borderWidth: 1,
    },

    footerContainer:{
     flex: 1/3,
     alignItems: "center",
    
     

    },
  
  });