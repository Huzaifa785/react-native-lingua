import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { lessons } from "@/data/lessons";
import { images } from "@/constants/images";

const PURPLE = "#6C4EF5";
const GREEN = "#21C16B";
const BLUE = "#4D88FF";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const lesson = lessons.find((l) => l.id === id);

  const [micActive, setMicActive] = useState(true);
  const [subtitlesActive, setSubtitlesActive] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  if (!lesson) {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.notFound}>
          <Ionicons name="alert-circle-outline" size={48} color="#D1D5DB" />
          <Text style={styles.notFoundText}>Lesson not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const allPhrases = [
    { text: lesson.aiTeacherPrompt.introMessage, translation: "" },
    ...lesson.phrases,
  ];
  const currentPhrase = allPhrases[phraseIndex % allPhrases.length];

  return (
    <SafeAreaView style={styles.root}>
      {/* ─── Header ─── */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.headerBtn}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={26} color="#001328" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Teacher</Text>
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.7}>
            <Ionicons name="videocam-outline" size={17} color="#001328" />
          </TouchableOpacity>
          <View style={styles.countBadge}>
            <Text style={styles.countBadgeText}>12</Text>
          </View>
          <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={17} color="#001328" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ─── Teacher / Mascot Area ─── */}
      <View style={styles.teacherArea}>
        {/* Decorative depth circles */}
        <View style={styles.bgDeco1} />
        <View style={styles.bgDeco2} />
        <View style={styles.bgDeco3} />

        {/* Mascot — centered in the flex space above the bubble */}
        <View style={styles.mascotContainer}>
          <Image
            source={images.mascotWelcome}
            style={styles.mascot}
            contentFit="contain"
          />
        </View>

        {/* Speech bubble */}
        {subtitlesActive && (
          <TouchableOpacity
            style={styles.speechBubble}
            onPress={() => setPhraseIndex((p) => (p + 1) % allPhrases.length)}
            activeOpacity={0.88}
          >
            <View style={styles.bubbleTail} />
            <View style={styles.speechRow}>
              <View style={styles.speechTextBlock}>
                <Text style={styles.speechPrimary} numberOfLines={2}>
                  {currentPhrase.text}
                </Text>
                {currentPhrase.translation ? (
                  <Text style={styles.speechSecondary} numberOfLines={1}>
                    {currentPhrase.translation}
                  </Text>
                ) : null}
              </View>
              <View style={styles.volumeBtn}>
                <Ionicons name="volume-high" size={20} color={PURPLE} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>

      {/* ─── Controls ─── */}
      <View style={styles.controls}>
        <View style={styles.controlItem}>
          <TouchableOpacity style={styles.controlBtn} activeOpacity={0.8}>
            <Ionicons name="videocam" size={22} color="#001328" />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Camera</Text>
        </View>

        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, !micActive && styles.controlBtnMuted]}
            onPress={() => setMicActive((v) => !v)}
            activeOpacity={0.8}
          >
            <Ionicons
              name={micActive ? "mic" : "mic-off"}
              size={22}
              color={micActive ? "#001328" : "#6B7280"}
            />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Mic</Text>
        </View>

        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, subtitlesActive && styles.controlBtnActive]}
            onPress={() => setSubtitlesActive((v) => !v)}
            activeOpacity={0.8}
          >
            <Ionicons
              name="language"
              size={22}
              color={subtitlesActive ? PURPLE : "#001328"}
            />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Subtitles</Text>
        </View>

        <View style={styles.controlItem}>
          <TouchableOpacity
            style={styles.controlBtnEnd}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Ionicons
              name="call"
              size={22}
              color="#fff"
              style={styles.endCallIcon}
            />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>End Call</Text>
        </View>
      </View>

      {/* ─── Topic chips ─── */}
      <View style={styles.topicsRow}>
        {lesson.aiTeacherPrompt.topics.slice(0, 3).map((topic) => (
          <View key={topic} style={styles.topicChip}>
            <Text style={styles.topicText}>{topic}</Text>
          </View>
        ))}
      </View>

      {/* ─── Feedback Card ─── */}
      <View style={styles.feedbackCard}>
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Speaking</Text>
          <Text style={[styles.feedbackScore, { color: GREEN }]}>Excellent</Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Pronunciation</Text>
          <Text style={[styles.feedbackScore, { color: BLUE }]}>Great</Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Grammar</Text>
          <Text style={[styles.feedbackScore, { color: PURPLE }]}>Good</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#FFFFFF" },

  // ── Not found
  notFound: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  notFoundText: { fontFamily: "Poppins-Medium", fontSize: 16, color: "#9CA3AF" },

  // ── Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
  },
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenter: { flex: 1, alignItems: "flex-start", paddingLeft: 4 },
  headerTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 17,
    color: "#001328",
    lineHeight: 22,
  },
  onlineRow: { flexDirection: "row", alignItems: "center", gap: 5, marginTop: 2 },
  onlineDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: GREEN },
  onlineText: { fontFamily: "Poppins-Regular", fontSize: 12, color: GREEN },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 8 },
  headerIconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  countBadge: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  countBadgeText: { fontFamily: "Poppins-SemiBold", fontSize: 13, color: "#001328" },

  // ── Teacher area — purple card with flex layout
  teacherArea: {
    flex: 1,
    backgroundColor: PURPLE,
    overflow: "hidden",
  },
  bgDeco1: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "rgba(255,255,255,0.07)",
    top: -80,
    right: -80,
  },
  bgDeco2: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.05)",
    bottom: 60,
    left: -60,
  },
  bgDeco3: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(255,255,255,0.04)",
    top: "40%",
    right: -30,
  },

  // Mascot fills the flex space above the bubble, centered
  mascotContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mascot: {
    width: 260,
    height: 280,
  },

  // ── Speech bubble — sits at the bottom of teacherArea as flex child
  speechBubble: {
    marginHorizontal: 16,
    marginBottom: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 8,
  },
  bubbleTail: {
    position: "absolute",
    top: -10,
    left: 28,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#FFFFFF",
  },
  speechRow: { flexDirection: "row", alignItems: "center", gap: 14 },
  speechTextBlock: { flex: 1 },
  speechPrimary: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#001328",
    lineHeight: 23,
  },
  speechSecondary: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#4B5563",
    marginTop: 3,
    lineHeight: 20,
  },
  volumeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F4F0FF",
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Controls
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  controlItem: { alignItems: "center", gap: 7 },
  controlBtn: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#F3F5F7",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  controlBtnMuted: { backgroundColor: "#F3F5F7", opacity: 0.5 },
  controlBtnActive: { backgroundColor: "#EDE9FE" },
  controlBtnEnd: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FF4D4F",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#FF4D4F",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 5,
  },
  endCallIcon: { transform: [{ rotate: "135deg" }] },
  controlLabel: { fontFamily: "Poppins-Regular", fontSize: 11, color: "#6B7280" },

  // ── Topic chips
  topicsRow: {
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexWrap: "wrap",
  },
  topicChip: {
    backgroundColor: "#F4F0FF",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  topicText: { fontFamily: "Poppins-Medium", fontSize: 11, color: PURPLE },

  // ── Feedback card
  feedbackCard: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#ECEEF2",
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  feedbackItem: { flex: 1, alignItems: "center", gap: 5 },
  feedbackLabel: { fontFamily: "Poppins-Regular", fontSize: 13, color: "#6B7280" },
  feedbackScore: { fontFamily: "Poppins-SemiBold", fontSize: 15 },
  feedbackDivider: { width: 1, height: 40, backgroundColor: "#ECEEF2" },
});
