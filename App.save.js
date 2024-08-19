import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from 'react-native-maps-directions';


export default function App() {
  const [origin, setOrigin] = useState(null); // ¿Por qué no se ve
  const [destination, setDestination] = useState({
    latitude: -38.6994618,
    longitude: -62.273311,
  });

  const getLocationsPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'No se puede acceder a la ubicación');
      return;
    }

    let response = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: response.coords.latitude,
      longitude: response.coords.longitude
    };
    setOrigin(current);
  };

  useEffect(() => {
    getLocationsPermission();
  }, []);

  const icon = require('./assets/icon.png');

  return (
    <View style={styles.container}>
      {origin && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          <Marker
            draggable
            coordinate={origin}
            onDragEnd={(direction) => {
              setOrigin(direction.nativeEvent.coordinate);
            }}
            // image={icon} // Descomentar si quieres usar una imagen personalizada
          />
          <Marker
            draggable
            coordinate={destination}
            onDragEnd={(direction) => {
              setDestination(direction.nativeEvent.coordinate);
            }}
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
