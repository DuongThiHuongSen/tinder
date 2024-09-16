import SvgIcon from "@/components/atoms/SvgIcon/SvgIcon";
import TextComponent from "@/components/atoms/TextComponent";
import { Colors } from "@/constants/Colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/consts";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const Step1 = () => {
  const handlePressButtonSignIn = () => {
    router.navigate("/cant-find-acc");
  };

  return (
    <LinearGradient
      colors={["#EA4080", "#EE805F"]}
      start={[-0.2, 1]}
      end={[1, -0.2]}
      style={Styles.container}
    >
      <TouchableOpacity style={Styles.backButton}>
        <SvgIcon component={require("@/assets/icons/arrow-left.svg")} />
      </TouchableOpacity>
      <View style={Styles.content}>
        <Image
          resizeMode="cover"
          source={require("@/assets/images/logo.png")}
        />
        <TextComponent
          style={{
            fontWeight: 500,
            color: Colors.light.textWhite,
            fontFamily: "Inter18ptMedium",
            textAlign: "center",
            marginTop: 86,
            marginBottom: 30,
          }}
        >
          By tapping Create Account or Sign In, you agree to our Terms. Learn
          how we process your data in our Privacy Policy and Cookies Policy.
        </TextComponent>

        <TouchableOpacity
          style={Styles.buttonOutLine}
          onPress={handlePressButtonSignIn}
        >
          <TextComponent
            style={{
              fontWeight: 500,
              color: Colors.light.textWhite,
              fontFamily: "Inter18ptMedium",
              textAlign: "center",
            }}
            fontSize={15}
          >
            SIGN IN WITH APPLE
          </TextComponent>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonOutLine}
          onPress={handlePressButtonSignIn}
        >
          <TextComponent
            style={{
              fontWeight: 500,
              color: Colors.light.textWhite,
              fontFamily: "Inter18ptMedium",
              textAlign: "center",
            }}
            fontSize={15}
          >
            SIGN IN WITH FACEBOOK
          </TextComponent>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonOutLine}
          onPress={handlePressButtonSignIn}
        >
          <TextComponent
            style={{
              fontWeight: 500,
              color: Colors.light.textWhite,
              fontFamily: "Inter18ptMedium",
              textAlign: "center",
            }}
            fontSize={15}
          >
            SIGN IN WITH PHONE NUMBER
          </TextComponent>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 10 }}>
          <TextComponent
            style={{
              fontWeight: 500,
              color: Colors.light.textWhite,
              fontFamily: "Inter18ptMedium",
              textAlign: "center",
            }}
            fontSize={15}
          >
            Trouble Signing In?
          </TextComponent>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Step1;

const Styles = StyleSheet.create({
  container: {
    minHeight: SCREEN_HEIGHT,
    paddingVertical: 20,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOutLine: {
    borderColor: Colors.light.textWhite,
    borderWidth: 1,
    paddingVertical: 16,
    borderRadius: 67,
    width: SCREEN_WIDTH - 60,
    marginBottom: 10,
  },
});
