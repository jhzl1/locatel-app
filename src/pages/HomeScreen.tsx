import React from "react";
import { Text, View } from "react-native";

import Balance from "../components/Balance";
import ButtomShortcut from "../components/ui/ButtomShortcut";
import LogoutButtom from "../components/ui/LogoutButtom";
import PageContainer from "../components/ui/PageContainer";
import { styles } from "../theme/homeTheme";

const HomeScreen = () => {
  return (
    <PageContainer titlePage="Inicio">
      <Balance />

      <View>
        <Text style={[styles.title, { marginBottom: 10 }]}>Acciones</Text>

        <ButtomShortcut
          from="#FBB648"
          to="#E56525"
          title="Dar vueltos"
          goTo="Cashback"
        />
        <ButtomShortcut
          from="#7e22ce"
          to="#a21caf"
          title="Movimientos"
          goTo="History"
        />
      </View>

      <LogoutButtom />
    </PageContainer>
  );
};

export default HomeScreen;
