import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, useSafeAreaInsets  } from 'react-native-safe-area-context';

export default function Other() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
    <View style={{ flex: 1, paddingTop: insets.top }}>
          <Text style={styles.parrafo}>Other component</Text>
      </View>
    </SafeAreaProvider>
    
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  parrafo: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30
  }
});