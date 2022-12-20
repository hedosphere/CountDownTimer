// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Pressable,
  Platform,
  StatusBar,
  SafeAreaView,
  Keyboard,
} from "react-native";
import Main from "./src/Main";
export default function App() {
  // console.log("StatusBar", StatusBar);
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={(e) => Keyboard.dismiss()} style={{ flex: 1 }}>
        <Main />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS != "ios" ? StatusBar.currentHeight + 1 : 0,
    backgroundColor: "red",
  },
});
