import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Band from "../components/iphoneUI";

export default function NewScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Band />
      {/* header component */}
      <View style={styles.header}>
        <Text style={styles.leftCornerText}> New </Text>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatarIcon}
          />
        </View>
      </View>
      <SafeAreaView style={styles.bodyHome}>
        <View>
          <Text style={styles.smlText}>SUPER BOWL LX HALFTIME SHOW</Text>
          <Text style={styles.albumText}>
            Watch Bad Bunny&apos;s unforgettable
          </Text>
          <Text style={styles.albumText}>halftime show performance.</Text>
          <Image
            source={require("@/assets/images/new1.png")}
            style={styles.imgTopBody}
          />
        </View>
        <View>
          <Text style={styles.smlText}>NEW PUBLIC RELEASE</Text>
          <Text style={styles.albumText}>
            Bad Bunny&apos;s amazing new album
          </Text>
          <Text style={styles.albumText}>Apple is coming soon</Text>
          <Image
            source={require("@/assets/images/new2.png")}
            style={styles.imgTopBody}
          />
        </View>
      </SafeAreaView>
      {/* Body component bottom*/}
      <Text style={styles.RecentlyPlayedText}>
        Bad Bunny&apos;s Road to Halftime
      </Text>
      <SafeAreaView style={styles.bodyHome}>
        <View>
          <Image
            source={require("@/assets/images/bad1.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.smlTextNew}>Playlists</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/bad2.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.smlTextNew}>Albums</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/bad3.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.smlTextNew}>Radio</Text>
        </View>
      </SafeAreaView>
      <Text style={styles.RecentlyPlayedText}>World of Bad Bunny {">"}</Text>
      <SafeAreaView style={styles.bodyHome}>
        <View>
          <Image
            source={require("@/assets/images/bad4.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.smlTextNew}>Ay mi gatito miau miau</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/bad5.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.smlTextNew}>Los skibidi se pusieron toilet</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/bad6.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.smlTextNew}>Si tu novia no</Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    position: "relative",
    width: "100%",
    minHeight: 75,
    backgroundColor: "black",
  },
  leftCornerText: {
    color: "#fcfbfb",
    fontSize: 30,
    fontWeight: "500",
    position: "absolute",
    marginTop: 10,
    marginLeft: 5,
  },
  iconContainer: {
    position: "absolute",
    top: 15,
    right: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarIcon: {
    width: 38,
    height: 38,
    borderRadius: 25,
    resizeMode: "contain",
  },
  bodyHome: {
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: "black",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 5,
    paddingHorizontal: 4,
    gap: 5,
  },
  imgTopBody: {
    width: 330,
    height: 230,
    borderRadius: 10,
    marginTop: 3,
    resizeMode: "cover",
    marginLeft: 2,
  },
  smlText: {
    color: "white",
    opacity: 0.5,
    marginBottom: 3,
    marginLeft: 8,
    marginTop: 3,
    fontSize: 10,
    fontWeight: "300",
  },
  smlTextNew: {
    color: "white",
    marginLeft: 5,
    marginTop: 3,
    fontSize: 12,
    fontWeight: "200",
  },
  RecentlyPlayedText: {
    marginTop: 20,
    marginLeft: 15,
    color: "#fcfbfb",
    fontSize: 20,
    fontWeight: "500",
  },
  imgBottomBody: {
    width: 160,
    height: 90,
    borderRadius: 10,
    marginTop: 3,
    marginLeft: 5,
    resizeMode: "stretch",
  },
  albumText: {
    color: "white",
    marginTop: 3,
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "500",
  },
});
