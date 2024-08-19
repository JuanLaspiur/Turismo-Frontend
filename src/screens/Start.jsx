import React from "react";
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

function Start() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/startFondo.jpeg')}
        style={styles.background}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>Explore.</Text>
        <Text style={styles.textBlack}>Travel.</Text>
        <Text style={styles.textBlack}>Inspiré.</Text>
        <Text style={styles.textBlackSmall}>Life is about jornaly.</Text>
      </View>
      
      {/* Botón en la parte inferior */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Get Started <Text style={styles.arrow}>→</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: 'black'
  },
  background: {
    width: '100%',
    height: height, 
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.4
  },
  overlay: {
    position: 'absolute',
    top: 51, 
    left: 20,
  },
  text: {
    fontFamily: 'Roboto_400Regular', 
    fontSize: 57,
    fontWeight: '700',
    color: 'white',
    letterSpacing: 3, 
  },
  textBlack: {
    fontFamily: 'Roboto_400Regular', 
    fontSize: 57,
    fontWeight: '700',
    color: '#A1A1A1',
    letterSpacing: -2,
    marginTop:-15, 
    paddingHorizontal:5,
   // textShadowColor: '#B0B0B0', // Color de la sombra
   // textShadowOffset: { width: 10, height: 10 }, // Desplazamiento de la sombra
  //  textShadowRadius: 70, // Radio de la sombra
  },
  textBlackSmall: {
    fontFamily: 'Roboto_400Regular', 
    fontSize: 24,
    marginTop:-2,
    paddingHorizontal:13,
    fontWeight: '400',
    color: '#A1A1A1',
    textShadowColor: '#B0B0B0', 
    textShadowOffset: { width: 10, height: 10 }, 
    textShadowRadius: 70, 
  },
  button: {
    position: 'absolute',
    bottom: 90, 
    alignSelf: 'center', 
    backgroundColor: '#25B3AD',
    paddingVertical: 15,
    paddingHorizontal: 72,
    borderRadius: 19, 
  },
  buttonText: {
    fontFamily: 'Roboto_400Regular', 
    fontSize: 21,
    fontWeight: '700',
    color: 'white',
  }

});

export default Start;
