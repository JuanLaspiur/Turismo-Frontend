// items/DestinoItem.js
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

function DestinoItem({ name, imageSource, onPress }) {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  const screenWidth = Dimensions.get("window").width;
  const itemWidthDestino = screenWidth < 400 ? screenWidth * 0.3 : 75;

  if (!fontsLoaded) return null;

  return (
    <TouchableOpacity style={[styles.destinosItem, { width: itemWidthDestino }]} onPress={onPress}>
      <Image source={imageSource} style={styles.destinosItemImg} />
      <Text style={styles.destinosItemText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  destinosItem: {
    height: 120,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    overflow: 'hidden',
  },
  destinosItemImg: {
    width: "98%",
    height: "70%",
    borderRadius: 10,
    marginHorizontal: 'auto',
  },
  destinosItemText: {
    color: "gray",
    textAlign: "center",
    padding: 1,
  },
});

export default DestinoItem;
