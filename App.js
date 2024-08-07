import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

export default function App() {
  const [origin, setOrigin] = useState({
    latitude: 41.40338,
    longitude: 2.17403,
  });
  const [destination, setDestination] = useState({
    latitude: 41.40338,
    longitude: 2.17993,
  });

  return (
    <View style={styles.container}>
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
        />
        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(direction) => {
            setDestination(direction.nativeEvent.coordinate);
          }}
        />
     {/*   <Polyline
          coordinates={[origin, destination]}
          strokeColor="pink"
          strokeWidth={10}
        /> */}

        {/* 
   <MapViewDirections
      origin={origin}
      destination{destination}
      apikey={env.apiKey}
       strokeColor="pink"
       strokeWidth={20}
    /> */}
      </MapView>
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
