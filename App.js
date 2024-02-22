import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserDetails2 from "./src/screens/UserDetails2";

export default function App() {
  return (
    <View style={styles.container}>
      <UserDetails2 />
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
