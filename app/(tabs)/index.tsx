import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Band from "../components/iphoneUI";
import SongBanner from "../components/songBanner";

export default function Home() {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <Band />
      {/* header component */}
      <View style={styles.header}>
        <Text style={styles.leftCornerText}> Home </Text>
        <Text style={styles.subheaderText}>Top Picks For You </Text>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatarIcon}
          />
        </View>
      </View>
      {/* Body component top*/}
      <View style={styles.bodyHome}>
        <View>
          <Text style={styles.smlText}>Made for You</Text>
          <Image
            source={require("@/assets/images/homeCard1.png")}
            style={styles.imgTopBody}
          />
        </View>
        <View>
          <Text style={styles.smlText}>Listen Again</Text>
          <Image
            source={require("@/assets/images/homeCard2.png")}
            style={styles.imgTopBody}
          />
        </View>
      </View>
      {/* Body component bottom*/}
      <Text style={styles.RecentlyPlayedText}>Recently Played {">"}</Text>
      <View style={styles.bodyHome}>
        <View>
          <Image
            source={require("@/assets/images/album1.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.albumText}>Best of Queen</Text>
          <Text style={styles.smlText}>80&apos;s Classics</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/album2.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.albumText}>Frank Sinatra unleashed</Text>
          <Text style={styles.smlText}>I did it my way</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/album3.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.albumText}>Oingo Boingo Brothars</Text>
          <Text style={styles.smlText}>Zetai 100%!</Text>
        </View>
      </View>
      <Text style={styles.RecentlyPlayedText}>Explore New Genres {">"}</Text>
      <View style={styles.bodyHome}>
        <View>
          <Image
            source={require("@/assets/images/album4.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.albumText}>Edgerunners</Text>
          <Text style={styles.smlText}>Sad</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/album5.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.albumText}>The Beatles</Text>
          <Text style={styles.smlText}>Paul Maccartney explodes</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/album6.png")}
            style={styles.imgBottomBody}
          />
          <Text style={styles.albumText}>Elvis</Text>
          <Text style={styles.smlText}>Oh Mamma!</Text>
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
    minHeight: 100,
    backgroundColor: "black",
    top: 0,
  },
  leftCornerText: {
    color: "#fcfbfb",
    fontSize: 30,
    fontWeight: "500",
    position: "absolute",
    marginTop: 10,
    marginLeft: 8,
  },
  subheaderText: {
    color: "#fcfbfb",
    fontSize: 20,
    fontWeight: "500",
    position: "absolute",
    bottom: -3,
    marginLeft: 15,
    marginTop: 5,
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
    marginTop: 5,
    marginLeft: 5,
    paddingHorizontal: 10,
    gap: 10,
  },
  imgTopBody: {
    width: 260,
    height: 330,
    borderRadius: 10,
    marginTop: 3,
    resizeMode: "stretch",
  },
  smlText: {
    color: "white",
    opacity: 0.5,
    marginBottom: 3,
    marginTop: 3,
  },
  RecentlyPlayedText: {
    marginTop: 20,
    marginLeft: 15,
    color: "#fcfbfb",
    fontSize: 20,
    fontWeight: "500",
  },
  imgBottomBody: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 3,
  },
  albumText: {
    color: "white",
    marginTop: 3,
  },
});
