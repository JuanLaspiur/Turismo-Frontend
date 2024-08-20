import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

function ItemOptioms({ distance, temperature, value }) {
  return (
    <View style={styles.itemOption}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          <Feather name="send" size={16} color="#1EB3B1" />{" "}{distance}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          <Feather name="sun" size={16} color="#1EB3B1" />{" "}{temperature}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          <AntDesign name="star" size={16} color="#1EB3B1" />{" "}{value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemOption: {
    width: '88%',
    marginHorizontal: 'auto',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    gap: 20,
  },
  item: {
    width: '28%',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontWeight: '700',
    color: '#525252',
  }
});

export default ItemOptioms;
