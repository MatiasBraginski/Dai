import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email'/>
      <TextInput placeholder='Contraseña'/>
      <Button title='Enviar' onPress={()=> console.log("Se presionó el boton")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
