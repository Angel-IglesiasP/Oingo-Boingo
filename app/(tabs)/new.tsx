import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Band from "../components/iphoneUI";
import SongBanner from "../components/songBanner";

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
      <View style={styles.bodyHome}>
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
      </View>
      {/* Body component bottom*/}
      <Text style={styles.RecentlyPlayedText}>
        Bad Bunny&apos;s Road to Halftime
      </Text>
      <View style={styles.bodyHome}>
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
      </View>
      <Text style={styles.RecentlyPlayedText}>World of Bad Bunny {">"}</Text>
      <View style={styles.bodyHome}>
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
      </View>
      <Text style={styles.RecentlyPlayedText}>You Might Also Like{">"}</Text>
      <View style={styles.bodyHome}>
        <View>
          <Image
            source={require("@/assets/images/new1.jpg")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.smlTextNew}>Ay mi gatito miau miau</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/new2.jpg")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.smlTextNew}>Los skibidi se pusieron toilet</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/new3.jpg")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.smlTextNew}>Si tu novia no</Text>
        </View>
      </View>
      <SongBanner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
    overflow: "hidden",
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
    marginLeft: 8,
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
    paddingHorizontal: 10,
    gap: 10,
  },
  imgTopBody: {
    width: 330,
    height: 230,
    borderRadius: 10,
    marginTop: 3,
    resizeMode: "cover",
  },
  smlText: {
    color: "white",
    opacity: 0.5,
    marginBottom: 3,
    marginTop: 3,
    fontSize: 10,
    fontWeight: "300",
  },
  smlTextNew: {
    color: "white",
    marginTop: 4,
    fontSize: 12,
    fontWeight: "200",
  },
  RecentlyPlayedText: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 5,
    color: "#fcfbfb",
    fontSize: 20,
    fontWeight: "500",
  },
  imgBottomBody: {
    width: 160,
    height: 90,
    borderRadius: 10,
    marginTop: 0,
    resizeMode: "stretch",
  },
  albumText: {
    color: "white",
    marginTop: 3,
    fontSize: 20,
    fontWeight: "500",
  },
});
