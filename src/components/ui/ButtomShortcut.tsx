import { useNavigation } from "@react-navigation/core";
import React, { FC, useEffect, useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import tailwind from "tailwind-rn";

interface Props {
  from: string;
  to: string;
  title: "Dar vueltos" | "Movimientos";
  goTo: string;
}

const ButtomShortcut: FC<Props> = ({ from, to, title, goTo }) => {
  const styles = {
    shortcutContainer: tailwind(`my-1 p-5 items-center`),
    titleShortcut: tailwind("font-bold text-white text-lg"),
  };

  const [icon, setIcon] = useState("ellipse-outline");

  const { navigate } = useNavigation();

  useEffect(() => {
    if (title === "Dar vueltos") {
      setIcon("cash-outline");
    } else if (title === "Movimientos") {
      setIcon("analytics-outline");
    }
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(goTo as never)}
    >
      <View style={styles.shortcutContainer}>
        <LinearGradient
          colors={[from, to]}
          style={{ ...StyleSheet.absoluteFillObject, borderRadius: 15 }}
        />

        <Icon name={icon} size={40} color="white" />

        <Text style={styles.titleShortcut}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtomShortcut;
