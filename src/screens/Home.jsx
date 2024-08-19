import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import Header from "../components/Header";
import ImagesContainer from "../components/Home/ImagesContainer";
import CardText from "../components/Home/CardText";
import ItemOptioms from "../components/Home/ItemOptioms";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
function Home() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  const navigation = useNavigation();

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
      {/*  */}
      <View style={styles.buttonsContainer} >
        <AntDesign name="heart" size={24} color="#FF5013" style={{backgroundColor:'white',padding:13, borderRadius:50,  elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8, 
    shadowRadius: 2, }}
     />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Start")}
        >
          <Text style={styles.buttonText}>
            Let GO trip!
          </Text>
        </TouchableOpacity>
      </View>
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
  buttonsContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  button: {
    backgroundColor: "#25B3AD",
    paddingVertical: 15,
    paddingHorizontal: 72,
    borderRadius: 19,
  },
  buttonText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});

export default Home;
