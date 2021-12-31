import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "../../theme/homeTheme";

const LogoutButtom = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 10,
        right: 12,
        width: 150,
      }}
    >
      <TouchableOpacity style={styles.loguotButtom} activeOpacity={0.8}>
        <Icon
          name="log-out-outline"
          size={15}
          color="white"
          style={{ marginRight: 2 }}
        />
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButtom;
