import React from "react";
import { StyleSheet, View, ActivityIndicator, Dimensions, Text } from "react-native";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Header from "../components/Header";
import ImagesContainer from "../components/Home/ImagesContainer";
import CardText from "../components/Home/CardText";

function Home() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator style={styles.loader} size="large" color="#000000" />;
  }

  return (
    <View style={styles.container}>
      <Header name={'People Like'} />
      <ImagesContainer name={'Imagen nombre'} lugar={'lugar, país'} />
      <CardText />
      <View style={styles.itemOption}>
        <View style={styles.item}><Text style={styles.itemText}><Feather name="send" size={14} color="black" />2.3 KM</Text></View>
        <View style={styles.item}><Text style={styles.itemText}><Feather name="sun" size={14} color="black" />17 °C</Text></View>
        <View style={styles.item}><Text style={styles.itemText}><AntDesign name="star" size={14} color="black" />4.5</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  itemOption: {
    width: '88%',
    marginHorizontal:'auto',
    height:60,
    display:'flex',
    flexDirection:'row',
    padding:5,
    gap:20
  },
  item: {
    width:'28%',
   height:'30',
   backgroundColor:'#C3C3C3',
   borderRadius:40,
   alignItems:'center',
   justifyContent:'center',
  },
  itemText:{
    fontWeight:'700',
    color:'#525252'
  }

});

export default Home;
