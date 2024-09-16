import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { FC, PropsWithChildren, ReactElement } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import TextComponent from "../TextComponent";

interface ButtonGradientProps extends TouchableOpacityProps {
  children: string;
  style?: {};
}

const ButtonGradient: FC<PropsWithChildren<ButtonGradientProps>> = (
  props: PropsWithChildren<ButtonGradientProps>
): ReactElement => {
  const { children, style, ...rest } = props;
  return (
    <TouchableOpacity style={[Styles.buttonOutLine, style]} {...rest}>
      <LinearGradient
        colors={["#EA4080", "#EE805F"]}
        start={[-0.2, 1]}
        end={[1, -0.2]}
        style={Styles.buttonOutLine}
      >
        <TextComponent
          style={{
            fontWeight: 500,
            fontFamily: "Inter18ptBold",
            textAlign: "center",
            color: "white",
          }}
          fontSize={15}
          variable="bold"
        >
          {children}
        </TextComponent>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  buttonOutLine: {
    borderColor: Colors.light.textWhite,
    borderWidth: 1,
    paddingVertical: 16,
    borderRadius: 67,
    paddingHorizontal: 16,
    width: "100%",
    marginBottom: 10,
    //     shadowColor: "#000",
    // shadowOffset: {
    // 	width: 0,
    // 	height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,
  },
});

ButtonGradient.defaultProps = {};
export default ButtonGradient;
