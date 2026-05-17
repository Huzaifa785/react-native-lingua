export const colors = {
  brand: {
    linguaPurple: "#6C4EF5",
    linguaDeepPurple: "#5B3BF6",
    linguaBlue: "#4D88FF",
    linguaGreen: "#21C16B",
  },
  semantic: {
    success: "#21C16B",
    warning: "#FFCB00",
    streak: "#FF8A00",
    error: "#FF4D4F",
    info: "#4D88FF",
  },
  neutral: {
    foreground: "#001328",
    muted: "#6B7280",
    divider: "#E5E7EB",
    surface: "#F6F7FB",
    canvas: "#FFFFFF",
  },
} as const;

export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const typography = {
  h1: { fontFamily: fonts.bold, fontSize: 32, lineHeight: 38 },
  h2: { fontFamily: fonts.semiBold, fontSize: 24, lineHeight: 31 },
  h3: { fontFamily: fonts.semiBold, fontSize: 20, lineHeight: 26 },
  h4: { fontFamily: fonts.medium, fontSize: 16, lineHeight: 22 },
  bodyLarge: { fontFamily: fonts.regular, fontSize: 16, lineHeight: 26 },
  bodyMedium: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 22 },
  bodySmall: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 21 },
  caption: { fontFamily: fonts.regular, fontSize: 11, lineHeight: 15 },
} as const;
