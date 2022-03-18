import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styless.container}>
      <Text style={styles.title}>David Alexandre DevOps</Text>
      <Text>with Expo.io</Text>
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

const styless = StyleSheet.create({
title:{
  fontSize:28
}
});
