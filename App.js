import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles/home_style";

export default function App() {
  function login() {
    console.log("LOGIN working");
  }
  function signup() {
    console.log("signup working");
  }
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.home_header}>
        <View style={styles.header}>
          <Text style={styles.header1}>GURUMUKH</Text>
          <Text style={styles.header1}>STORE</Text>
          <Text style={styles.header2}>STAY HOME, STAY SAFE</Text>
        </View>
      </View>
      <View style={styles.login_container}>
        <TouchableHighlight onPress={login} style={styles.login_button}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            LOGIN
          </Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback onPress={signup}>
          <Text style={styles.signup_button}>Dont Have An Account?</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}
