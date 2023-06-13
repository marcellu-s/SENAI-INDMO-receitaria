import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import HomeScreen from './src/views/Home';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <HomeScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
