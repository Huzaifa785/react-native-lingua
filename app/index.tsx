import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-6">
      <Text className="heading-1 text-lingua-purple">Duolingo Clone</Text>
      <Link href="/onboarding" asChild>
        <TouchableOpacity className="bg-lingua-purple px-8 py-4 rounded-2xl">
          <Text className="body-lg text-white" style={{ fontFamily: "Poppins-SemiBold" }}>
            Open Onboarding
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
