export type LanguageCode = "es" | "fr" | "ja" | "de" | "ko" | "zh";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
  learners: string;
}

export type ActivityType =
  | "vocabulary"
  | "translation"
  | "listen_and_repeat"
  | "fill_in_blank"
  | "match_pairs";

export interface VocabularyItem {
  word: string;
  translation: string;
  pronunciation?: string;
  example?: string;
}

export interface Phrase {
  text: string;
  translation: string;
  pronunciation?: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  question: string;
  options?: string[];
  answer: string;
  vocabulary?: VocabularyItem[];
}

export interface LessonGoal {
  description: string;
  targetWords: number;
}

export interface AITeacherPrompt {
  systemPrompt: string;
  introMessage: string;
  topics: string[];
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  order: number;
  xpReward: number;
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  goal: LessonGoal;
  aiTeacherPrompt: AITeacherPrompt;
}

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  title: string;
  description: string;
  order: number;
  color: string;
  lessonIds: string[];
}
