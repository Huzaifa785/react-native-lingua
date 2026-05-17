import { useAuth, useClerk } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

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
    <View className="flex-1 items-center justify-center gap-6">
      <Text className="heading-1 text-lingua-purple">Welcome Back!</Text>
      <Text className="body-md text-muted">Home screen coming soon.</Text>
      <TouchableOpacity
        className="bg-lingua-purple px-8 py-4 rounded-2xl"
        onPress={() => signOut()}
      >
        <Text className="body-lg text-white" style={{ fontFamily: "Poppins-SemiBold" }}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
