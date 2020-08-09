import { AsyncStorage } from "react-native";

import moment from "moment";

const prifix = "cache";

const expireInminutes = 5;

const isExpired = (item) => {
  const now = moment(Date.now());

  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minute") > expireInminutes;
};

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prifix + key, JSON.stringify(item));
  } catch (err) {
    console.log(err);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prifix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prifix + key);
      return null;
    }

    return item.value;
  } catch (err) {
    console.log(err);
  }
};
export default {
  store,
};
