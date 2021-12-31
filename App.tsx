import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigator/Navigator";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#67BB37" />

      <Navigator />
    </NavigationContainer>
  );
};

export default App;
