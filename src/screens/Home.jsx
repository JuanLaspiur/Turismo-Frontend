import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import Header from "../components/Header";
import ImagesContainer from "../components/Home/ImagesContainer";
import CardText from "../components/Home/CardText";
import ItemOptioms from "../components/Home/ItemOptioms";
import ButtomContainer from "../components/Home/ButtomContainer";

function Home() {
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
      <ImagesContainer name={"Imagen nombre"} lugar={"lugar, país"} />
      <CardText />
      <ItemOptioms distance={"2.3 KM"} temperature={"17 °C"} value={"4.5"} />
      <ButtomContainer />
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

export default Home;
