import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, useSafeAreaInsets  } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function Other() {
  const insets = useSafeAreaInsets();
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaProvider style={{ backgroundColor: "#000000"}}>
    <View style={{ flex: 1, paddingTop: insets.top }}>
          <Text style={styles.parrafo}>Other component</Text>
      </View>

      <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button
          title="Right button"
          onPress={() => alert(text)}
        />
      </View>

      <Link href="/">Go Home</Link>
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: "#ffffff",
    borderColor: "#ffffff",
    padding: 10,
  },
});