import TextComponent from "@/components/atoms/TextComponent";
import { Colors } from "@/constants/Colors";
import { SCREEN_HEIGHT } from "@/constants/consts";
import { StyleSheet, View } from "react-native";

const HomeScreenComponent = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.helloBlock}>
        <View>
          <TextComponent fontSize={16} style={{ marginBottom: 8 }}>
            Hello,
          </TextComponent>
          <TextComponent variable="bold" fontSize={20}>
            Hi James
          </TextComponent>
        </View>
      </View>
    </View>
  );
};

export default HomeScreenComponent;

const Styles = StyleSheet.create({
  container: {
    minHeight: SCREEN_HEIGHT,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  helloBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  healthBlock: {
    backgroundColor: Colors.light.primary,
    borderRadius: 12,
    padding: 20,
    marginTop: 32,
  },
  healthTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomColor: "#fff8",
    borderBottomWidth: 0.5,
    marginBottom: 16,
  },
  healthBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textWhite: {
    color: "#FFFFFF",
  },
});
