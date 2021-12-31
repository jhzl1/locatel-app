import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "../theme/homeTheme";

const Balance = () => {
  return (
    <View style={styles.balanceContainer}>
      <LinearGradient
        colors={["#67BB37", "#00953E"]}
        style={{ ...StyleSheet.absoluteFillObject, borderRadius: 15 }}
      />
      <Text style={styles.balanceTitle}>Saldo disponible:</Text>
      <View style={styles.balanceContainerAmount}>
        <Icon name="wallet-outline" size={25} color="white" />

        <Text style={styles.totalBalance}>$200.00</Text>
      </View>
    </View>
  );
};

export default Balance;
