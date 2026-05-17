import { useAuth, useClerk } from "@clerk/expo";
import { Redirect, useRouter } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6C4EF5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 items-center justify-center gap-6 px-6">
      <Text className="heading-1 text-lingua-purple">Welcome Back!</Text>
      <Text className="body-md text-muted">Home screen coming soon.</Text>
      <TouchableOpacity
        className="bg-lingua-purple px-8 py-4 rounded-2xl w-full items-center"
        onPress={() => router.push("/language-selection")}
      >
        <Text className="body-lg text-white" style={{ fontFamily: "Poppins-SemiBold" }}>
          Choose a Language
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="px-8 py-4 rounded-2xl w-full items-center border border-divider"
        onPress={() => signOut()}
      >
        <Text className="body-lg text-muted" style={{ fontFamily: "Poppins-SemiBold" }}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
