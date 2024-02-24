import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen4 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
