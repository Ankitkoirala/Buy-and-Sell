import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import useApi from "../components/hooks/useApi";
import ActiviyIndicator from "../components/ActiityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(4, "Too Short!")
    .max(12, "Too Long!")
    .label("Name"),
  email: Yup.string().required().email("Invalid Email").label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function RegisterScreen(props) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handelSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An error occured");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActiviyIndicator
        visible={registerApi.loading || loginApi.loading}
        style={styles.activityIndicator}
      />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handelSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            placeholder="Name"
            icon="account"
            name="name"
            autoCapitalized="none"
            autoCorrect={false}
            keyboardType="default"
            textContentType="username"
          />

          <AppFormField
            placeholder="Email"
            icon="email"
            name="email"
            autoCapitalized="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          <AppFormField
            autoCapitalized="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            textContentType="password"
            placeholder="password"
            secureTextEntry
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  activityIndicator: {
    marginTop: 20,
  },
});
export default RegisterScreen;
