import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "../Text";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
function Listing({
  title,
  subtitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={{ marginLeft: 10, justifyContent: "center" }}>
          <AppText style={styles.title}>{title}</AppText>
          {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "600",
  },
  subtitle: {
    color: colors.medium,
  },
});

export default Listing;
