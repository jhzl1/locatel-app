import React, { FC, useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import tailwind from "tailwind-rn";
import Icon from "react-native-vector-icons/Ionicons";

interface Props extends TextInputProps {
  width?: string;
  nameIcon?: string;
}

const CustomInput: FC<Props> = ({ width = "72", nameIcon, ...props }) => {
  const [value, setValue] = useState("");

  const styles = {
    input: tailwind(
      `bg-gray-100 px-3 rounded-xl w-${width} my-1 flex-row items-center`
    ),
  };

  return (
    <View style={styles.input}>
      {nameIcon && <Icon name={nameIcon} size={17} />}

      <TextInput
        style={{ flex: 1 }}
        // onChangeText={onChangeText}
        // value={text}
        {...props}
      />
    </View>
  );
};

export default CustomInput;
