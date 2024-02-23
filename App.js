import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserDetails2 from "./src/screens/UserDetails2";
import UserInterests from "./src/screens/UserInterests";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <UserDetails2 /> */}
      <UserInterests />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 20,
  },
});
