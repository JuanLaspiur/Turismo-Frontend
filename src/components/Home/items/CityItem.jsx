import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

function CityItem({ name, imageSource, onPress }) {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth < 400 ? screenWidth * 0.2 : 75;

  if (!fontsLoaded) return null;

  return (
    <TouchableOpacity style={[styles.citiesItem, { width: itemWidth }]} onPress={onPress}>
      <Image source={imageSource} style={styles.citiesItemImg} />
      <Text style={styles.citiesItemText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  citiesItem: {
    backgroundColor: 'rgba(37, 179, 173, 0.7)',
    height: 75,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  citiesItemImg: {
    position: 'absolute',
    top: 5,
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  citiesItemText: {
    marginTop: 25,
    color: 'white',
    fontFamily: 'Roboto_400Regular',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default CityItem;
