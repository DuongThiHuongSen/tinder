import ButtonGradient from "@/components/atoms/ButtonGradient";
import SvgIcon from "@/components/atoms/SvgIcon/SvgIcon";
import TextComponent from "@/components/atoms/TextComponent";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/consts";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const CreateNewAcc = () => {
  const handleBack = () => {
    router.back();
  };

  const handlePressCreateNew = () => {
    router.navigate("/cant-find-acc");
  };

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.backButton} onPress={handleBack}>
        <SvgIcon
          component={require("@/assets/icons/arrow-left.svg")}
          stroke="#828693"
          solid
        />
      </TouchableOpacity>

      <View style={Styles.content}>
        <TextComponent
          style={{
            fontFamily: "Inter18ptMedium",
            marginTop: 90,
            lineHeight: 36,
          }}
          fontSize={30}
          variable="bold"
        >
          My number is
        </TextComponent>
        <TextComponent
          style={{
            fontWeight: 500,
            fontFamily: "Inter18ptMedium",
            textAlign: "center",
            marginTop: 52,
            marginBottom: 30,
            lineHeight: 25,
            color: "#828693",
          }}
          fontSize={20}
        >
          We couldn’t find a Tinder account connected to that Facebook Account.
        </TextComponent>

        <ButtonGradient onPress={handlePressCreateNew}>CONTINUE</ButtonGradient>
      </View>
    </View>
  );
};

export default CreateNewAcc;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    minHeight: SCREEN_HEIGHT,
    paddingHorizontal: 40,
    justifyContent: "flex-start",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  content: {
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: 54,
  },
});
