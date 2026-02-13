import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          paddingTop: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: "New",
        }}
      />
      <Tabs.Screen
        name="radio"
        options={{
          title: "Radio",
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
        }}
      />
    </Tabs>
  );
}
