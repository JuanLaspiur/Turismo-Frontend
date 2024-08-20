import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Swiper from "react-native-swiper";

function Tabloide() {
  return (
    <Swiper style={styles.wrapper}
      autoplay={true}
      autoplayTimeout={8}
          dotColor="rgba(128, 128, 128, 0.0)"
      activeDotColor="rgba(128, 128, 128, 0.0)"
    >
      <View style={styles.tabloide}>
        <Image style={styles.tabloideImg} source={require('../../../assets/images (1).jpeg')} />
      </View>
      <View style={styles.tabloide}>
        <Image style={styles.tabloideImg} source={require('../../../assets/favicon.png')} />
      </View>
      <View style={styles.tabloide}>
        <Image style={styles.tabloideImg} source={require('../../../assets/images (1).jpeg')} />
      </View>
    </Swiper>
  );
}

export default Tabloide;

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  tabloide: {
    width: '92%',
    height: 170,
    marginTop: 29,
    marginHorizontal: 'auto',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabloideImg: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
