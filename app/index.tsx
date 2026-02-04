import { View } from "react-native";
import Header from "./components/header";
import Band from "./components/iphoneUI";

export default function Index() {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Band />
      <Header />
    </View>
  );
}
