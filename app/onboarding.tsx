import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";

function SpeechBubble({
  text,
  className: extraClassName = "",
  textClassName = "",
}: {
  text: string;
  className?: string;
  textClassName?: string;
}) {
  return (
    <View
      className={`rounded-[20px] px-[14px] py-2 border-[1.5px] z-10 ${extraClassName}`}
      style={styles.bubbleShadow}
    >
      <Text
        className={`text-[15px] ${textClassName}`}
        style={{ fontFamily: "Poppins-Medium" }}
      >
        {text}
      </Text>
    </View>
  );
}

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* Logo row */}
      <View className="flex-row items-center justify-center gap-2 pt-4">
        <Image
          source={images.mascotLogo}
          style={{ width: 36, height: 36 }}
          contentFit="contain"
        />
        <Text className="heading-3 text-lingua-purple">lingua</Text>
      </View>

      {/* Headline + subtitle */}
      <View className="px-7 pt-6">
        <Text className="heading-1 text-foreground">Your AI language</Text>
        <Text className="heading-1 text-lingua-purple">teacher.</Text>
        <Text className="body-md text-muted mt-2">
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>
      </View>

      {/* Mascot + speech bubbles */}
      <View className="flex-1 w-full items-center justify-center">
        <View className="w-full h-[380px] relative items-center justify-center">
          {/* Image first so bubbles render on top */}
          <Image
            source={images.mascotWelcome}
            style={{ width: 300, height: 300 }}
            contentFit="contain"
          />
          <SpeechBubble
            text="Hello!"
            className="absolute left-[16px] top-[100px] bg-[#eef0ff] border-[#dde0ff]"
          />
          <SpeechBubble
            text="¡Hola!"
            className="absolute right-[16px] top-[50px] rotate-[6deg] bg-[#eef0ff] border-[#dde0ff]"
            textClassName="text-lingua-purple"
          />
          <SpeechBubble
            text="你好!"
            className="absolute right-[20px] top-[170px] rotate-[-4deg] bg-[#fff0f0] border-[#ffd6d6]"
            textClassName="text-[#e53935]"
          />
        </View>
      </View>

      {/* CTA button */}
      <View className="px-6 pb-6">
        <TouchableOpacity
          className="bg-lingua-purple rounded-2xl py-4 flex-row items-center justify-center gap-2"
          activeOpacity={0.85}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text
            className="text-[16px] leading-[22px] text-white"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Get Started
          </Text>
          <Ionicons name="chevron-forward" color="#ffffff" size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Shadow needs StyleSheet — iOS/Android have different shadow syntax (AGENTS.md exception)
  bubbleShadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
});
