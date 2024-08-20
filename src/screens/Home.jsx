import React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import Tabloide from "../components/Home/Tabloide";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import Cities from "../components/Home/Cities";

function Home() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
      });
    
  return (
    <ScrollView style={styles.container}>
      <Tabloide />
      <Cities />
        </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: "white",
  }
});

