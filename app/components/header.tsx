import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.leftCorner}>{"<"} Artists </Text>
      <View style={styles.iconContainer}>
        <Image
          source={require("../../assets/images/starIcon.png")}
          style={styles.favoriteIcon}
        />
        <Image
          source={require("../../assets/images/threeDotsIcon.png")}
          style={styles.favoriteIcon}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Image(13).jpg")}
          style={styles.imageArtist}
        />
        <Text style={styles.headerText}>Oingo Boingo {">"}</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  header: {
    position: "relative",
    width: "100%",
    height: 180,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#f2efef",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: -30,
  },

  leftCorner: {
    position: "absolute",
    top: 15,
    left: 15,
    color: "#df4343",
    fontSize: 16,
    fontWeight: "500",
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageArtist: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: "contain",
    borderColor: "#303030",
    borderWidth: 1,
  },

  iconContainer: {
    position: "absolute",
    top: 15,
    right: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  favoriteIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
