import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import ListItem from "../components/list/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/list/ListItemSeperator";
import ListItemDeleteAction from "../components/list/ListItemDeleteAction";

const initMessages = [
  {
    id: 1,
    title: "T1",
    descriotion:
      "asdfhaskjdfhjsadhfkjsahdfkjasf,asjdhfjksahdjkf askdjfhkjasd hfkjashdfkj askldjfhlaskdj fhkjh ",
    image: require("../assets/mula.jpg"),
  },
  {
    id: 2,
    title: "T2 ",
    descriotion: "D2",
    image: require("../assets/mula.jpg"),
  },
];

function MessagesScree(props) {
  const [messages, setMessages] = useState(initMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handelDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            subtitle={item.descriotion}
            onPress={() => console.log("My hero", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handelDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              descriotion: "D2",
              image: require("../assets/mula.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessagesScree;
