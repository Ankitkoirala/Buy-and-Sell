import React from "react";
import { View, StyleSheet } from "react-native";
import IconComponent from "./Icon";
import AppText from "./Text";
import { TouchableOpacity } from "react-native-gesture-handler";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IconComponent
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
  },
});

export default CategoryPickerItem;
