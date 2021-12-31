import React from "react";
import { Text, View } from "react-native";
import CustomButtom from "./ui/CustomButtom";
import CustomInput from "./ui/CustomInput";

const FormValueCashback = () => {
  return (
    <View>
      <CustomInput
        placeholder="Monto"
        width="full"
        keyboardType="numeric"
        maxLength={2}
        nameIcon="logo-usd"
      />

      <CustomButtom title="Dar vueltos" width="full" />
    </View>
  );
};

export default FormValueCashback;
