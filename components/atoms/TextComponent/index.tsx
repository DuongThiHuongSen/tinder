import { Colors } from "@/constants/Colors";
import { FC, PropsWithChildren, ReactElement } from "react";
import { StyleSheet, Text } from "react-native";

interface TextComponentProps {
  children: string;
  variable?: "normal" | "bold";
  fontSize?: number;
  style?: {};
}

const TextComponent: FC<PropsWithChildren<TextComponentProps>> = (
  props: PropsWithChildren<TextComponentProps>
): ReactElement => {
  const { children, variable, fontSize, style } = props;
  return (
    <Text style={[Styles[variable ?? "normal"], { fontSize }, style]}>
      {children}
    </Text>
  );
};

const Styles = StyleSheet.create({
  normal: {
    color: Colors.light.text,
    lineHeight: 20,
  },
  bold: {
    // color: Colors.light.textBold,
    fontWeight: 700,
    lineHeight: 20,
  },
});

TextComponent.defaultProps = {
  variable: "normal",
  fontSize: 15,
};
export default TextComponent;
