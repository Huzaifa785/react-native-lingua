import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { usePostHog } from "posthog-react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import { useLanguageStore } from "@/store/languageStore";
import { useLessonProgressStore } from "@/store/lessonProgressStore";
import { units } from "@/data/units";
import { lessons } from "@/data/lessons";
import { images } from "@/constants/images";
import { Lesson } from "@/types/learning";

const HERO_HEIGHT = 182;
const PURPLE = "#6C4EF5";
const GREEN = "#21C16B";

type LessonStatus = "completed" | "in_progress" | "not_started";
type ActiveTab = "lessons" | "practice";

// ─── Lesson Card ─────────────────────────────────────────────────────────────

function LessonCard({ lesson, status }: { lesson: Lesson; status: LessonStatus }) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in_progress";

  return (
    <View style={[styles.card, isInProgress && styles.cardActive]}>
      <View style={styles.cardBody}>
        <Text style={[styles.lessonLabel, isInProgress && styles.lessonLabelActive]}>
          Lesson {lesson.order}
        </Text>
        <Text style={[styles.lessonTitle, isInProgress && styles.lessonTitleBold]}>
          {lesson.title}
        </Text>

        <View style={styles.cardFooter}>
          {/* XP chip */}
          <View style={[styles.xpChip, isCompleted && styles.xpChipDone]}>
            <Ionicons
              name={isCompleted ? "star" : "flash"}
              size={11}
              color={isCompleted ? GREEN : "#FF9600"}
            />
            <Text style={[styles.xpChipText, isCompleted && styles.xpChipTextDone]}>
              {isCompleted ? `${lesson.xpReward} XP earned` : `+${lesson.xpReward} XP`}
            </Text>
          </View>

          {/* Status sub-label */}
          {isInProgress && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>In progress</Text>
            </View>
          )}
          {!isCompleted && !isInProgress && (
            <Text style={styles.lessonMeta}>
              {lesson.activities.length} activities
            </Text>
          )}
        </View>
      </View>

      {isCompleted && (
        <View style={styles.iconGreen}>
          <Ionicons name="checkmark" size={18} color="#fff" />
        </View>
      )}
      {isInProgress && (
        <Image source={images.mascotWelcome} style={styles.mascotThumb} contentFit="contain" />
      )}
      {!isCompleted && !isInProgress && (
        <View style={styles.iconLock}>
          <Ionicons name="lock-closed" size={15} color="#B8BEC8" />
        </View>
      )}
    </View>
  );
}

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function LearnScreen() {
  const router = useRouter();
  const posthog = usePostHog();
  const { selectedLanguage } = useLanguageStore();
  const { completedLessonIds, inProgressLessonId, setCurrentLesson } =
    useLessonProgressStore();
  const [activeTab, setActiveTab] = useState<ActiveTab>("lessons");

  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y;
  });

  const langCode = selectedLanguage?.code ?? "es";
  const currentUnit = units.find((u) => u.languageCode === langCode);
  const unitLessons = lessons
    .filter((l) => l.unitId === currentUnit?.id)
    .sort((a, b) => a.order - b.order);

  const unitHasInProgress = unitLessons.some((l) => l.id === inProgressLessonId);
  const firstLesson = unitLessons[0];

  const getLessonStatus = (lesson: Lesson): LessonStatus => {
    if (completedLessonIds.includes(lesson.id)) return "completed";
    if (inProgressLessonId === lesson.id) return "in_progress";
    if (!unitHasInProgress && lesson.id === firstLesson?.id) return "in_progress";
    return "not_started";
  };

  const completedCount = unitLessons.filter((l) =>
    completedLessonIds.includes(l.id)
  ).length;
  const progressPct =
    unitLessons.length > 0 ? completedCount / unitLessons.length : 0;
  const effectiveInProgress =
    unitLessons.find((l) => l.id === inProgressLessonId) ?? firstLesson;
  const headerTitle =
    effectiveInProgress?.title ?? currentUnit?.title ?? "Lessons";

  const handlePress = (lesson: Lesson) => {
    posthog.capture("lesson_tapped", {
      lesson_id: lesson.id,
      lesson_title: lesson.title,
      language: langCode,
    });
    setCurrentLesson(lesson.id);
    router.push(`/lesson/${lesson.id}`);
  };

  // ── Animated styles ──────────────────────────────────────────────────────

  const heroAnimStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollY.value,
      [0, HERO_HEIGHT],
      [HERO_HEIGHT, 0],
      Extrapolation.CLAMP
    ),
    opacity: interpolate(
      scrollY.value,
      [0, HERO_HEIGHT * 0.55],
      [1, 0],
      Extrapolation.CLAMP
    ),
  }));

  const headerShadowStyle = useAnimatedStyle(() => ({
    shadowOpacity: interpolate(
      scrollY.value,
      [0, 40],
      [0, 0.1],
      Extrapolation.CLAMP
    ),
    elevation: interpolate(scrollY.value, [0, 40], [0, 4], Extrapolation.CLAMP),
  }));

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <SafeAreaView style={styles.root}>
      {/* ─── Fixed header — always visible ─── */}
      <Animated.View style={[styles.header, headerShadowStyle]}>
        <TouchableOpacity
          style={styles.headerBtn}
          onPress={() => router.push("/(tabs)")}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={26} color="#001328" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {headerTitle}
          </Text>
          <Text style={styles.headerSub}>
            Unit {currentUnit?.order ?? 1} · {completedCount} /{" "}
            {unitLessons.length} lessons
          </Text>
        </View>
        <TouchableOpacity style={styles.headerBtn} activeOpacity={0.7}>
          <Ionicons name="bookmark" size={22} color="#FF9600" />
        </TouchableOpacity>
      </Animated.View>

      {/* ─── Scrollable body ─── */}
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 36 }}
      >
        {/* ─── Collapsing purple hero ─── */}
        <Animated.View style={[styles.hero, heroAnimStyle]}>
          {/* Decorative depth circles */}
          <View style={styles.deco1} />
          <View style={styles.deco2} />

          {/* Left: unit + lesson info + progress */}
          <View style={styles.heroLeft}>
            <View style={styles.unitPill}>
              <Text style={styles.unitPillText}>
                Unit {currentUnit?.order} · {currentUnit?.title}
              </Text>
            </View>
            <Text style={styles.heroLesson} numberOfLines={2}>
              {effectiveInProgress?.title}
            </Text>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${Math.round(progressPct * 100)}%` },
                ]}
              />
            </View>
            <Text style={styles.progressLabel}>
              {completedCount} of {unitLessons.length} lessons done
            </Text>
          </View>

          {/* Right: mascot */}
          <Image
            source={images.mascotWelcome}
            style={styles.heroMascot}
            contentFit="contain"
          />
        </Animated.View>

        {/* ─── Tab switcher ─── */}
        <View style={styles.tabRow}>
          {(["lessons", "practice"] as ActiveTab[]).map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tabBtn}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.8}
            >
              <Text
                style={activeTab === tab ? styles.tabTextOn : styles.tabTextOff}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
              {activeTab === tab && <View style={styles.tabLine} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* ─── Lesson list ─── */}
        <View style={styles.list}>
          {activeTab === "lessons" ? (
            unitLessons.map((lesson) => (
              <TouchableOpacity
                key={lesson.id}
                onPress={() => handlePress(lesson)}
                activeOpacity={0.82}
              >
                <LessonCard
                  lesson={lesson}
                  status={getLessonStatus(lesson)}
                />
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.empty}>
              <Ionicons name="barbell-outline" size={48} color="#D1D5DB" />
              <Text style={styles.emptyTitle}>Practice coming soon</Text>
              <Text style={styles.emptySub}>
                Complete lessons first to unlock practice mode.
              </Text>
            </View>
          )}
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#FFFFFF" },

  // ── Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    zIndex: 10,
  },
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenter: { flex: 1, alignItems: "center", paddingHorizontal: 4 },
  headerTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 17,
    color: "#001328",
    lineHeight: 24,
  },
  headerSub: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 1,
  },

  // ── Hero
  hero: {
    backgroundColor: PURPLE,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingLeft: 22,
    paddingBottom: 20,
    paddingTop: 18,
    overflow: "hidden",
  },
  deco1: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(255,255,255,0.06)",
    top: -70,
    right: -50,
  },
  deco2: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "rgba(255,255,255,0.04)",
    bottom: -30,
    left: -20,
  },
  heroLeft: { flex: 1, zIndex: 1, paddingRight: 8 },
  unitPill: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 9,
  },
  unitPillText: {
    fontFamily: "Poppins-Medium",
    fontSize: 11,
    color: "rgba(255,255,255,0.88)",
  },
  heroLesson: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "#FFFFFF",
    lineHeight: 27,
    marginBottom: 16,
  },
  progressTrack: {
    height: 6,
    backgroundColor: "rgba(255,255,255,0.22)",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 6,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    minWidth: 0,
  },
  progressLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "rgba(255,255,255,0.7)",
  },
  heroMascot: { width: 128, height: 162, zIndex: 1 },

  // ── Tabs
  tabRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECEEF2",
    backgroundColor: "#FFFFFF",
  },
  tabBtn: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 13,
    position: "relative",
  },
  tabTextOn: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: PURPLE,
  },
  tabTextOff: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#9CA3AF",
  },
  tabLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: PURPLE,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },

  // ── List
  list: { paddingHorizontal: 20, paddingTop: 14, gap: 10 },

  // ── Card
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ECEEF2",
    paddingHorizontal: 18,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  cardActive: {
    backgroundColor: "#F4F0FF",
    borderColor: PURPLE,
    borderWidth: 2,
    shadowColor: PURPLE,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },
  cardBody: { flex: 1, paddingRight: 12 },
  lessonLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#9CA3AF",
  },
  lessonLabelActive: { color: PURPLE },
  lessonTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#001328",
    marginTop: 2,
  },
  lessonTitleBold: { fontFamily: "Poppins-Bold" },
  lessonMeta: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#B8BEC8",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 6,
  },
  xpChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#FFF7ED",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  xpChipDone: {
    backgroundColor: "#ECFDF5",
  },
  xpChipText: {
    fontFamily: "Poppins-Medium",
    fontSize: 11,
    color: "#FF9600",
  },
  xpChipTextDone: {
    color: GREEN,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#EDE9FE",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 5,
  },
  badgeText: {
    fontFamily: "Poppins-Medium",
    fontSize: 11,
    color: PURPLE,
  },
  iconGreen: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  mascotThumb: { width: 54, height: 54 },
  iconLock: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F3F5F7",
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Empty state
  empty: { alignItems: "center", paddingVertical: 52 },
  emptyTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#9CA3AF",
    marginTop: 14,
  },
  emptySub: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#B8BEC8",
    textAlign: "center",
    paddingHorizontal: 32,
    marginTop: 4,
  },
});
