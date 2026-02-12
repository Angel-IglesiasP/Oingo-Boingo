import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Band from "../components/iphoneUI";

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
      <SafeAreaView style={styles.bodyHome}>
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
      </SafeAreaView>
      {/* Body component bottom*/}
      <Text style={styles.RecentlyPlayedText}>Recently Played {">"}</Text>
      <SafeAreaView style={styles.bodyHome}>
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
      </SafeAreaView>
      <Text style={styles.RecentlyPlayedText}>Explore New Genres {">"}</Text>
      <SafeAreaView style={styles.bodyHome}>
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
      </SafeAreaView>
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
    minHeight: 95,
    backgroundColor: "black",
    top: 0,
  },
  leftCornerText: {
    color: "#fcfbfb",
    fontSize: 30,
    fontWeight: "500",
    position: "absolute",
    marginTop: 20,
    marginLeft: 5,
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
    width: 35,
    height: 35,
    borderRadius: 25,
    resizeMode: "contain",
    marginTop: 13,
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
    paddingHorizontal: 4,
    gap: 5,
  },
  imgTopBody: {
    width: 230,
    height: 300,
    borderRadius: 10,
    marginTop: 3,
    resizeMode: "contain",
    marginLeft: 2,
  },
  smlText: {
    color: "white",
    opacity: 0.5,
    marginBottom: 3,
    marginLeft: 8,
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
    marginLeft: 5,
  },
  albumText: {
    color: "white",
    marginTop: 3,
    marginLeft: 8,
  },
});
