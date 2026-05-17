import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSignUp, useSSO } from "@clerk/expo";
import { images } from "@/constants/images";
import SocialAuthButton from "@/components/SocialAuthButton";
import VerificationModal from "@/components/VerificationModal";

export default function SignUpScreen() {
  const router = useRouter();
  const { signUp } = useSignUp();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignUp = async () => {
    if (!signUp || !email.trim() || !password) return;
    setLoading(true);
    setError("");
    try {
      const { error: signUpError } = await signUp.password({
        emailAddress: email.trim(),
        password,
      });
      if (signUpError) {
        setError(signUpError.longMessage ?? signUpError.message ?? "Sign-up failed.");
        return;
      }
      const { error: sendError } = await signUp.verifications.sendEmailCode();
      if (sendError) {
        setError(sendError.longMessage ?? sendError.message ?? "Failed to send verification code.");
        return;
      }
      setModalVisible(true);
    } catch (err: any) {
      setError(err?.errors?.[0]?.longMessage ?? err?.errors?.[0]?.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (code: string) => {
    if (!signUp) throw new Error("Sign-up not initialized.");
    const { error: verifyError } = await signUp.verifications.verifyEmailCode({ code });
    if (verifyError) throw verifyError;
    if (signUp.status === "complete") {
      await signUp.finalize({
        navigate: ({ decorateUrl }) => {
          setModalVisible(false);
          router.replace(decorateUrl("/") as "/");
        },
      });
    }
  };

  const handleResend = async () => {
    if (!signUp) throw new Error("Sign-up not initialized.");
    const { error: sendError } = await signUp.verifications.sendEmailCode();
    if (sendError) throw sendError;
  };

  const handleSSOAuth = async (strategy: "oauth_google" | "oauth_apple" | "oauth_facebook") => {
    setError("");
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
      }
    } catch (err: any) {
      const msg =
        err?.errors?.[0]?.longMessage ??
        err?.errors?.[0]?.message ??
        err?.message ??
        "Social sign-up failed.";
      console.error("SSO error:", err);
      setError(msg);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* Back button */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backBtn}
        hitSlop={12}
      >
        <Ionicons name="chevron-back" size={26} color="#001328" />
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* Heading */}
        <Text style={styles.heading}>Create your account</Text>
        <Text style={styles.subtitle}>Start your language journey today ✨</Text>

        {/* Mascot */}
        <View style={styles.mascotWrap}>
          <Image
            source={images.mascotAuth}
            style={{ width: 180, height: 160 }}
            contentFit="contain"
          />
        </View>

        {/* Email input */}
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputText}
            placeholder="alex@gmail.com"
            placeholderTextColor="#9CA3AF"
            editable={!loading}
          />
        </View>

        {/* Password input */}
        <View style={[styles.inputBox, { marginTop: 12 }]}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={[styles.inputText, { flex: 1 }]}
              placeholder="••••••••••"
              placeholderTextColor="#9CA3AF"
              editable={!loading}
            />
            <TouchableOpacity
              onPress={() => setShowPassword((v) => !v)}
              hitSlop={8}
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#9CA3AF"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Error message */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Sign Up button */}
        <TouchableOpacity
          style={[styles.primaryBtn, (loading || !email.trim() || !password) && styles.primaryBtnDisabled]}
          activeOpacity={0.85}
          onPress={handleSignUp}
          disabled={loading || !email.trim() || !password}
        >
          <Text style={styles.primaryBtnText}>{loading ? "Creating account…" : "Sign Up"}</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerLabel}>or continue with</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social auth */}
        <SocialAuthButton provider="google" onPress={() => handleSSOAuth("oauth_google")} />

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
            <Text style={styles.footerLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        onClose={() => setModalVisible(false)}
        onVerify={handleVerify}
        onResend={handleResend}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    padding: 16,
    paddingBottom: 8,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    lineHeight: 36,
    color: "#001328",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 22,
    color: "#6B7280",
    marginTop: 4,
  },
  mascotWrap: {
    alignItems: "center",
    marginVertical: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: "#ffffff",
  },
  inputLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 16,
    color: "#9CA3AF",
    marginBottom: 2,
  },
  inputText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#001328",
    padding: 0,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  errorText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#DC2626",
    marginTop: 8,
  },
  primaryBtn: {
    backgroundColor: "#6C4EF5",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },
  primaryBtnDisabled: {
    opacity: 0.6,
  },
  primaryBtnText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#ffffff",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dividerLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6B7280",
    marginHorizontal: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  footerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  footerLink: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#6C4EF5",
  },
});
