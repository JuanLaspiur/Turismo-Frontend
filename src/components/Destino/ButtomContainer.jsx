import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

function ButtomContainer() {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.heartIcon} onPress={() => alert('Heart icon pressed')}>
        <AntDesign
          name="heart"
          size={24}
          color="#FF5013"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Start')}
      >
        <Text style={styles.buttonText}>Let GO trip!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  heartIcon: {
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: '#25B3AD',
    paddingVertical: 15,
    paddingHorizontal: 72,
    borderRadius: 19,
  },
  buttonText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

export default ButtomContainer;
