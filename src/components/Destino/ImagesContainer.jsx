import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, ActivityIndicator } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const { height } = Dimensions.get('window');

function ImagesContainer({name, lugar}) {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator style={styles.loader} size="large" color="#000000" />;
  }

  return (
    <View style={styles.imagesContainer}>
      <Image
        source={require('../../../assets/imagenCarrucel.jpeg')}
        style={styles.image}
      />
      <Text style={styles.imagesText}>{name}</Text>
      <Text style={styles.imagessmallText}><MaterialCommunityIcons name="google-maps" size={14} color="white" /> {lugar}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    marginTop: 20,
    width: height * 0.40,
    height: height * 0.40,
    marginHorizontal: 'auto',
    borderRadius: 10,
    overflow: 'hidden', 
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imagesText: {
    position: 'absolute',
    bottom: 25,
    left: 9,
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Roboto_400Regular',  
  },
  imagessmallText: {
    position: 'absolute',
    bottom: 12,
    left: 9,
    color: 'white',
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',  
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default ImagesContainer;
