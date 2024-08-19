import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Header({ name }) {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  const navigation = useNavigation();

  const [backgroundColor, setBackgroundColor] = useState('rgba(195, 195, 195, 0.5)');

  if (!fontsLoaded) {
    return <ActivityIndicator style={styles.loader} size="large" color="#000000" />;
  }

  const handlePress = () => {
    setBackgroundColor('white');

  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handlePress}>
        <Ionicons
          name="chevron-back"
          style={[styles.icon, { backgroundColor: backgroundColor, padding: 10, borderRadius: 50 }]}
          size={24}
          color="black"
          onPress={()=>{navigation.navigate('Start')}}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    marginTop:5,
    paddingTop: 45,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top:-18,
    left: 10,
  },
  text: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 22,
    color: 'black',
    fontWeight: '700',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Header;
