import React, { FC } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import tailwind from "tailwind-rn";

interface Props extends TouchableOpacityProps {
  title: string;
  width?: string;
}

const CustomButtom: FC<Props> = ({ title, width = 72, ...props }) => {
  return (
    <TouchableOpacity
      style={tailwind(`bg-green-500 p-2 mt-2 rounded-xl w-${width}`)}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={tailwind("font-bold text-white text-center")}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtom;
