import React, { useState } from "react";
import { Text, View } from "react-native";
import ClientInfo from "../components/ClientInfo";
import FormCashback from "../components/FormCashback";
import FormValueCashback from "../components/FormValueCashback";
import PageContainer from "../components/ui/PageContainer";
import { styles } from "../theme/cashbackTheme";

const CashbackScreen = () => {
  const [showClientInfo, setShowClientInfo] = useState(false);

  return (
    <PageContainer titlePage="Dar vueltos" buttomBack>
      <Text style={styles.title}>
        {showClientInfo
          ? "Datos del cliente"
          : "Por favor, ingrese los datos del cliente:"}
      </Text>

      <View style={styles.formContainer}>
        {showClientInfo ? (
          <>
            <ClientInfo setShowClientInfo={setShowClientInfo} />
            <View style={styles.formContainer}>
              <FormValueCashback />
            </View>
          </>
        ) : (
          <FormCashback setShowClientInfo={setShowClientInfo} />
        )}
      </View>
    </PageContainer>
  );
};

export default CashbackScreen;
