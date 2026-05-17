import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { languages } from "@/data/languages";
import { images } from "@/constants/images";
import { Language } from "@/types/learning";
import { useLanguageStore } from "@/store/languageStore";

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const { setSelectedLanguage } = useLanguageStore();
  const [selected, setSelected] = useState<Language | null>(null);
  const [search, setSearch] = useState("");

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* Header */}
      <View className="flex-row items-center px-4 pt-2 pb-3">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={24} color="#001328" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text
            className="text-[18px] text-foreground"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Choose a language
          </Text>
        </View>
        <View className="w-10" />
      </View>

      {/* Search bar */}
      <View className="px-4 mb-4">
        <View
          className="flex-row items-center bg-surface rounded-full px-4 py-3 gap-3"
          style={styles.searchContainer}
        >
          <Ionicons name="search-outline" size={18} color="#6b7280" />
          <TextInput
            className="flex-1 text-foreground"
            placeholder="Search languages"
            placeholderTextColor="#6b7280"
            value={search}
            onChangeText={setSearch}
            style={{ fontFamily: "Poppins-Regular", fontSize: 14, padding: 0 }}
          />
        </View>
      </View>

      {/* Language list */}
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <Text
          className="px-4 mb-3 text-[15px] text-foreground"
          style={{ fontFamily: "Poppins-Bold" }}
        >
          Popular
        </Text>

        <View className="px-4">
          {filtered.map((lang, index) => {
            const isSelected = selected?.code === lang.code;
            const isLast = index === filtered.length - 1;

            return (
              <TouchableOpacity
                key={lang.code}
                onPress={() => setSelected(lang)}
                activeOpacity={0.7}
              >
                <View
                  className={`flex-row items-center py-4 px-3 rounded-2xl ${
                    isSelected ? "bg-[#F0EEFF]" : "bg-white"
                  }`}
                  style={isSelected ? styles.selectedRow : undefined}
                >
                  {/* Flag */}
                  <View
                    className="w-12 h-12 rounded-full overflow-hidden mr-4"
                    style={styles.flagContainer}
                  >
                    <Image
                      source={{ uri: lang.flag }}
                      style={{ width: 48, height: 48 }}
                      contentFit="cover"
                    />
                  </View>

                  {/* Language info */}
                  <View className="flex-1">
                    <Text
                      className="text-[16px] text-foreground"
                      style={{ fontFamily: "Poppins-SemiBold" }}
                    >
                      {lang.name}
                    </Text>
                    <Text
                      className="text-[13px] text-muted"
                      style={{ fontFamily: "Poppins-Regular" }}
                    >
                      {lang.learners} learners
                    </Text>
                  </View>

                  {/* Right indicator */}
                  {isSelected ? (
                    <View
                      className="w-8 h-8 rounded-full bg-lingua-purple items-center justify-center"
                    >
                      <Ionicons name="checkmark" size={18} color="#ffffff" />
                    </View>
                  ) : (
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  )}
                </View>

                {/* Divider between unselected items */}
                {!isSelected && !isLast && (
                  <View className="h-[1px] bg-divider" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <View className="h-4" />
      </ScrollView>

      {/* Bottom: Confirm button + Earth image */}
      <View>
        <View className="px-4 pt-3 pb-2">
          <TouchableOpacity
            className={`rounded-2xl py-4 items-center justify-center ${
              selected ? "bg-lingua-purple" : "bg-surface"
            }`}
            activeOpacity={selected ? 0.85 : 1}
            disabled={!selected}
            onPress={() => {
              if (selected) {
                setSelectedLanguage(selected);
                router.replace("/");
              }
            }}
            style={!selected ? styles.disabledButton : undefined}
          >
            <Text
              className={`text-[16px] leading-[22px] ${selected ? "text-white" : "text-muted"}`}
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Confirm
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          source={images.earth}
          style={{ width: "100%", height: 220 }}
          contentFit="cover"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  flagContainer: {
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  selectedRow: {
    borderWidth: 1.5,
    borderColor: "#6c4ef5",
  },
  disabledButton: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
});
