import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from "./src/screens/Start";
import Home from "./src/screens/Home";
import Destino from './src/screens/Destino'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" options={{ headerShown: false }} component={Start} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Destino" options={{ headerShown: false }} component={Destino} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
