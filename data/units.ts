import { Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "es-u1",
    languageCode: "es",
    title: "Basics 1",
    description: "Greetings, numbers, and essential phrases",
    order: 1,
    color: "#58CC02",
    lessonIds: ["es-u1-l1", "es-u1-l2"],
  },
  {
    id: "fr-u1",
    languageCode: "fr",
    title: "Basics 1",
    description: "Greetings, numbers, and essential phrases",
    order: 1,
    color: "#1CB0F6",
    lessonIds: ["fr-u1-l1"],
  },
  {
    id: "ja-u1",
    languageCode: "ja",
    title: "Basics 1",
    description: "Your first Japanese words and phrases",
    order: 1,
    color: "#FF4B4B",
    lessonIds: ["ja-u1-l1"],
  },
  {
    id: "de-u1",
    languageCode: "de",
    title: "Basics 1",
    description: "Greetings, yes/no, and polite expressions",
    order: 1,
    color: "#FF9600",
    lessonIds: ["de-u1-l1"],
  },
];
