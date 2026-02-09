import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.tabContainer}>
        <Foundation name="home" size={28} color="#7b7e83" />
        <Text style={styles.tabText}>Home</Text>
      </View>

      <View style={styles.tabContainer}>
        <Ionicons name="grid" size={28} color="#7b7e83" />
        <Text style={styles.tabText}>New</Text>
      </View>

      <View style={styles.tabContainer}>
        <Ionicons name="radio" size={28} color="#7b7e83" />
        <Text style={styles.tabText}>Radio</Text>
      </View>

      <Pressable
        style={styles.tabContainer}
        onPress={() => Alert.alert("Alert", "Alert Button pressed")}
      >
        <MaterialIcons name="my-library-music" size={28} color="#f92d48" />
        <Text style={styles.activeTab}>Library</Text>
      </Pressable>

      <View style={styles.tabContainer}>
        <FontAwesome name="search" size={28} color="#7b7e83" />
        <Text style={styles.tabText}>Search</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    height: 58,
    backgroundColor: "#151314",
    bottom: 0,
    position: "absolute",
    width: "100%",
  },

  tabContainer: {
    flexDirection: "column",
    alignItems: "center",
  },

  tabText: {
    fontSize: 12,
    color: "#7b7e83",
    fontWeight: "400",
  },

  activeTab: {
    color: "#f92d48",
    fontWeight: "400",
  },
});
