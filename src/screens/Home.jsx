import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Tabloide from "../components/Home/Tabloide";
import Cities from "../components/Home/Cities";
import DestinosCarrucell from "../components/Home/DestinosCarrucell";

function Home() {
  return (
    <ScrollView style={styles.container}>
      <Tabloide />
      <Cities />
      <DestinosCarrucell />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
