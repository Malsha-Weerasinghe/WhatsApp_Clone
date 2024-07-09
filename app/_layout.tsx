import { Stack } from "expo-router";
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
      options={{
        headerShown: false,
      }} />
    </Stack>
  );
}

