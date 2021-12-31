import React, { FC } from "react";
import { Image, Text, useWindowDimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";

interface Props {
  titlePage: string;
  buttomBack?: boolean;
  children: JSX.Element | JSX.Element[];
}

const PageContainer: FC<Props> = ({
  titlePage,
  children,
  buttomBack = false,
}) => {
  const { height } = useWindowDimensions();

  const { goBack } = useNavigation();

  return (
    <>
      <View style={{ padding: 10, height, paddingTop: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/locatel-color.jpg")}
            style={{
              width: 200,
              height: 40,
              resizeMode: "contain",
              marginBottom: 20,
            }}
          />
        </View>

        <Text style={tailwind("font-bold text-green-700 text-2xl")}>
          {titlePage}
        </Text>

        {children}
      </View>
      {buttomBack && (
        <View
          style={{
            position: "absolute",
            top: 15,
            left: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={tailwind("bg-gray-200 rounded-full p-2")}
            onPress={() => goBack()}
          >
            <Icon name="arrow-back-outline" size={25} color="#334155" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default PageContainer;
