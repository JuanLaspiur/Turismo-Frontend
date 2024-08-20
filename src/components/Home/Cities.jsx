import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Swiper from "react-native-swiper";
import { FontAwesome } from '@expo/vector-icons';
import CityItem from "./items/CityItem";

function Cities() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth < 400 ? screenWidth * 0.2 : 75;

  if (!fontsLoaded) return null;

  return (
    <>
      <Text style={styles.citiesH1}>Cities</Text>
      <Swiper
        showsButtons={true}
        style={styles.wrapper}
        dotColor="rgba(128, 128, 128, 0.0)"
        activeDotColor="rgba(128, 128, 128, 0.0)"
        prevButton={
          <FontAwesome name="chevron-left" size={12} color='#25B3AD' style={styles.arrow} />
        }
        nextButton={
          <FontAwesome name="chevron-right" size={12} color='#25B3AD' style={styles.arrow} />
        }
      >
        <View style={styles.cities}>
          <View style={styles.citiesContainer}>
            <CityItem name="Buenos Aires" imageSource={require('../../../assets/images (1).jpeg')} />
            <CityItem name="Catamarca" imageSource={require('../../../assets/images (1).jpeg')} />
            <CityItem name="Bahía Blanca" imageSource={require('../../../assets/images (1).jpeg')} />
            <CityItem name="Santiago del Estero" imageSource={require('../../../assets/images (1).jpeg')} />
          </View>
        </View>
        <View style={styles.cities}>
          <View style={styles.citiesContainer}>
            <CityItem name="Buenos Aires" imageSource={require('../../../assets/images (1).jpeg')} />
            <CityItem name="Catamarca" imageSource={require('../../../assets/images (1).jpeg')} />
            <CityItem name="Bahía Blanca" imageSource={require('../../../assets/images (1).jpeg')} />
            <CityItem name="Santiago del Estero" imageSource={require('../../../assets/images (1).jpeg')} />
          </View>
        </View>
      </Swiper>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 120,
  },
  cities: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  citiesH1: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 23,
    color: 'rgba(37, 179, 173, 0.8)',
    letterSpacing: 2,
    marginHorizontal: 17,
    marginTop: 15,
  },
  citiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    maxWidth: '100%',
  },
  arrow: {
    // Add styles if needed
  },
});

export default Cities;
