import { PropsWithChildren } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export function SafeContentScreen({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {children}
    </SafeAreaView>
  );
}

const GlobalStyles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
