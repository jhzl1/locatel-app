import React, { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "../theme/cashbackTheme";
import CustomButtom from "./ui/CustomButtom";

interface Props {
  setShowClientInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClientInfo: FC<Props> = ({ setShowClientInfo }) => {
  return (
    <View>
      <Text style={styles.textInfo}>
        Nombre: <Text style={styles.fontBold}>Omar Campos</Text>
      </Text>
      <Text style={styles.textInfo}>
        Cédula: <Text style={styles.fontBold}>26396720</Text>
      </Text>
      <Text style={styles.textInfo}>
        Número de tarjeta:{" "}
        <Text style={styles.fontBold}>**** **** **** 4456</Text>
      </Text>

      <CustomButtom
        title="Atrás"
        width="28"
        onPress={() => setShowClientInfo(false)}
      />
    </View>
  );
};

export default ClientInfo;
