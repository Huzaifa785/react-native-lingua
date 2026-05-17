import { Tabs } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const ACTIVE_COLOR = "#6C4EF5";
const INACTIVE_COLOR = "#9CA3AF";
const CIRCLE_SIZE = 52;

const TAB_CONFIG = [
  {
    name: "index",
    label: "Home",
    activeIcon: "home" as const,
    inactiveIcon: "home-outline" as const,
  },
  {
    name: "learn",
    label: "Learn",
    activeIcon: "book" as const,
    inactiveIcon: "book-outline" as const,
  },
  {
    name: "ai-teacher",
    label: "AI Teacher",
    activeIcon: "hardware-chip" as const,
    inactiveIcon: "hardware-chip-outline" as const,
  },
  {
    name: "chat",
    label: "Chat",
    activeIcon: "chatbubble" as const,
    inactiveIcon: "chatbubble-outline" as const,
  },
  {
    name: "profile",
    label: "Profile",
    activeIcon: "person" as const,
    inactiveIcon: "person-outline" as const,
  },
];

type TabConfig = (typeof TAB_CONFIG)[0];

function TabItem({
  config,
  isActive,
  onPress,
}: {
  config: TabConfig;
  isActive: boolean;
  onPress: () => void;
}) {
  const circleScale = useSharedValue(isActive ? 1 : 0);

  useEffect(() => {
    circleScale.value = withTiming(isActive ? 1 : 0, { duration: 250 });
  }, [isActive]);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: circleScale.value }],
    opacity: circleScale.value,
  }));

  return (
    <TouchableOpacity onPress={onPress} style={styles.tabItem} activeOpacity={0.8}>
      <View style={styles.iconContainer}>
        {/* Circle renders first so icon paints on top */}
        <Animated.View style={[styles.circle, circleStyle]} />
        <Ionicons
          name={isActive ? config.activeIcon : config.inactiveIcon}
          size={22}
          color={isActive ? "#FFFFFF" : INACTIVE_COLOR}
        />
      </View>
      {!isActive && <Text style={styles.label}>{config.label}</Text>}
    </TouchableOpacity>
  );
}

function CustomTabBar({ state, navigation, insets }: BottomTabBarProps) {
  return (
    <View style={[styles.tabBar, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {TAB_CONFIG.map((tab, index) => (
        <TabItem
          key={tab.name}
          config={tab}
          isActive={state.index === index}
          onPress={() => {
            const event = navigation.emit({
              type: "tabPress",
              target: state.routes[index].key,
              canPreventDefault: true,
            });
            if (!event.defaultPrevented) {
              navigation.navigate(state.routes[index].name);
            }
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 10,
    paddingTop: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 64,
  },
  iconContainer: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    position: "absolute",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: ACTIVE_COLOR,
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: INACTIVE_COLOR,
    marginTop: 2,
  },
});

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="learn" />
      <Tabs.Screen name="ai-teacher" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
