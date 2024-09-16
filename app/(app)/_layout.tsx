import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const user = undefined;
  // const user = true;

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
}
