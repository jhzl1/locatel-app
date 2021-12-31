import React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface Props {
  children: JSX.Element | JSX.Element[];
  from: string;
  to: string;
}

const BackgroundGradient = ({ children, from, to }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[from, to]}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      {children}
    </View>
  );
};

export default BackgroundGradient;
