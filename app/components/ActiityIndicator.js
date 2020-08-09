import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActiityIndicator({ visible = false, style }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loadingActivity.json")}
        style={style}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    backgroundColor: "white",
    width: "100%",
    opacity: 0.8,
    zIndex: 1,
  },
});

export default ActiityIndicator;
