import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { pages } from "../config/pages";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
        headerShadowVisible: false,
      }}
      initialRouteName="Login"
    >
      {pages.map((item, index) => (
        <Stack.Screen
          key={index}
          {...item}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Navigator;
