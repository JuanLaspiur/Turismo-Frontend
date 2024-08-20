import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Swiper from "react-native-swiper";
import { FontAwesome } from '@expo/vector-icons';

function DestinosCarrucell() {
  const screenWidth = Dimensions.get('window').width;
  const itemWidthDestino = screenWidth < 400 ? screenWidth * 0.30 : 75;

  return (
    <View style={styles.destinosCarrucell}>
      <Text style={styles.destinosH1}>Destinos</Text>
      <Swiper
            showsButtons={true}
            style={styles.wrapper}
               dotColor="rgba(128, 128, 128, 0.0)"
      activeDotColor="rgba(128, 128, 128, 0.0)"
            prevButton={
                <FontAwesome name="chevron-left" size={12} color='rgba(128, 128, 128, 0.5)' style={styles.arrow} />
            }
            nextButton={
                <FontAwesome name="chevron-right" size={12} color='rgba(128, 128, 128, 0.5)' style={styles.arrow} />
            }
        >
      <View style={styles.destinosContainer}>
        <View style={[styles.destinosItem, { width: itemWidthDestino }]}></View>
        <View style={[styles.destinosItem, { width: itemWidthDestino }]}></View>
        <View style={[styles.destinosItem, { width: itemWidthDestino }]}></View>
      </View>

      <View style={styles.destinosContainer}>
        <View style={[styles.destinosItem, { width: itemWidthDestino }]}></View>
        <View style={[styles.destinosItem, { width: itemWidthDestino }]}></View>
        <View style={[styles.destinosItem, { width: itemWidthDestino }]}></View>
      </View>
      </Swiper>
    </View>
  );
}

export default DestinosCarrucell;

const styles = StyleSheet.create({
  destinosCarrucell: {
    paddingHorizontal: 10,
    width: '100%',
    height: 170,
    paddingBottom: 10,
  },
  destinosH1: {
    marginStart: 8,
    fontFamily: 'Roboto_400Regular',
    fontSize: 23,
    color: 'gray',
    letterSpacing: 2,
  },
  destinosContainer: {
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  destinosItem: {
    height: 120,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});
