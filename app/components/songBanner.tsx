import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SongBanner() {
  return (
    <View style={styles.playerBar}>
      <Image
        source={require("@/assets/images/new3.jpg")}
        style={styles.playerArt}
      />
      <View style={styles.playerTextWrap}>
        <Text numberOfLines={1} style={styles.playerTitle}>
          Nevermind (feat. Willy Woody)
        </Text>
      </View>
      <View style={styles.playerControls}>
        <Text style={styles.playerControlIcon}>▶︎</Text>
        <Text style={[styles.playerControlIcon, { marginLeft: 16 }]}>⏭︎</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playerBar: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 0,
    height: 64,
    backgroundColor: "#2a2a2a",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
  },
  playerArt: {
    width: 44,
    height: 44,
    borderRadius: 8,
  },
  playerTextWrap: {
    flex: 1,
  },
  playerTitle: {
    color: "#ffffff",
    fontSize: 14,
  },
  playerControls: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  playerControlIcon: {
    color: "#ffffff",
    fontSize: 18,
  },
});
