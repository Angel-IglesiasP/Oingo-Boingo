import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Band from "../components/iphoneUI";
import SongBanner from "../components/songBanner";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <Band />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.topBar}>
          <Text style={styles.back}>{"<"}</Text>
          <Image
            source={require("../../assets/images/threeDotsIcon.png")}
            style={styles.favoriteIcon}
          />
        </View>

        <Text style={styles.title}>Alternative</Text>

        <View style={styles.metaBlock}>
          <Text style={styles.metaLabel}>FEATURED PLAYLIST</Text>
          <Text style={styles.metaTitle}>ALT CTRL</Text>
          <Text style={styles.metaSubtitle}>Apple Music Alternative</Text>
        </View>

        {/* Featured card */}
        <View style={styles.featuredCard}>
          <Image
            source={require("@/assets/images/homeCard1.png")}
            style={styles.featuredImage}
          />
          <View style={styles.featuredOverlay}>
            <Text style={styles.featuredCaption}>
              Young the Giant returns with “Different Kind of Love.”
            </Text>
          </View>
        </View>
      </View>

      {/* Latest Songs */}
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Latest Songs</Text>
        <Text style={styles.sectionChevron}>{" >"}</Text>
      </View>

      <View style={styles.list}>
        <RowItem
          cover={require("@/assets/images/album1.png")}
          title="Homewrecker"
          subtitle="sombr"
        />
        <RowItem
          cover={require("@/assets/images/aint-this-the-life.jpg")}
          title="Different Kind Of Love"
          subtitle="Young the Giant"
        />
        <RowItem
          cover={require("@/assets/images/album2.png")}
          title="I'll Change for You"
          subtitle="Mitski"
        />
        <RowItem
          cover={require("@/assets/images/album3.png")}
          title="I Should Know Better"
          subtitle="Michael Marcagi"
        />
      </View>

      <SongBanner />
    </SafeAreaView>
  );
}

function RowItem({ cover, title, subtitle }: { cover: any; title: string; subtitle: string }) {
  return (
    <View style={styles.row}>
      <Image source={cover} style={styles.rowCover} />
      <View style={styles.rowTextWrap}>
        <Text numberOfLines={1} style={styles.rowTitle}>{title}</Text>
        <Text numberOfLines={1} style={styles.rowSubtitle}>{subtitle}</Text>
      </View>
      <Image
        source={require("@/assets/images/threeDotsIcon.png")}
        style={styles.rowDots}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    width: "100%",
    backgroundColor: "black",
    paddingTop: 8,
    paddingHorizontal: 14,
    paddingBottom: 6,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  back: {
    color: "#df4343",
    fontSize: 18,
    fontWeight: "600",
  },
  favoriteIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  title: {
    color: "#ffffff",
    fontSize: 44,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  metaBlock: {
    marginTop: 4,
    marginBottom: 10,
  },
  metaLabel: {
    color: "#9aa0a6",
    fontSize: 12,
    letterSpacing: 1.3,
  },
  metaTitle: {
    color: "#e7e7e7",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 4,
  },
  metaSubtitle: {
    color: "#a0a0a0",
    fontSize: 16,
    marginTop: 2,
  },
  featuredCard: {
    marginTop: 12,
    borderRadius: 18,
    overflow: "hidden",
    width: "100%",
    height: 220,
    backgroundColor: "#222",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  featuredOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  featuredCaption: {
    color: "#ffffff",
    fontSize: 16,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginTop: 16,
    marginBottom: 6,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
  },
  sectionChevron: {
    color: "#ffffff",
    opacity: 0.85,
    fontSize: 24,
  },
  list: {
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  rowCover: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: 12,
  },
  rowTextWrap: {
    flex: 1,
  },
  rowTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  rowSubtitle: {
    color: "#a0a0a0",
    fontSize: 14,
    marginTop: 2,
  },
  rowDots: {
    width: 22,
    height: 22,
    tintColor: "#cfcfcf",
    resizeMode: "contain",
    marginLeft: 10,
  },
});
