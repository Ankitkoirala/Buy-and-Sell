import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";

import Button from "./Button";
import ActivityIndicator from "./ActiityIndicator";

import Card from "./Card";
import colors from "../config/colors";
import listingApi from "../api/listingss";
import Routes from "../navigation/Routes";
import AppText from "./Text";
import useApi from "./hooks/useApi";

function ListingScreen({ navigation }) {
  const getListingsApi = useApi(listingApi.getListings);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  const onRefreshing = () => {
    setRefreshing({ refreshing: true }, () => {
      getListingsApi.data();
    });
  };

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldnt retreive the listings</AppText>
            <Button title="Retry" onPress={loadListings} />
          </>
        )}

        <FlatList
          data={getListingsApi.data}
          keyExtractor={(list) => list.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"Rs " + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(Routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
          showsVerticalScrollIndicator={false}
          refreshing={refreshing}
          onRefresh={() => onRefreshing}
        />
      </Screen>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.grey,
    padding: 20,
  },
});

export default ListingScreen;
