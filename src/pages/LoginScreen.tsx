import React from "react";
import { Image, useWindowDimensions, View } from "react-native";
import BackgroundGradient from "../components/BackgroundGradient";
import FormLogin from "../components/FormLogin";
import { styles } from "../theme/loginTheme";

const LoginScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <BackgroundGradient from="#67BB37" to="#00953E">
      <View style={[styles.container, { height: height - 100 }]}>
        <Image
          source={require("../assets/locatel_logo.png")}
          style={styles.imgLogo}
        />

        <FormLogin />
      </View>
    </BackgroundGradient>
  );
};

export default LoginScreen;
