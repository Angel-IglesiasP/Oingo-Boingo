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
      <View style={styles.playIconsContainer}>
        <Image
          source={require("../../assets/images/playButton.png")}
          style={styles.playIcon}
        />
        <Image
          source={require("../../assets/images/shuffleButton.png")}
          style={styles.playIcon}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  header: {
    position: "relative",
    width: "100%",
    height: 240,
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
    top: 40,
  },

  imageArtist: {
    width: 85,
    height: 85,
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

  playIconsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    gap: 12,
    bottom: -20,
  },

  playIcon: {
    width: 180,
    height: 75,
    resizeMode: "contain",
  },
});
