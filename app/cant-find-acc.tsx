import { SafeContentScreen } from "@/components/SafeContentScreen";
import CantFindAccount from "@/screens/NoAuthScreen/CantFindAccount";

export default function CantFindAccountScreen() {
  return (
    <SafeContentScreen>
      <CantFindAccount />
    </SafeContentScreen>
  );
}
