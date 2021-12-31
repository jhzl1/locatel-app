import React, { FC } from "react";
import { View } from "react-native";
import CustomButtom from "./ui/CustomButtom";
import CustomInput from "./ui/CustomInput";

interface Props {
  setShowClientInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormCashback: FC<Props> = ({ setShowClientInfo }) => {
  return (
    <View>
      <CustomInput
        placeholder="Cédula cliente"
        width="full"
        keyboardType="numeric"
      />

      <CustomButtom
        title="Buscar"
        width="full"
        onPress={() => setShowClientInfo(true)}
      />
    </View>
  );
};

export default FormCashback;
