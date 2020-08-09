import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import expoPushTokenApi from "../../api/expoPushToken";

export default useNotifications = (notificationListner) => {
  useEffect(() => {
    registerPushNotifucation();

    if (notificationListner) Notifications.addListener(notificationListner);
  }, []);

  const registerPushNotifucation = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();

      expoPushTokenApi.register(token);
      console.log(token);
    } catch (error) {
      console.log("error geting notified", error);
    }
  };
};
