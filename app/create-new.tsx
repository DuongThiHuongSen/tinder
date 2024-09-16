import { SafeContentScreen } from "@/components/SafeContentScreen";
import CreateNewAcc from "@/screens/NoAuthScreen/CreateNewAcc";

export default function CreateNewScreen() {
  return (
    <SafeContentScreen>
      <CreateNewAcc />
    </SafeContentScreen>
  );
}
