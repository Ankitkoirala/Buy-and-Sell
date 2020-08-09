import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Apptext from "../components/Text";
import AppButton from "../components/Button";

function WelcomeScreen(props) {
  return (
    <>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <ImageBackground
        blurRadius={10}
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text style={styles.tagline}>Sell Everything</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            onPress={() => props.navigation.navigate("Login")}
          />
          <AppButton
            title="Register"
            color="secondary"
            onPress={() => props.navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonView: {
    width: "100%",
    margin: 10,
    padding: 10,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    // alignSelf: "center",
  },
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonContainer: {
    padding: 10,
    width: "100%",
  },
});

export default WelcomeScreen;
