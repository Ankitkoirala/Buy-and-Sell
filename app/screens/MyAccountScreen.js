import React from "react";
import { View, StyleSheet, FlatList, StatusBar, Alert } from "react-native";
import Listing from "../components/list/Listing";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeperator from "../components/list/ListItemSeperator";
import Routes from "../navigation/Routes";
import useAuth from "../auth/useAuth";

const menuItem = [
  {
    title: "My listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: Routes.MESSAGING_SCREEN,
  },
];

function MyAccountScreen({ navigation }) {
  const { user, setUser, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Listing
          title={user.name}
          image={require("../assets/preety.jpg")}
          subtitle={user.email}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menu) => menu.title}
          renderItem={({ item }) => (
            <Listing
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <Listing
        isting
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#381b17" />}
        onPress={() =>
          Alert.alert("Logout", "Are You Sure?", [
            { text: "Yes", onPress: () => logOut() },
            { text: "No ", onPress: null },
          ])
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginBottom: 20,
  },
  // screen: {
  //   paddingTop: Constants.statusBarHeight,
  // },
  // email: {
  //   backgroundColor: colors.secondary,
  //   width: 50,
  //   height: 50,
  //   borderRadius: 25,
  //   marginRight: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // list: {
  //   backgroundColor: colors.primary,
  //   width: 50,
  //   height: 50,
  //   borderRadius: 25,
  //   marginRight: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // logout: {
  //   backgroundColor: "#ffe66d",
  //   width: 50,
  //   height: 50,
  //   borderRadius: 25,
  //   marginRight: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});

export default MyAccountScreen;
