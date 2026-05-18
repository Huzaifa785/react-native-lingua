import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LessonProgressState {
  completedLessonIds: string[];
  inProgressLessonId: string | null;
  markLessonComplete: (lessonId: string) => void;
  setCurrentLesson: (lessonId: string) => void;
}

export const useLessonProgressStore = create<LessonProgressState>()(
  persist(
    (set) => ({
      // Mock initial state: first two Spanish lessons done, third in progress
      completedLessonIds: ["es-u1-l1", "es-u1-l2"],
      inProgressLessonId: "es-u1-l3",
      markLessonComplete: (lessonId) =>
        set((state) => ({
          completedLessonIds: [...new Set([...state.completedLessonIds, lessonId])],
        })),
      setCurrentLesson: (lessonId) => set({ inProgressLessonId: lessonId }),
    }),
    {
      name: "lesson-progress-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
