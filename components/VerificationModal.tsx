import { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  visible: boolean;
  email: string;
  onClose: () => void;
  onVerify: (code: string) => Promise<void>;
  onResend: () => Promise<void>;
}

export default function VerificationModal({ visible, email, onClose, onVerify, onResend }: Props) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const refs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (visible) {
      setCode(["", "", "", "", "", ""]);
      setError("");
      const timer = setTimeout(() => refs.current[0]?.focus(), 400);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleVerify = async (fullCode: string) => {
    setLoading(true);
    setError("");
    try {
      await onVerify(fullCode);
    } catch (err: any) {
      const msg = err?.errors?.[0]?.longMessage ?? err?.errors?.[0]?.message ?? "Invalid code. Please try again.";
      setError(msg);
      setCode(["", "", "", "", "", ""]);
      setTimeout(() => refs.current[0]?.focus(), 100);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, "").slice(-1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    if (digit) {
      if (index < 5) {
        refs.current[index + 1]?.focus();
      } else {
        const isComplete = newCode.every((d) => d !== "");
        if (isComplete) {
          handleVerify(newCode.join(""));
        }
      }
    }
  };

  const handleKeyPress = (e: { nativeEvent: { key: string } }, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const handleResend = async () => {
    try {
      await onResend();
      setError("");
      setCode(["", "", "", "", "", ""]);
      setTimeout(() => refs.current[0]?.focus(), 100);
    } catch (err: any) {
      const msg = err?.errors?.[0]?.message ?? "Failed to resend code.";
      setError(msg);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFillObject} onPress={onClose} />
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={styles.sheet}>
            {/* Handle bar */}
            <View style={styles.handle} />

            {/* Header row */}
            <View style={styles.headerRow}>
              <Text style={styles.title}>Check your email</Text>
              <TouchableOpacity onPress={onClose} hitSlop={12}>
                <Ionicons name="close" size={22} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <Text style={styles.subtitle}>
              We sent a 6-digit code to{"\n"}
              <Text style={styles.emailHighlight}>{email || "your email"}</Text>
            </Text>

            {/* Code input row */}
            <View style={styles.codeRow}>
              {code.map((digit, i) => (
                <TextInput
                  key={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  value={digit}
                  onChangeText={(text) => handleChange(text, i)}
                  onKeyPress={(e) => handleKeyPress(e, i)}
                  keyboardType="number-pad"
                  maxLength={2}
                  style={[styles.codeBox, digit ? styles.codeBoxFilled : null]}
                  selectionColor="#6C4EF5"
                  textAlign="center"
                  editable={!loading}
                />
              ))}
            </View>

            {/* Error message */}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            {/* Loading indicator */}
            {loading ? (
              <ActivityIndicator color="#6C4EF5" style={{ marginBottom: 16 }} />
            ) : null}

            <View style={styles.resendRow}>
              <Text style={styles.resendText}>Didn't receive it? </Text>
              <TouchableOpacity onPress={handleResend} disabled={loading}>
                <Text style={styles.resendLink}>Resend code</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 12,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    lineHeight: 26,
    color: "#001328",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 22,
    color: "#6B7280",
    marginBottom: 28,
  },
  emailHighlight: {
    fontFamily: "Poppins-Medium",
    color: "#6C4EF5",
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 16,
  },
  codeBox: {
    flex: 1,
    height: 56,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
    color: "#001328",
    backgroundColor: "#F6F7FB",
  },
  codeBoxFilled: {
    borderColor: "#6C4EF5",
    backgroundColor: "#ffffff",
  },
  errorText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#DC2626",
    textAlign: "center",
    marginBottom: 12,
  },
  resendRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  resendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  resendLink: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#6C4EF5",
  },
});
