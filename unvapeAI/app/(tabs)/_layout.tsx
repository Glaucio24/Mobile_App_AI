import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
    return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#A3A3A3',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'AI Coach',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/aihome.png')}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{ 
          title: 'Progress',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/progress.png')}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }} 
      />
      <Tabs.Screen
        name="community"
        options={{ 
          title: 'Community',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/community.png')}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }} 
      />
      <Tabs.Screen
        name="profile"
        options={{ 
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/person.png')}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }} 
      />
    </Tabs>
  )
}

export default _layout