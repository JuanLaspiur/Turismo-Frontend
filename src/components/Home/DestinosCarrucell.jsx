import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import Swiper from "react-native-swiper";
import { FontAwesome } from "@expo/vector-icons";
import DestinoItem from "./items/DestinoItem";

function DestinosCarrucell() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  const screenWidth = Dimensions.get("window").width;
  const itemWidthDestino = screenWidth < 400 ? screenWidth * 0.3 : 75;

  if (!fontsLoaded) return null;

  return (
    <View style={styles.destinosCarrucell}>
      <Text style={styles.destinosH1}>Destinos</Text>
      <Swiper
        showsButtons={true}
        style={styles.swiper}
        dotColor="rgba(128, 128, 128, 0.0)"
        activeDotColor="rgba(128, 128, 128, 0.0)"
        prevButton={
          <FontAwesome
            name="chevron-left"
            size={12}
            color="rgba(128, 128, 128, 0.5)"
            style={styles.arrow}
          />
        }
        nextButton={
          <FontAwesome
            name="chevron-right"
            size={12}
            color="rgba(128, 128, 128, 0.5)"
            style={styles.arrow}
          />
        }
      >
        <View style={styles.destinosContainer}>
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/images (1).jpeg')}
            itemWidth={itemWidthDestino}
          />
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/images (1).jpeg')}
            itemWidth={itemWidthDestino}
          />
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/images (1).jpeg')}
            itemWidth={itemWidthDestino}
          />
        </View>

        <View style={styles.destinosContainer}>
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/adaptive-icon.png')}
            itemWidth={itemWidthDestino}
          />
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/images (1).jpeg')}
            itemWidth={itemWidthDestino}
          />
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/images (1).jpeg')}
            itemWidth={itemWidthDestino}
          />
        </View>
      </Swiper>
      <Swiper
        showsButtons={true}
        style={styles.swiper}
        dotColor="rgba(128, 128, 128, 0.0)"
        activeDotColor="rgba(128, 128, 128, 0.0)"
        prevButton={
          <FontAwesome
            name="chevron-left"
            size={12}
            color="rgba(128, 128, 128, 0.5)"
            style={styles.arrow}
          />
        }
        nextButton={
          <FontAwesome
            name="chevron-right"
            size={12}
            color="rgba(128, 128, 128, 0.5)"
            style={styles.arrow}
          />
        }
      >
        <View style={styles.destinosContainer}>
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/images (1).jpeg')}
            itemWidth={itemWidthDestino}
          />
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/images (1).jpeg')}
            itemWidth={itemWidthDestino}
          />
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/images (1).jpeg')}
            itemWidth={itemWidthDestino}
          />
        </View>

        <View style={styles.destinosContainer}>
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/adaptive-icon.png')}
            itemWidth={itemWidthDestino}
          />
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/images (1).jpeg')}
            itemWidth={itemWidthDestino}
          />
          <DestinoItem
            name="Gola"
            imageSource={require('../../../assets/images (1).jpeg')}
            itemWidth={itemWidthDestino}
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  destinosCarrucell: {
    paddingHorizontal: 10,
    width: "100%",
    height: 300,
    paddingBottom: 10,
  },
  destinosH1: {
    marginStart: 8,
    fontFamily: "Roboto_400Regular",
    fontSize: 23,
    color: 'rgba(37, 179, 173, 0.8)',
    letterSpacing: 2,
  },
  swiper: {
    height: '100%',  // Make sure Swiper takes up the full height of its container
  },
  destinosContainer: {
    paddingVertical: 5,
    flexDirection: "row",
    gap: 8,
  },
});

export default DestinosCarrucell;

