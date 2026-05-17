import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type SocialProvider = "google" | "facebook" | "apple";

interface Props {
  provider: SocialProvider;
  onPress?: () => void;
}

const PROVIDER_CONFIG: Record<
  SocialProvider,
  { icon: keyof typeof Ionicons.glyphMap; color: string; label: string }
> = {
  google: { icon: "logo-google", color: "#4285F4", label: "Continue with Google" },
  facebook: { icon: "logo-facebook", color: "#1877F2", label: "Continue with Facebook" },
  apple: { icon: "logo-apple", color: "#000000", label: "Continue with Apple" },
};

export default function SocialAuthButton({ provider, onPress }: Props) {
  const { icon, color, label } = PROVIDER_CONFIG[provider];

  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={22} color={color} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 12,
    backgroundColor: "#ffffff",
  },
  iconWrap: {
    position: "absolute",
    left: 20,
  },
  label: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    lineHeight: 22,
    color: "#001328",
  },
});
