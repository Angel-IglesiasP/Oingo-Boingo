import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f92d48",
        tabBarStyle: {
          backgroundColor: "#151314",
          borderColor: "#151314",
          height: 65,
          paddingBottom: 6,
          paddingTop: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: "New",
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="radio"
        options={{
          title: "Radio",
          tabBarIcon: ({ color }) => (
            <Ionicons name="radio" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="my-library-music" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
