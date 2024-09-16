import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Inter18ptThin: require("../assets/fonts/Inter_18pt-Thin.ttf"),
    Inter18ptBlack: require("../assets/fonts/Inter_18pt-Black.ttf"),
    Inter18ptBold: require("../assets/fonts/Inter_18pt-Bold.ttf"),
    Inter18ptExtraBold: require("../assets/fonts/Inter_18pt-ExtraBold.ttf"),
    Inter18ptLight: require("../assets/fonts/Inter_18pt-Light.ttf"),
    Inter18ptSemiBold: require("../assets/fonts/Inter_18pt-SemiBold.ttf"),
    Inter18ptMedium: require("../assets/fonts/Inter_18pt-Medium.ttf"),
    Inter18ptRegular: require("../assets/fonts/Inter_18pt-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="cant-find-acc" options={{ headerShown: false }} />
        <Stack.Screen name="create-new" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
