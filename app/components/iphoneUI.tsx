import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Band() {
  return (
    <View style={styles.band}>
      <Text style={styles.bandText}>10:17</Text>
      <Image
        source={require("../../assets/images/banner.png")}
        style={styles.bandImage}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  band: {
    width: "100%",
    height: 20,
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 15,
    top: 5,
    position: "absolute",
  },
  bandText: {
    color: "white",
    fontWeight: 600,
    left: 15,
  },
  bandImage: {
    width: 60,
    height: 50,
    resizeMode: "contain",
  },
});
