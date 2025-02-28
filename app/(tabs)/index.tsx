import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded, error] = useFonts({
    GoudyBookletter: require("../../assets/fonts/GoudyBookletter1911-Regular.ttf"),
    QuicksandReg: require("../../assets/fonts/Quicksand-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoBook}>
        <View style={styles.logoTitle}></View>
      </View>
      <Text style={styles.header}>Sumi</Text>
      <Text style={styles.text}>Just One More Chapter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#393E41",
  },
  logoBook: {
    width: 50,
    height: 73,
    padding: 5,
    backgroundColor: "#F6F7EB",
    borderRadius: 2,
  },
  logoTitle: {
    width: 12,
    height: 30,
    borderRadius: 2,
    backgroundColor: "#393E41",
  },
  header: {
    fontSize: 36,
    fontFamily: "GoudyBookletter",
    color: "#F6F7EB",
  },
  text: {
    fontSize: 12,
    fontFamily: "QuicksandReg",
    color: "#F6F7EB",
  },
});
