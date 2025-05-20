// components/CravingButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CravingButton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.button} onPress={() => router.push('/breathing')}>
      <View style={styles.content}>
        <Ionicons name="alert-circle" size={20} color="#FFF" />
        <Text style={styles.text}>I'm Craving Right Now</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CravingButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF0000', // red background as in your original example
    padding: 16,
    borderRadius: 12,
    marginVertical: 16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});
