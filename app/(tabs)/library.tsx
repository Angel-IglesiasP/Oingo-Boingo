import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./_layout";

export default function Index() {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
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

      <SafeAreaView style={styles.viewBox}>
        <View>
          <Image
            source={require("@/assets/images/aint-this-the-life.jpg")}
            style={styles.img}
          />
          <Text style={styles.albumText}>
            Ain&apos;t This The Life - Single
          </Text>
          <Text style={styles.smlText}>1980</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/dead-mans-party.jpg")}
            style={styles.img}
          />
          <Text style={styles.albumText}>Dead Man&apos;s Party</Text>
          <Text style={styles.smlText}>1985</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/boi-ngo.jpg")}
            style={styles.img}
          />
          <Text style={styles.albumText}>Boi-Ngo</Text>
          <Text style={styles.smlText}>1987</Text>
        </View>
        <View>
          <Image
            source={require("@/assets/images/good-for-your-soul.jpg")}
            style={styles.img}
          />
          <Text style={styles.albumText}>Good For Your Soul</Text>
          <Text style={styles.smlText}>1983</Text>
        </View>
      </SafeAreaView>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  content: {
    flex: 1,
    overflow: "hidden",
  },
  viewBox: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingTop: 0,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop: -40,
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 7,
  },
  albumText: {
    color: "white",
  },
  smlText: {
    color: "white",
    opacity: 0.5,
  },
  header: {
    position: "relative",
    width: "100%",
    minHeight: 190,
    backgroundColor: "black",
    justifyContent: "flex-start",
    alignItems: "center",
    top: -5,
    paddingTop: 40,
  },
  headerText: {
    color: "#f2efef",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: 5,
    marginBottom: 10,
    textAlign: "center",
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
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  imageArtist: {
    width: 85,
    height: 85,
    borderRadius: 40,
    resizeMode: "cover",
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
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: -15,
  },

  playIcon: {
    width: 180,
    height: 75,
    resizeMode: "contain",
  },
});
