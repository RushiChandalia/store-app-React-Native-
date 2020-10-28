import { StyleSheet } from "react-native";

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
    fontWeight: "bold",
    letterSpacing: 2,
  },
  header2: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 2,
    position: "relative",
    top: 15,
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
    fontWeight: "bold",
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
    fontWeight: "600",
    marginTop: 10,
    letterSpacing: 1,
  },
});

export default styles;
