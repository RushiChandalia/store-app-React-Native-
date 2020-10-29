import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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
          <Text
            style={{
              color: "white",
              fontFamily: "montserrat_bold",
              fontSize: 15,
            }}
          >
            LOGIN
          </Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={signup}>
          <Text style={styles.signup_button}>Dont Have An Account?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "white",
  },
  home_header: {
    backgroundColor: "#16056B",
    height: 475,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
  },
  header: {
    alignItems: "center",
    position: "relative",
    top: 70,
  },
  header1: {
    color: "white",
    fontSize: 45,

    letterSpacing: 2,
    fontFamily: "montserrat_bold",
  },
  header2: {
    color: "white",
    fontSize: 15,

    letterSpacing: 2,
    position: "relative",
    top: 15,
    fontFamily: "montserrat_bold",
  },
  login_container: {
    position: "relative",
    top: 125,
    justifyContent: "center",
    alignItems: "center",
  },
  login_button: {
    fontSize: 15,
    textTransform: "uppercase",

    width: 110,
    height: 45,
    backgroundColor: "#16056B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: 2,
    opacity: 0.9,
  },
  signup_button: {
    fontSize: 15,
    textTransform: "uppercase",

    marginTop: 10,
    letterSpacing: 1,
    fontFamily: "montserrat_regular",
  },
});
