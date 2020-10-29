import React, { useState } from "react";
import Home from "./components/home";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Login from "./components/login";
import Signup from "./components/signup";

const getFonts = () =>
  Font.loadAsync({
    montserrat_regular: require("./assets/Fonts/Montserrat-Regular.ttf"),
    montserrat_bold: require("./assets/Fonts/Montserrat-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Home />;
    //  <Login />);
    // return <Signup />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
