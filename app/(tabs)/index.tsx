import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/expo";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useLanguageStore } from "@/store/languageStore";
import { images } from "@/constants/images";
import { units } from "@/data/units";

const DAILY_XP = 15;
const DAILY_GOAL_XP = 20;
const STREAK = 12;

const GREETING: Record<string, string> = {
  es: "Hola",
  fr: "Bonjour",
  ja: "こんにちは",
  de: "Hallo",
};

interface PlanItem {
  id: string;
  title: string;
  subtitle: string;
  completed: boolean;
  icon: string;
  iconBg: string;
}

const TODAY_PLAN: PlanItem[] = [
  {
    id: "1",
    title: "Lesson",
    subtitle: "At the café",
    completed: true,
    icon: "book",
    iconBg: "#6C4EF5",
  },
  {
    id: "2",
    title: "AI Conversation",
    subtitle: "Talk about your day",
    completed: false,
    icon: "headset",
    iconBg: "#6C4EF5",
  },
  {
    id: "3",
    title: "New words",
    subtitle: "10 words",
    completed: false,
    icon: "chatbubble",
    iconBg: "#FF6363",
  },
];

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguage } = useLanguageStore();

  const firstName = user?.firstName ?? "there";
  const langCode = selectedLanguage?.code ?? "es";
  const greeting = GREETING[langCode] ?? "Hello";
  const langName = selectedLanguage?.name ?? "Spanish";
  const langFlag = selectedLanguage?.flag ?? "https://flagcdn.com/w320/es.png";

  const currentUnit = units.find((u) => u.languageCode === langCode);
  const xpProgress = DAILY_XP / DAILY_GOAL_XP;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ─── Header ─── */}
        <View className="flex-row items-center justify-between pt-1 pb-0.5">
          <View className="flex-row items-center gap-[10px] flex-1">
            <Image
              source={{ uri: langFlag }}
              style={{ width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: "#E5E7EB" }}
              contentFit="cover"
            />
            <Text className="font-poppins-semibold text-base text-foreground leading-[22px] shrink">
              {greeting}, {firstName}! 👋
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Image source={images.streakFire} style={{ width: 28, height: 28 }} />
            <Text className="heading-4 text-foreground">{STREAK}</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="notifications-outline" size={26} color="#001328" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ─── Daily Goal Card ─── */}
        <View className="bg-[#FFF5E8] rounded-[20px] p-4 flex-row items-center gap-3">
          <View className="flex-1">
            <Text className="body-sm text-muted">Daily goal</Text>
            <View className="flex-row items-end mt-0.5">
              <Text className="font-poppins-bold text-[30px] text-foreground leading-9">
                {DAILY_XP}
              </Text>
              <Text className="body-md text-muted mb-1.5">
                {" "}/ {DAILY_GOAL_XP} XP
              </Text>
            </View>
            <View className="h-[7px] bg-[#E5D5C5] rounded mt-2 overflow-hidden">
              <View
                className="h-[7px] bg-streak rounded"
                style={{ width: `${Math.round(xpProgress * 100)}%` }}
              />
            </View>
          </View>
          <Image
            source={images.treasure}
            style={{ width: 76, height: 76 }}
            contentFit="contain"
          />
        </View>

        {/* ─── Continue Learning Card ─── */}
        <View className="bg-lingua-purple rounded-[20px] pt-4 pb-4 pl-[18px] flex-row items-center overflow-hidden min-h-[148px]">
          <View className="flex-1 pr-2">
            <Text className="font-poppins text-[12px] text-white/75 mb-0.5">
              Continue learning
            </Text>
            <Text className="font-poppins-bold text-[26px] text-white leading-8">
              {langName}
            </Text>
            <Text className="font-poppins text-[12px] text-white/75 mt-0.5">
              A1 • Unit {currentUnit?.order ?? 1}
            </Text>
            <TouchableOpacity style={styles.continueBtn} activeOpacity={0.85}>
              <Text className="font-poppins-semibold text-sm text-lingua-purple">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={images.palace}
            style={{ width: 160, height: 180, marginRight: -2, marginBottom: -16 }}
            contentFit="contain"
          />
        </View>

        {/* ─── Today's Plan ─── */}
        <View>
          <View className="flex-row items-center justify-between mb-2">
            <Text className="heading-4 text-foreground">{"Today's plan"}</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="font-poppins-medium text-sm text-lingua-purple">
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <View className="bg-white rounded-[20px] border border-divider overflow-hidden">
            {TODAY_PLAN.map((item, index) => (
              <View key={item.id}>
                <View className="flex-row items-center py-[11px] px-4 gap-3">
                  <View
                    className="w-11 h-11 rounded-xl items-center justify-center"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Ionicons name={item.icon as any} size={20} color="#FFFFFF" />
                  </View>
                  <View className="flex-1">
                    <Text className="font-poppins-semibold text-sm text-foreground leading-5">
                      {item.title}
                    </Text>
                    <Text className="body-sm text-muted">{item.subtitle}</Text>
                  </View>
                  {item.completed ? (
                    <View className="w-7 h-7 rounded-full bg-lingua-purple items-center justify-center">
                      <Ionicons name="checkmark" size={15} color="#FFFFFF" />
                    </View>
                  ) : (
                    <View className="w-7 h-7 rounded-full border-2 border-[#D1D5DB]" />
                  )}
                </View>
                {index < TODAY_PLAN.length - 1 && (
                  <View className="h-px bg-[#F3F4F6] ml-[74px]" />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ScrollView contentContainerStyle exception
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 12,
  },
  // TouchableOpacity style prop exception
  continueBtn: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    marginTop: 10,
  },
});
