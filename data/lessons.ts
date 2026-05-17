import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // --- Spanish Unit 1 ---
  {
    id: "es-u1-l1",
    unitId: "es-u1",
    title: "Greetings",
    description: "Learn how to say hello and goodbye",
    order: 1,
    xpReward: 10,
    vocabulary: [
      { word: "Hola", translation: "Hello", pronunciation: "OH-lah" },
      { word: "Adiós", translation: "Goodbye", pronunciation: "ah-DYOHS" },
      { word: "Gracias", translation: "Thank you", pronunciation: "GRAH-syahs" },
      { word: "Por favor", translation: "Please", pronunciation: "por fah-VOR" },
    ],
    phrases: [
      {
        text: "¡Buenos días!",
        translation: "Good morning!",
        pronunciation: "BWEH-nohs DEE-ahs",
      },
      {
        text: "¿Cómo estás?",
        translation: "How are you?",
        pronunciation: "KOH-moh ehs-TAHS",
      },
      {
        text: "Estoy bien.",
        translation: "I am fine.",
        pronunciation: "ehs-TOY BYEHN",
      },
    ],
    activities: [
      {
        id: "es-u1-l1-a1",
        type: "translation",
        question: 'How do you say "Hello" in Spanish?',
        options: ["Hola", "Adiós", "Gracias", "Por favor"],
        answer: "Hola",
      },
      {
        id: "es-u1-l1-a2",
        type: "translation",
        question: 'What does "Gracias" mean?',
        options: ["Hello", "Goodbye", "Thank you", "Please"],
        answer: "Thank you",
      },
      {
        id: "es-u1-l1-a3",
        type: "fill_in_blank",
        question: "¡Buenos ___! (Good morning!)",
        options: ["noches", "días", "tardes", "años"],
        answer: "días",
      },
    ],
    goal: {
      description: "Learn 4 essential greeting words",
      targetWords: 4,
    },
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Spanish teacher named Sofia. You are teaching a beginner their first Spanish greetings. Speak slowly, be encouraging, and use simple English explanations.",
      introMessage:
        "¡Hola! I'm Sofia, your Spanish teacher! Today we'll learn how to greet people in Spanish. Ready?",
      topics: ["greetings", "farewells", "basic politeness", "pronunciation"],
    },
  },
  {
    id: "es-u1-l2",
    unitId: "es-u1",
    title: "Numbers 1–10",
    description: "Count from one to ten in Spanish",
    order: 2,
    xpReward: 10,
    vocabulary: [
      { word: "uno", translation: "one", pronunciation: "OO-noh" },
      { word: "dos", translation: "two", pronunciation: "DOHS" },
      { word: "tres", translation: "three", pronunciation: "TREHS" },
      { word: "cuatro", translation: "four", pronunciation: "KWAH-troh" },
      { word: "cinco", translation: "five", pronunciation: "SEEN-koh" },
      { word: "seis", translation: "six", pronunciation: "SEYS" },
      { word: "siete", translation: "seven", pronunciation: "SYEH-teh" },
      { word: "ocho", translation: "eight", pronunciation: "OH-choh" },
      { word: "nueve", translation: "nine", pronunciation: "NWEH-veh" },
      { word: "diez", translation: "ten", pronunciation: "DYEHS" },
    ],
    phrases: [
      {
        text: "Tengo cinco años.",
        translation: "I am five years old.",
        pronunciation: "TEHN-goh SEEN-koh AH-nyohs",
      },
    ],
    activities: [
      {
        id: "es-u1-l2-a1",
        type: "translation",
        question: 'How do you say "three" in Spanish?',
        options: ["uno", "dos", "tres", "cuatro"],
        answer: "tres",
      },
      {
        id: "es-u1-l2-a2",
        type: "translation",
        question: 'What does "ocho" mean?',
        options: ["six", "seven", "eight", "nine"],
        answer: "eight",
      },
    ],
    goal: {
      description: "Learn to count from 1 to 10",
      targetWords: 10,
    },
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Spanish teacher named Sofia. You are teaching numbers 1 to 10 to a complete beginner. Use counting games and repetition to make it fun.",
      introMessage:
        "¡Hola de nuevo! Today we're going to count in Spanish. It's easier than you think!",
      topics: ["numbers 1-10", "counting", "age expressions"],
    },
  },

  // --- French Unit 1 ---
  {
    id: "fr-u1-l1",
    unitId: "fr-u1",
    title: "Bonjour!",
    description: "Learn essential French greetings",
    order: 1,
    xpReward: 10,
    vocabulary: [
      { word: "Bonjour", translation: "Hello / Good day", pronunciation: "bon-ZHOOR" },
      { word: "Bonsoir", translation: "Good evening", pronunciation: "bon-SWAHR" },
      { word: "Merci", translation: "Thank you", pronunciation: "mehr-SEE" },
      { word: "S'il vous plaît", translation: "Please", pronunciation: "seel voo PLEH" },
      { word: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAHR" },
    ],
    phrases: [
      {
        text: "Comment allez-vous?",
        translation: "How are you? (formal)",
        pronunciation: "koh-mahn tah-lay VOO",
      },
      {
        text: "Je vais bien.",
        translation: "I am doing well.",
        pronunciation: "zhuh veh BYAHN",
      },
    ],
    activities: [
      {
        id: "fr-u1-l1-a1",
        type: "translation",
        question: 'How do you say "Hello" in French?',
        options: ["Merci", "Bonjour", "Au revoir", "Bonsoir"],
        answer: "Bonjour",
      },
      {
        id: "fr-u1-l1-a2",
        type: "translation",
        question: 'What does "Merci" mean?',
        options: ["Hello", "Please", "Thank you", "Goodbye"],
        answer: "Thank you",
      },
    ],
    goal: {
      description: "Learn 5 essential French greeting words",
      targetWords: 5,
    },
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm French teacher named Claire. You are teaching a beginner their first French greetings. Emphasize the beauty of French pronunciation and be very encouraging.",
      introMessage:
        "Bonjour! I'm Claire, your French teacher. French is a beautiful language — let's start with the basics!",
      topics: ["greetings", "farewells", "politeness", "formal vs informal"],
    },
  },

  // --- Japanese Unit 1 ---
  {
    id: "ja-u1-l1",
    unitId: "ja-u1",
    title: "はじめまして (Nice to meet you)",
    description: "Your first words in Japanese",
    order: 1,
    xpReward: 10,
    vocabulary: [
      { word: "こんにちは", translation: "Hello", pronunciation: "kon-ni-chi-WA" },
      { word: "ありがとう", translation: "Thank you", pronunciation: "a-ri-ga-TO-u" },
      { word: "はい", translation: "Yes", pronunciation: "hai" },
      { word: "いいえ", translation: "No", pronunciation: "ii-e" },
      { word: "すみません", translation: "Excuse me", pronunciation: "su-mi-ma-SEN" },
    ],
    phrases: [
      {
        text: "はじめまして。",
        translation: "Nice to meet you.",
        pronunciation: "ha-ji-me-MA-shi-te",
      },
      {
        text: "よろしくおねがいします。",
        translation: "Please treat me well.",
        pronunciation: "yo-ro-shi-ku o-ne-ga-i-SHI-ma-su",
      },
    ],
    activities: [
      {
        id: "ja-u1-l1-a1",
        type: "translation",
        question: 'How do you say "Hello" in Japanese?',
        options: ["ありがとう", "こんにちは", "すみません", "はい"],
        answer: "こんにちは",
      },
      {
        id: "ja-u1-l1-a2",
        type: "translation",
        question: 'What does "ありがとう" mean?',
        options: ["Yes", "No", "Thank you", "Excuse me"],
        answer: "Thank you",
      },
    ],
    goal: {
      description: "Learn 5 essential Japanese words",
      targetWords: 5,
    },
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Japanese teacher named Yuki. You are teaching a beginner their very first Japanese words. Explain hiragana characters gently and always provide pronunciation guides in romaji.",
      introMessage:
        "こんにちは! I'm Yuki. Japanese might look challenging at first, but we'll take it step by step together!",
      topics: ["basic greetings", "yes and no", "polite expressions", "hiragana intro"],
    },
  },

  // --- German Unit 1 ---
  {
    id: "de-u1-l1",
    unitId: "de-u1",
    title: "Guten Tag!",
    description: "Learn basic German greetings",
    order: 1,
    xpReward: 10,
    vocabulary: [
      { word: "Hallo", translation: "Hello", pronunciation: "HA-loh" },
      { word: "Danke", translation: "Thank you", pronunciation: "DAHN-keh" },
      { word: "Bitte", translation: "Please / You're welcome", pronunciation: "BIT-eh" },
      { word: "Ja", translation: "Yes", pronunciation: "yah" },
      { word: "Nein", translation: "No", pronunciation: "nine" },
      { word: "Tschüss", translation: "Bye", pronunciation: "CHOOS" },
    ],
    phrases: [
      {
        text: "Guten Morgen!",
        translation: "Good morning!",
        pronunciation: "GOO-ten MOR-gen",
      },
      {
        text: "Wie geht es Ihnen?",
        translation: "How are you? (formal)",
        pronunciation: "vee gayt es EE-nen",
      },
    ],
    activities: [
      {
        id: "de-u1-l1-a1",
        type: "translation",
        question: 'How do you say "Thank you" in German?',
        options: ["Hallo", "Bitte", "Danke", "Tschüss"],
        answer: "Danke",
      },
      {
        id: "de-u1-l1-a2",
        type: "translation",
        question: 'What does "Nein" mean?',
        options: ["Yes", "No", "Hello", "Bye"],
        answer: "No",
      },
    ],
    goal: {
      description: "Learn 6 essential German words",
      targetWords: 6,
    },
    aiTeacherPrompt: {
      systemPrompt:
        "You are an enthusiastic German teacher named Max. You are teaching a beginner their first German words. German can seem intimidating — keep the tone fun and approachable.",
      introMessage:
        "Hallo! Ich bin Max — your German teacher! German is very logical once you get the basics. Let's start!",
      topics: ["greetings", "farewells", "yes/no", "formal vs informal"],
    },
  },
];
