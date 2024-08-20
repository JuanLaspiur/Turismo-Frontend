import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import Header from "../components/Header";
import ImagesContainer from "../components/Destino/ImagesContainer";
import CardText from "../components/Destino/CardText";
import ItemOptioms from "../components/Destino/ItemOptioms";
import ButtomContainer from "../components/Destino/ButtomContainer";
import Swiper from "react-native-swiper";

function Destino() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#000000" />
    );
  }

  return (
    <View style={styles.container}>
      <Header name={"People Like"} />
      <Swiper
        showsButtons={true}
        style={styles.swiper}
        dotColor="rgba(128, 128, 128, 0.0)"
        activeDotColor="rgba(128, 128, 128, 0.0)">
          <View>
      <ImagesContainer name={"Imagen nombre"} lugar={"lugar, país"} />
      <CardText />
      <ItemOptioms distance={"2.3 KM"} temperature={"17 °C"} value={"4.5"} /><ButtomContainer /></View>
      <View>
      <ImagesContainer name={"Imagen nombre"} lugar={"lugar, país"} />
      <CardText />
      <ItemOptioms distance={"2.3 KM"} temperature={"17 °C"} value={"4.5"} /><ButtomContainer /></View>
      </Swiper>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Destino;
