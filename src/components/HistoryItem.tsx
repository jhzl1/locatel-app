import React, { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "../theme/historyTheme";

interface Props {
  amount: number;
}

const HistoryItem: FC<Props> = ({ amount }) => {
  return (
    <View style={styles.historyItemContainer}>
      <View>
        <Text>
          Cliente: <Text style={styles.fontBold}>Nombre cliente</Text>{" "}
        </Text>
        <Text>
          Fecha: <Text style={styles.fontBold}>12/12/2021</Text>{" "}
        </Text>
      </View>
      <View>
        <Text style={styles.amount}>${amount} </Text>
      </View>
    </View>
  );
};

export default HistoryItem;
