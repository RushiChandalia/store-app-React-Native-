import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
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
        <Text style={styles.header_login}>LOGIN</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#16056B",
  },
  home_header: {
    backgroundColor: "white",
    height: 475,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    opacity: 0.9,
  },
  header_login: {
    fontSize: 40,
    fontFamily: "montserrat_bold",
    fontWeight: "bold",
    marginLeft: 40,
    position: "relative",
    top: 80,
  },
});
