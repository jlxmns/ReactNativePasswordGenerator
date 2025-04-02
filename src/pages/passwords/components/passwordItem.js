import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export function PasswordItem({ data, removePassword }) {
  return (
    <Pressable onLongPress={ removePassword } style={styles.container}>
      <ThemedText>{data}</ThemedText>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b4454a",
    padding: 14,
    width: '100%',
    marginBottom: 14,
    borderRadius: 8,
  }
})