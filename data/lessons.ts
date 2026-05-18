import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─── Spanish Unit 1 ───────────────────────────────────────────────────────
  {
    id: "es-u1-l1",
    unitId: "es-u1",
    title: "Greetings & Introductions",
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
      { text: "¡Buenos días!", translation: "Good morning!", pronunciation: "BWEH-nohs DEE-ahs" },
      { text: "¿Cómo estás?", translation: "How are you?", pronunciation: "KOH-moh ehs-TAHS" },
      { text: "Estoy bien.", translation: "I am fine.", pronunciation: "ehs-TOY BYEHN" },
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
    goal: { description: "Learn 4 essential greeting words", targetWords: 4 },
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
    title: "Daily Life",
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
      { text: "Tengo cinco años.", translation: "I am five years old.", pronunciation: "TEHN-goh SEEN-koh AH-nyohs" },
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
      {
        id: "es-u1-l2-a3",
        type: "fill_in_blank",
        question: "Tengo ___ años. (I am five years old.)",
        options: ["cuatro", "cinco", "seis", "siete"],
        answer: "cinco",
      },
    ],
    goal: { description: "Learn to count from 1 to 10", targetWords: 10 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Spanish teacher named Sofia. You are teaching numbers 1 to 10 to a complete beginner. Use counting games and repetition to make it fun.",
      introMessage:
        "¡Hola de nuevo! Today we're going to count in Spanish. It's easier than you think!",
      topics: ["numbers 1-10", "counting", "age expressions"],
    },
  },
  {
    id: "es-u1-l3",
    unitId: "es-u1",
    title: "At the Café",
    description: "Order food and drinks in Spanish",
    order: 3,
    xpReward: 10,
    vocabulary: [
      { word: "café", translation: "coffee", pronunciation: "kah-FEH" },
      { word: "agua", translation: "water", pronunciation: "AH-gwah" },
      { word: "leche", translation: "milk", pronunciation: "LEH-cheh" },
      { word: "pan", translation: "bread", pronunciation: "PAHN" },
      { word: "mesa", translation: "table", pronunciation: "MEH-sah" },
    ],
    phrases: [
      { text: "Un café, por favor.", translation: "A coffee, please.", pronunciation: "oon kah-FEH por fah-VOR" },
      { text: "¿Cuánto cuesta?", translation: "How much does it cost?", pronunciation: "KWAHN-toh KWEHS-tah" },
      { text: "La cuenta, por favor.", translation: "The bill, please.", pronunciation: "lah KWEHN-tah por fah-VOR" },
    ],
    activities: [
      {
        id: "es-u1-l3-a1",
        type: "translation",
        question: 'How do you say "water" in Spanish?',
        options: ["café", "agua", "leche", "pan"],
        answer: "agua",
      },
      {
        id: "es-u1-l3-a2",
        type: "translation",
        question: 'What does "La cuenta" mean?',
        options: ["The table", "The menu", "The bill", "The coffee"],
        answer: "The bill",
      },
      {
        id: "es-u1-l3-a3",
        type: "fill_in_blank",
        question: "Un café, por ___. (A coffee, please.)",
        options: ["gracia", "favor", "nada", "bien"],
        answer: "favor",
      },
    ],
    goal: { description: "Learn 5 café vocabulary words", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Sofia, a friendly Spanish teacher. You are teaching café vocabulary and ordering phrases to a beginner.",
      introMessage:
        "¡Hola! Today we're visiting a Spanish café — ¡Una experiencia deliciosa! Let's learn how to order.",
      topics: ["food and drinks", "ordering", "asking for the bill", "prices"],
    },
  },
  {
    id: "es-u1-l4",
    unitId: "es-u1",
    title: "Travel & Directions",
    description: "Ask for and understand directions",
    order: 4,
    xpReward: 10,
    vocabulary: [
      { word: "izquierda", translation: "left", pronunciation: "ees-KYEHR-dah" },
      { word: "derecha", translation: "right", pronunciation: "deh-REH-chah" },
      { word: "recto", translation: "straight ahead", pronunciation: "REHK-toh" },
      { word: "calle", translation: "street", pronunciation: "KAH-yeh" },
      { word: "cerca", translation: "near / close", pronunciation: "SEHR-kah" },
    ],
    phrases: [
      { text: "¿Dónde está...?", translation: "Where is...?", pronunciation: "DON-deh ehs-TAH" },
      { text: "Gire a la izquierda.", translation: "Turn left.", pronunciation: "HEE-reh ah lah ees-KYEHR-dah" },
      { text: "Está cerca.", translation: "It is nearby.", pronunciation: "ehs-TAH SEHR-kah" },
    ],
    activities: [
      {
        id: "es-u1-l4-a1",
        type: "translation",
        question: 'How do you say "left" in Spanish?',
        options: ["derecha", "recto", "izquierda", "calle"],
        answer: "izquierda",
      },
      {
        id: "es-u1-l4-a2",
        type: "translation",
        question: 'What does "¿Dónde está?" mean?',
        options: ["How much is it?", "Where is it?", "What is this?", "Is it far?"],
        answer: "Where is it?",
      },
      {
        id: "es-u1-l4-a3",
        type: "fill_in_blank",
        question: "Gire a la ___. (Turn left.)",
        options: ["derecha", "izquierda", "recto", "calle"],
        answer: "izquierda",
      },
    ],
    goal: { description: "Learn 5 direction words", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Sofia, a friendly Spanish teacher. Help a beginner learn how to navigate and ask for directions in Spanish.",
      introMessage:
        "¡Vamos! Today we're going to explore how to give and ask for directions in Spanish cities.",
      topics: ["directions", "locations", "transport", "asking for help"],
    },
  },
  {
    id: "es-u1-l5",
    unitId: "es-u1",
    title: "Shopping",
    description: "Shop and talk about prices in Spanish",
    order: 5,
    xpReward: 10,
    vocabulary: [
      { word: "tienda", translation: "store / shop", pronunciation: "TYEHN-dah" },
      { word: "precio", translation: "price", pronunciation: "PREH-syoh" },
      { word: "barato", translation: "cheap", pronunciation: "bah-RAH-toh" },
      { word: "caro", translation: "expensive", pronunciation: "KAH-roh" },
      { word: "dinero", translation: "money", pronunciation: "dee-NEH-roh" },
    ],
    phrases: [
      { text: "¿Cuánto vale?", translation: "How much is it?", pronunciation: "KWAHN-toh BAH-leh" },
      { text: "Es muy caro.", translation: "It is very expensive.", pronunciation: "ehs MWEE KAH-roh" },
      { text: "Me lo llevo.", translation: "I'll take it.", pronunciation: "meh loh YEH-boh" },
    ],
    activities: [
      {
        id: "es-u1-l5-a1",
        type: "translation",
        question: 'What does "barato" mean?',
        options: ["expensive", "cheap", "price", "store"],
        answer: "cheap",
      },
      {
        id: "es-u1-l5-a2",
        type: "translation",
        question: 'How do you say "I\'ll take it" in Spanish?',
        options: ["Es muy caro.", "¿Cuánto vale?", "Me lo llevo.", "Tengo dinero."],
        answer: "Me lo llevo.",
      },
      {
        id: "es-u1-l5-a3",
        type: "fill_in_blank",
        question: "Es muy ___. (It is very expensive.)",
        options: ["barato", "caro", "precio", "tienda"],
        answer: "caro",
      },
    ],
    goal: { description: "Learn 5 shopping vocabulary words", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Sofia, a friendly Spanish teacher. Teach a beginner how to shop and talk about prices in Spanish.",
      introMessage:
        "¡Bienvenidos al mercado! Today we'll learn how to shop in Spanish — very useful for any trip!",
      topics: ["shopping", "prices", "bargaining", "money"],
    },
  },
  {
    id: "es-u1-l6",
    unitId: "es-u1",
    title: "Family & Friends",
    description: "Talk about your family in Spanish",
    order: 6,
    xpReward: 10,
    vocabulary: [
      { word: "familia", translation: "family", pronunciation: "fah-MEE-lyah" },
      { word: "madre", translation: "mother", pronunciation: "MAH-dreh" },
      { word: "padre", translation: "father", pronunciation: "PAH-dreh" },
      { word: "hermano", translation: "brother", pronunciation: "ehr-MAH-noh" },
      { word: "hermana", translation: "sister", pronunciation: "ehr-MAH-nah" },
    ],
    phrases: [
      { text: "Tengo una familia.", translation: "I have a family.", pronunciation: "TEHN-goh OO-nah fah-MEE-lyah" },
      { text: "Él es mi hermano.", translation: "He is my brother.", pronunciation: "ehl ehs mee ehr-MAH-noh" },
      { text: "Ella es mi hermana.", translation: "She is my sister.", pronunciation: "EH-yah ehs mee ehr-MAH-nah" },
    ],
    activities: [
      {
        id: "es-u1-l6-a1",
        type: "translation",
        question: 'How do you say "mother" in Spanish?',
        options: ["padre", "hermano", "madre", "familia"],
        answer: "madre",
      },
      {
        id: "es-u1-l6-a2",
        type: "translation",
        question: 'What does "hermano" mean?',
        options: ["sister", "father", "mother", "brother"],
        answer: "brother",
      },
      {
        id: "es-u1-l6-a3",
        type: "fill_in_blank",
        question: "Él es mi ___. (He is my brother.)",
        options: ["hermana", "hermano", "padre", "madre"],
        answer: "hermano",
      },
    ],
    goal: { description: "Learn 5 family words", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Sofia, a friendly Spanish teacher. Help a beginner learn family vocabulary and talk about loved ones in Spanish.",
      introMessage:
        "¡La familia es todo! Today we'll talk about family in Spanish — one of the most heartwarming topics!",
      topics: ["family members", "relationships", "describing people"],
    },
  },

  // ─── French Unit 1 ────────────────────────────────────────────────────────
  {
    id: "fr-u1-l1",
    unitId: "fr-u1",
    title: "Greetings & Introductions",
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
      { text: "Comment allez-vous?", translation: "How are you? (formal)", pronunciation: "koh-mahn tah-lay VOO" },
      { text: "Je vais bien.", translation: "I am doing well.", pronunciation: "zhuh veh BYAHN" },
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
      {
        id: "fr-u1-l1-a3",
        type: "fill_in_blank",
        question: "Je vais ___. (I am doing well.)",
        options: ["mal", "bien", "merci", "bonjour"],
        answer: "bien",
      },
    ],
    goal: { description: "Learn 5 essential French greeting words", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm French teacher named Claire. You are teaching a beginner their first French greetings. Emphasize the beauty of French pronunciation and be very encouraging.",
      introMessage:
        "Bonjour! I'm Claire, your French teacher. French is a beautiful language — let's start with the basics!",
      topics: ["greetings", "farewells", "politeness", "formal vs informal"],
    },
  },
  {
    id: "fr-u1-l2",
    unitId: "fr-u1",
    title: "Daily Life",
    description: "Numbers and telling the time",
    order: 2,
    xpReward: 10,
    vocabulary: [
      { word: "un", translation: "one", pronunciation: "UHN" },
      { word: "deux", translation: "two", pronunciation: "DUH" },
      { word: "trois", translation: "three", pronunciation: "TRWAH" },
      { word: "quatre", translation: "four", pronunciation: "KAH-truh" },
      { word: "cinq", translation: "five", pronunciation: "SANK" },
    ],
    phrases: [
      { text: "Il est midi.", translation: "It is noon.", pronunciation: "eel eh mee-DEE" },
      { text: "À quelle heure?", translation: "At what time?", pronunciation: "ah kehl UHR" },
      { text: "C'est combien?", translation: "How much is it?", pronunciation: "seh kom-BYAHN" },
    ],
    activities: [
      {
        id: "fr-u1-l2-a1",
        type: "translation",
        question: 'How do you say "three" in French?',
        options: ["un", "deux", "trois", "quatre"],
        answer: "trois",
      },
      {
        id: "fr-u1-l2-a2",
        type: "translation",
        question: 'What does "cinq" mean?',
        options: ["two", "three", "four", "five"],
        answer: "five",
      },
      {
        id: "fr-u1-l2-a3",
        type: "fill_in_blank",
        question: "Il est ___. (It is noon.)",
        options: ["minuit", "midi", "soir", "matin"],
        answer: "midi",
      },
    ],
    goal: { description: "Learn to count 1–5 and tell time", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Claire, a warm French teacher. Teach a beginner numbers 1–5 and basic time expressions.",
      introMessage:
        "Bonjour! Les chiffres — numbers — are everywhere. Let's count in French and learn to tell the time!",
      topics: ["numbers", "time", "daily schedule"],
    },
  },
  {
    id: "fr-u1-l3",
    unitId: "fr-u1",
    title: "At the Café",
    description: "Order food and drinks at a French café",
    order: 3,
    xpReward: 10,
    vocabulary: [
      { word: "café", translation: "coffee", pronunciation: "kah-FEH" },
      { word: "thé", translation: "tea", pronunciation: "TAY" },
      { word: "eau", translation: "water", pronunciation: "OH" },
      { word: "croissant", translation: "croissant", pronunciation: "krwah-SAHN" },
      { word: "l'addition", translation: "the bill", pronunciation: "lah-dee-SYOHN" },
    ],
    phrases: [
      { text: "Un café, s'il vous plaît.", translation: "A coffee, please.", pronunciation: "uhn kah-FEH seel voo PLEH" },
      { text: "L'addition, s'il vous plaît.", translation: "The bill, please.", pronunciation: "lah-dee-SYOHN seel voo PLEH" },
      { text: "C'est délicieux!", translation: "It's delicious!", pronunciation: "seh day-lee-SYUH" },
    ],
    activities: [
      {
        id: "fr-u1-l3-a1",
        type: "translation",
        question: 'What does "eau" mean in French?',
        options: ["tea", "coffee", "water", "milk"],
        answer: "water",
      },
      {
        id: "fr-u1-l3-a2",
        type: "translation",
        question: 'How do you ask for the bill in French?',
        options: ["Un café, s'il vous plaît.", "C'est délicieux!", "L'addition, s'il vous plaît.", "Bonjour!"],
        answer: "L'addition, s'il vous plaît.",
      },
      {
        id: "fr-u1-l3-a3",
        type: "fill_in_blank",
        question: "Un ___, s'il vous plaît. (A coffee, please.)",
        options: ["thé", "eau", "café", "croissant"],
        answer: "café",
      },
    ],
    goal: { description: "Learn 5 café vocabulary words", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Claire, a warm French teacher. Teach a beginner how to order at a French café — a quintessential French experience.",
      introMessage:
        "Bienvenue au café! Ordering in a French café is one of life's great pleasures. Let's learn how!",
      topics: ["café vocabulary", "ordering", "the bill", "expressions"],
    },
  },
  {
    id: "fr-u1-l4",
    unitId: "fr-u1",
    title: "Travel & Directions",
    description: "Navigate and ask for directions in French",
    order: 4,
    xpReward: 10,
    vocabulary: [
      { word: "gauche", translation: "left", pronunciation: "GOHSH" },
      { word: "droite", translation: "right", pronunciation: "DRWAHT" },
      { word: "tout droit", translation: "straight ahead", pronunciation: "too DRWAH" },
      { word: "rue", translation: "street", pronunciation: "ROO" },
      { word: "loin", translation: "far", pronunciation: "LWAHN" },
    ],
    phrases: [
      { text: "Où est...?", translation: "Where is...?", pronunciation: "oo eh" },
      { text: "Tournez à gauche.", translation: "Turn left.", pronunciation: "toor-NAY ah GOHSH" },
      { text: "C'est loin?", translation: "Is it far?", pronunciation: "seh LWAHN" },
    ],
    activities: [
      {
        id: "fr-u1-l4-a1",
        type: "translation",
        question: 'How do you say "left" in French?',
        options: ["droite", "rue", "gauche", "loin"],
        answer: "gauche",
      },
      {
        id: "fr-u1-l4-a2",
        type: "translation",
        question: 'What does "tout droit" mean?',
        options: ["Turn right", "Straight ahead", "Turn left", "Near here"],
        answer: "Straight ahead",
      },
      {
        id: "fr-u1-l4-a3",
        type: "fill_in_blank",
        question: "Tournez à ___. (Turn left.)",
        options: ["droite", "gauche", "rue", "loin"],
        answer: "gauche",
      },
    ],
    goal: { description: "Learn 5 direction words", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Claire, a warm French teacher. Help a beginner learn directions and navigate in French cities.",
      introMessage:
        "Paris is a magnificent city — and now you'll be able to navigate it! Let's learn directions in French.",
      topics: ["directions", "transportation", "asking for help", "locations"],
    },
  },
  {
    id: "fr-u1-l5",
    unitId: "fr-u1",
    title: "Shopping",
    description: "Shop and ask about prices in French",
    order: 5,
    xpReward: 10,
    vocabulary: [
      { word: "magasin", translation: "store / shop", pronunciation: "mah-gah-ZAHN" },
      { word: "prix", translation: "price", pronunciation: "PREE" },
      { word: "bon marché", translation: "cheap / inexpensive", pronunciation: "bohn mar-SHAY" },
      { word: "cher", translation: "expensive", pronunciation: "SHEHR" },
      { word: "argent", translation: "money", pronunciation: "ar-ZHAHN" },
    ],
    phrases: [
      { text: "Combien ça coûte?", translation: "How much does it cost?", pronunciation: "kom-BYAHN sah KOOT" },
      { text: "C'est trop cher.", translation: "It's too expensive.", pronunciation: "seh troh SHEHR" },
      { text: "Je le prends.", translation: "I'll take it.", pronunciation: "zhuh luh PRAHN" },
    ],
    activities: [
      {
        id: "fr-u1-l5-a1",
        type: "translation",
        question: 'What does "cher" mean?',
        options: ["cheap", "price", "expensive", "money"],
        answer: "expensive",
      },
      {
        id: "fr-u1-l5-a2",
        type: "translation",
        question: 'How do you say "I\'ll take it" in French?',
        options: ["C'est trop cher.", "Combien ça coûte?", "Je le prends.", "Bon marché."],
        answer: "Je le prends.",
      },
      {
        id: "fr-u1-l5-a3",
        type: "fill_in_blank",
        question: "C'est trop ___. (It's too expensive.)",
        options: ["bon marché", "cher", "prix", "argent"],
        answer: "cher",
      },
    ],
    goal: { description: "Learn 5 shopping vocabulary words", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Claire, a warm French teacher. Teach a beginner how to shop and talk about prices in French.",
      introMessage:
        "Les Champs-Élysées, le marché — shopping in France is an experience! Let's learn the vocabulary.",
      topics: ["shopping", "prices", "bargaining", "stores"],
    },
  },
  {
    id: "fr-u1-l6",
    unitId: "fr-u1",
    title: "Family & Friends",
    description: "Talk about your family in French",
    order: 6,
    xpReward: 10,
    vocabulary: [
      { word: "famille", translation: "family", pronunciation: "fah-MEE" },
      { word: "mère", translation: "mother", pronunciation: "MEHR" },
      { word: "père", translation: "father", pronunciation: "PEHR" },
      { word: "frère", translation: "brother", pronunciation: "FREHR" },
      { word: "sœur", translation: "sister", pronunciation: "SUR" },
    ],
    phrases: [
      { text: "J'ai une grande famille.", translation: "I have a big family.", pronunciation: "zhay oon grond fah-MEE" },
      { text: "C'est mon frère.", translation: "This is my brother.", pronunciation: "seh mon FREHR" },
      { text: "Elle est ma sœur.", translation: "She is my sister.", pronunciation: "ehl eh mah SUR" },
    ],
    activities: [
      {
        id: "fr-u1-l6-a1",
        type: "translation",
        question: 'How do you say "mother" in French?',
        options: ["père", "frère", "mère", "sœur"],
        answer: "mère",
      },
      {
        id: "fr-u1-l6-a2",
        type: "translation",
        question: 'What does "frère" mean?',
        options: ["sister", "father", "mother", "brother"],
        answer: "brother",
      },
      {
        id: "fr-u1-l6-a3",
        type: "fill_in_blank",
        question: "C'est mon ___. (This is my brother.)",
        options: ["sœur", "mère", "père", "frère"],
        answer: "frère",
      },
    ],
    goal: { description: "Learn 5 family words", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Claire, a warm French teacher. Help a beginner learn family vocabulary in French.",
      introMessage:
        "La famille — family is so important in French culture! Let's learn the words to talk about your loved ones.",
      topics: ["family members", "relationships", "describing family"],
    },
  },

  // ─── Japanese Unit 1 ──────────────────────────────────────────────────────
  {
    id: "ja-u1-l1",
    unitId: "ja-u1",
    title: "Greetings & Introductions",
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
      { text: "はじめまして。", translation: "Nice to meet you.", pronunciation: "ha-ji-me-MA-shi-te" },
      { text: "よろしくおねがいします。", translation: "Please treat me well.", pronunciation: "yo-ro-shi-ku o-ne-ga-i-SHI-ma-su" },
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
      {
        id: "ja-u1-l1-a3",
        type: "fill_in_blank",
        question: "はじめ___。 (Nice to meet you.)",
        options: ["まして", "ました", "ません", "ます"],
        answer: "まして",
      },
    ],
    goal: { description: "Learn 5 essential Japanese words", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are a patient Japanese teacher named Yuki. You are teaching a beginner their very first Japanese words. Explain hiragana characters gently and always provide pronunciation guides in romaji.",
      introMessage:
        "こんにちは! I'm Yuki. Japanese might look challenging at first, but we'll take it step by step together!",
      topics: ["basic greetings", "yes and no", "polite expressions", "hiragana intro"],
    },
  },
  {
    id: "ja-u1-l2",
    unitId: "ja-u1",
    title: "Daily Life",
    description: "Numbers and time in Japanese",
    order: 2,
    xpReward: 10,
    vocabulary: [
      { word: "いち", translation: "one", pronunciation: "i-chi" },
      { word: "に", translation: "two", pronunciation: "ni" },
      { word: "さん", translation: "three", pronunciation: "san" },
      { word: "し／よん", translation: "four", pronunciation: "shi / yon" },
      { word: "ご", translation: "five", pronunciation: "go" },
    ],
    phrases: [
      { text: "いまなんじですか。", translation: "What time is it now?", pronunciation: "i-ma nan-ji DE-su-ka" },
      { text: "にじです。", translation: "It is two o'clock.", pronunciation: "ni-ji DE-su" },
    ],
    activities: [
      {
        id: "ja-u1-l2-a1",
        type: "translation",
        question: 'How do you say "three" in Japanese?',
        options: ["いち", "に", "さん", "ご"],
        answer: "さん",
      },
      {
        id: "ja-u1-l2-a2",
        type: "translation",
        question: 'What does "ご" mean?',
        options: ["one", "two", "four", "five"],
        answer: "five",
      },
      {
        id: "ja-u1-l2-a3",
        type: "fill_in_blank",
        question: "いまなん___ですか。 (What time is it?)",
        options: ["じ", "に", "ご", "さん"],
        answer: "じ",
      },
    ],
    goal: { description: "Learn numbers 1–5 in Japanese", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Yuki, a patient Japanese teacher. Teach a beginner numbers 1–5 and basic time expressions in Japanese.",
      introMessage:
        "Let's count in Japanese! Numbers are the building blocks of so many conversations.",
      topics: ["numbers 1-5", "telling time", "basic counting"],
    },
  },
  {
    id: "ja-u1-l3",
    unitId: "ja-u1",
    title: "At the Café",
    description: "Order at a Japanese café",
    order: 3,
    xpReward: 10,
    vocabulary: [
      { word: "コーヒー", translation: "coffee", pronunciation: "KO-hi" },
      { word: "おちゃ", translation: "green tea", pronunciation: "o-CHA" },
      { word: "みず", translation: "water", pronunciation: "mi-zu" },
      { word: "ケーキ", translation: "cake", pronunciation: "KE-ki" },
      { word: "おかいけい", translation: "the bill", pronunciation: "o-kai-KE-i" },
    ],
    phrases: [
      { text: "コーヒーをください。", translation: "Coffee, please.", pronunciation: "KO-hi-wo ku-da-SAI" },
      { text: "おかいけいをおねがいします。", translation: "The bill, please.", pronunciation: "o-kai-ke-i wo o-ne-GAI-shi-ma-su" },
      { text: "おいしい！", translation: "Delicious!", pronunciation: "o-i-SHI-i" },
    ],
    activities: [
      {
        id: "ja-u1-l3-a1",
        type: "translation",
        question: 'How do you say "coffee" in Japanese?',
        options: ["おちゃ", "みず", "コーヒー", "ケーキ"],
        answer: "コーヒー",
      },
      {
        id: "ja-u1-l3-a2",
        type: "translation",
        question: 'What does "おいしい" mean?',
        options: ["Thank you", "Delicious", "The bill", "Please"],
        answer: "Delicious",
      },
      {
        id: "ja-u1-l3-a3",
        type: "fill_in_blank",
        question: "コーヒーを___。 (Coffee, please.)",
        options: ["ください", "おねがい", "ありがとう", "どうぞ"],
        answer: "ください",
      },
    ],
    goal: { description: "Learn 5 café words in Japanese", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Yuki, a patient Japanese teacher. Teach a beginner how to order at a Japanese café.",
      introMessage:
        "Japanese cafés are wonderful! Today we'll learn how to order drinks and snacks — とても楽しい！",
      topics: ["café vocabulary", "ordering", "politeness", "food and drink"],
    },
  },
  {
    id: "ja-u1-l4",
    unitId: "ja-u1",
    title: "Travel & Directions",
    description: "Navigate and ask for directions in Japanese",
    order: 4,
    xpReward: 10,
    vocabulary: [
      { word: "みぎ", translation: "right", pronunciation: "mi-gi" },
      { word: "ひだり", translation: "left", pronunciation: "hi-DA-ri" },
      { word: "まっすぐ", translation: "straight ahead", pronunciation: "mas-SU-gu" },
      { word: "えき", translation: "station", pronunciation: "e-ki" },
      { word: "でぐち", translation: "exit", pronunciation: "de-GU-chi" },
    ],
    phrases: [
      { text: "〜はどこですか。", translation: "Where is ~?", pronunciation: "~ wa do-ko DE-su-ka" },
      { text: "まっすぐいってください。", translation: "Please go straight.", pronunciation: "mas-su-gu IT-te ku-da-SAI" },
      { text: "ちかいです。", translation: "It is nearby.", pronunciation: "chi-KA-i DE-su" },
    ],
    activities: [
      {
        id: "ja-u1-l4-a1",
        type: "translation",
        question: 'How do you say "left" in Japanese?',
        options: ["みぎ", "まっすぐ", "えき", "ひだり"],
        answer: "ひだり",
      },
      {
        id: "ja-u1-l4-a2",
        type: "translation",
        question: 'What does "えき" mean?',
        options: ["exit", "right", "station", "left"],
        answer: "station",
      },
      {
        id: "ja-u1-l4-a3",
        type: "fill_in_blank",
        question: "〜はどこ___か。 (Where is ~?)",
        options: ["です", "ます", "でし", "あり"],
        answer: "です",
      },
    ],
    goal: { description: "Learn 5 direction words in Japanese", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Yuki, a patient Japanese teacher. Help a beginner learn directions and navigate in Japanese.",
      introMessage:
        "Tokyo is an amazing city to explore! Let's learn how to ask for directions in Japanese.",
      topics: ["directions", "transport", "locations", "asking for help"],
    },
  },
  {
    id: "ja-u1-l5",
    unitId: "ja-u1",
    title: "Shopping",
    description: "Shop and ask about prices in Japanese",
    order: 5,
    xpReward: 10,
    vocabulary: [
      { word: "みせ", translation: "store / shop", pronunciation: "mi-se" },
      { word: "ねだん", translation: "price", pronunciation: "ne-DAN" },
      { word: "やすい", translation: "cheap / inexpensive", pronunciation: "ya-SU-i" },
      { word: "たかい", translation: "expensive", pronunciation: "ta-KA-i" },
      { word: "おかね", translation: "money", pronunciation: "o-KA-ne" },
    ],
    phrases: [
      { text: "いくらですか。", translation: "How much is it?", pronunciation: "i-ku-ra DE-su-ka" },
      { text: "たかいです。", translation: "It is expensive.", pronunciation: "ta-KA-i DE-su" },
      { text: "これをください。", translation: "I'll take this.", pronunciation: "ko-re wo ku-da-SAI" },
    ],
    activities: [
      {
        id: "ja-u1-l5-a1",
        type: "translation",
        question: 'What does "やすい" mean?',
        options: ["expensive", "money", "cheap", "price"],
        answer: "cheap",
      },
      {
        id: "ja-u1-l5-a2",
        type: "translation",
        question: 'How do you ask "How much is it?" in Japanese?',
        options: ["これをください。", "たかいです。", "いくらですか。", "やすいです。"],
        answer: "いくらですか。",
      },
      {
        id: "ja-u1-l5-a3",
        type: "fill_in_blank",
        question: "これを___。 (I'll take this.)",
        options: ["ください", "おねがい", "ありがとう", "すみません"],
        answer: "ください",
      },
    ],
    goal: { description: "Learn 5 shopping words in Japanese", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Yuki, a patient Japanese teacher. Teach a beginner how to shop and ask about prices in Japanese.",
      introMessage:
        "Shopping in Japan is an adventure — great quality, amazing variety! Let's learn how to shop in Japanese.",
      topics: ["shopping", "prices", "asking for items", "money"],
    },
  },
  {
    id: "ja-u1-l6",
    unitId: "ja-u1",
    title: "Family & Friends",
    description: "Talk about your family in Japanese",
    order: 6,
    xpReward: 10,
    vocabulary: [
      { word: "かぞく", translation: "family", pronunciation: "ka-ZO-ku" },
      { word: "おかあさん", translation: "mother", pronunciation: "o-KA-a-san" },
      { word: "おとうさん", translation: "father", pronunciation: "o-TO-u-san" },
      { word: "あに", translation: "older brother", pronunciation: "a-ni" },
      { word: "あね", translation: "older sister", pronunciation: "a-ne" },
    ],
    phrases: [
      { text: "かぞくはなんにんですか。", translation: "How many people are in your family?", pronunciation: "ka-zo-ku wa nan-NIN DE-su-ka" },
      { text: "あにがいます。", translation: "I have an older brother.", pronunciation: "a-ni ga i-MA-su" },
    ],
    activities: [
      {
        id: "ja-u1-l6-a1",
        type: "translation",
        question: 'How do you say "mother" in Japanese?',
        options: ["おとうさん", "あに", "おかあさん", "あね"],
        answer: "おかあさん",
      },
      {
        id: "ja-u1-l6-a2",
        type: "translation",
        question: 'What does "あに" mean?',
        options: ["older sister", "father", "younger brother", "older brother"],
        answer: "older brother",
      },
      {
        id: "ja-u1-l6-a3",
        type: "fill_in_blank",
        question: "あにが___。 (I have an older brother.)",
        options: ["います", "ます", "です", "ある"],
        answer: "います",
      },
    ],
    goal: { description: "Learn 5 family words in Japanese", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Yuki, a patient Japanese teacher. Help a beginner learn family vocabulary in Japanese.",
      introMessage:
        "かぞく — family — is at the heart of Japanese culture. Let's learn these important words together!",
      topics: ["family members", "relationships", "describing family"],
    },
  },

  // ─── German Unit 1 ────────────────────────────────────────────────────────
  {
    id: "de-u1-l1",
    unitId: "de-u1",
    title: "Greetings & Introductions",
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
      { text: "Guten Morgen!", translation: "Good morning!", pronunciation: "GOO-ten MOR-gen" },
      { text: "Wie geht es Ihnen?", translation: "How are you? (formal)", pronunciation: "vee gayt es EE-nen" },
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
      {
        id: "de-u1-l1-a3",
        type: "fill_in_blank",
        question: "Guten ___! (Good morning!)",
        options: ["Abend", "Nacht", "Morgen", "Tag"],
        answer: "Morgen",
      },
    ],
    goal: { description: "Learn 6 essential German words", targetWords: 6 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are an enthusiastic German teacher named Max. You are teaching a beginner their first German words. German can seem intimidating — keep the tone fun and approachable.",
      introMessage:
        "Hallo! Ich bin Max — your German teacher! German is very logical once you get the basics. Let's start!",
      topics: ["greetings", "farewells", "yes/no", "formal vs informal"],
    },
  },
  {
    id: "de-u1-l2",
    unitId: "de-u1",
    title: "Daily Life",
    description: "Numbers and time in German",
    order: 2,
    xpReward: 10,
    vocabulary: [
      { word: "eins", translation: "one", pronunciation: "INES" },
      { word: "zwei", translation: "two", pronunciation: "TSVIE" },
      { word: "drei", translation: "three", pronunciation: "DRY" },
      { word: "vier", translation: "four", pronunciation: "FEER" },
      { word: "fünf", translation: "five", pronunciation: "FUENF" },
    ],
    phrases: [
      { text: "Wie spät ist es?", translation: "What time is it?", pronunciation: "vee shpayt IST es" },
      { text: "Es ist zwei Uhr.", translation: "It is two o'clock.", pronunciation: "es ist TSVIE oor" },
    ],
    activities: [
      {
        id: "de-u1-l2-a1",
        type: "translation",
        question: 'How do you say "three" in German?',
        options: ["eins", "zwei", "drei", "vier"],
        answer: "drei",
      },
      {
        id: "de-u1-l2-a2",
        type: "translation",
        question: 'What does "fünf" mean?',
        options: ["two", "three", "four", "five"],
        answer: "five",
      },
      {
        id: "de-u1-l2-a3",
        type: "fill_in_blank",
        question: "Es ist ___ Uhr. (It is two o'clock.)",
        options: ["eins", "zwei", "drei", "vier"],
        answer: "zwei",
      },
    ],
    goal: { description: "Learn numbers 1–5 in German", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Max, an enthusiastic German teacher. Teach a beginner numbers 1–5 and basic time expressions.",
      introMessage:
        "Zahlen — numbers — are everywhere! Let's learn to count in German and tell the time.",
      topics: ["numbers 1-5", "telling time", "counting"],
    },
  },
  {
    id: "de-u1-l3",
    unitId: "de-u1",
    title: "At the Café",
    description: "Order food and drinks at a German café",
    order: 3,
    xpReward: 10,
    vocabulary: [
      { word: "Kaffee", translation: "coffee", pronunciation: "KAH-feh" },
      { word: "Tee", translation: "tea", pronunciation: "TAY" },
      { word: "Wasser", translation: "water", pronunciation: "VAH-ser" },
      { word: "Kuchen", translation: "cake", pronunciation: "KOO-khen" },
      { word: "die Rechnung", translation: "the bill", pronunciation: "dee RECH-nung" },
    ],
    phrases: [
      { text: "Einen Kaffee, bitte.", translation: "A coffee, please.", pronunciation: "INE-en KAH-feh BIT-eh" },
      { text: "Die Rechnung, bitte.", translation: "The bill, please.", pronunciation: "dee RECH-nung BIT-eh" },
      { text: "Das schmeckt gut!", translation: "That tastes good!", pronunciation: "das shMECKT goot" },
    ],
    activities: [
      {
        id: "de-u1-l3-a1",
        type: "translation",
        question: 'How do you say "water" in German?',
        options: ["Kaffee", "Tee", "Wasser", "Kuchen"],
        answer: "Wasser",
      },
      {
        id: "de-u1-l3-a2",
        type: "translation",
        question: 'What does "die Rechnung" mean?',
        options: ["the coffee", "the cake", "the bill", "the tea"],
        answer: "the bill",
      },
      {
        id: "de-u1-l3-a3",
        type: "fill_in_blank",
        question: "Einen Kaffee, ___. (A coffee, please.)",
        options: ["Danke", "Ja", "bitte", "Nein"],
        answer: "bitte",
      },
    ],
    goal: { description: "Learn 5 café words in German", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Max, an enthusiastic German teacher. Teach a beginner how to order at a German café.",
      introMessage:
        "Willkommen im Café! Germany has a wonderful café culture. Let's learn how to order like a local!",
      topics: ["café vocabulary", "ordering", "food and drinks", "the bill"],
    },
  },
  {
    id: "de-u1-l4",
    unitId: "de-u1",
    title: "Travel & Directions",
    description: "Navigate and ask for directions in German",
    order: 4,
    xpReward: 10,
    vocabulary: [
      { word: "links", translation: "left", pronunciation: "LINKS" },
      { word: "rechts", translation: "right", pronunciation: "RECHTS" },
      { word: "geradeaus", translation: "straight ahead", pronunciation: "geh-rah-deh-OWS" },
      { word: "Straße", translation: "street", pronunciation: "STRAH-seh" },
      { word: "Bahnhof", translation: "train station", pronunciation: "BAHN-hof" },
    ],
    phrases: [
      { text: "Wo ist...?", translation: "Where is...?", pronunciation: "voh IST" },
      { text: "Gehen Sie links.", translation: "Go left.", pronunciation: "GAY-en zee LINKS" },
      { text: "Ist es weit?", translation: "Is it far?", pronunciation: "ist es VITE" },
    ],
    activities: [
      {
        id: "de-u1-l4-a1",
        type: "translation",
        question: 'How do you say "right" in German?',
        options: ["links", "geradeaus", "rechts", "Straße"],
        answer: "rechts",
      },
      {
        id: "de-u1-l4-a2",
        type: "translation",
        question: 'What does "geradeaus" mean?',
        options: ["Turn right", "Straight ahead", "Turn left", "Train station"],
        answer: "Straight ahead",
      },
      {
        id: "de-u1-l4-a3",
        type: "fill_in_blank",
        question: "Gehen Sie ___. (Go left.)",
        options: ["rechts", "links", "geradeaus", "Straße"],
        answer: "links",
      },
    ],
    goal: { description: "Learn 5 direction words in German", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Max, an enthusiastic German teacher. Help a beginner learn directions and navigate in German cities.",
      introMessage:
        "Berlin, Munich, Hamburg — German cities are great for exploring! Let's learn directions in German.",
      topics: ["directions", "transport", "locations", "asking for help"],
    },
  },
  {
    id: "de-u1-l5",
    unitId: "de-u1",
    title: "Shopping",
    description: "Shop and ask about prices in German",
    order: 5,
    xpReward: 10,
    vocabulary: [
      { word: "Laden", translation: "store / shop", pronunciation: "LAH-den" },
      { word: "Preis", translation: "price", pronunciation: "PRICE" },
      { word: "billig", translation: "cheap / inexpensive", pronunciation: "BIL-ikh" },
      { word: "teuer", translation: "expensive", pronunciation: "TOY-er" },
      { word: "Geld", translation: "money", pronunciation: "GELT" },
    ],
    phrases: [
      { text: "Was kostet das?", translation: "What does this cost?", pronunciation: "vas KOS-tet das" },
      { text: "Das ist zu teuer.", translation: "That is too expensive.", pronunciation: "das ist tsoo TOY-er" },
      { text: "Ich nehme es.", translation: "I'll take it.", pronunciation: "ikh NAY-meh es" },
    ],
    activities: [
      {
        id: "de-u1-l5-a1",
        type: "translation",
        question: 'What does "teuer" mean?',
        options: ["cheap", "price", "expensive", "money"],
        answer: "expensive",
      },
      {
        id: "de-u1-l5-a2",
        type: "translation",
        question: 'How do you say "I\'ll take it" in German?',
        options: ["Das ist zu teuer.", "Was kostet das?", "Ich nehme es.", "Das ist billig."],
        answer: "Ich nehme es.",
      },
      {
        id: "de-u1-l5-a3",
        type: "fill_in_blank",
        question: "Das ist zu ___. (That is too expensive.)",
        options: ["billig", "teuer", "Preis", "Laden"],
        answer: "teuer",
      },
    ],
    goal: { description: "Learn 5 shopping words in German", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Max, an enthusiastic German teacher. Teach a beginner how to shop and talk about prices in German.",
      introMessage:
        "German Christmas markets, bakeries, bookshops — let's learn how to shop in German!",
      topics: ["shopping", "prices", "bargaining", "stores"],
    },
  },
  {
    id: "de-u1-l6",
    unitId: "de-u1",
    title: "Family & Friends",
    description: "Talk about your family in German",
    order: 6,
    xpReward: 10,
    vocabulary: [
      { word: "Familie", translation: "family", pronunciation: "fah-MEE-lee-eh" },
      { word: "Mutter", translation: "mother", pronunciation: "MOO-ter" },
      { word: "Vater", translation: "father", pronunciation: "FAH-ter" },
      { word: "Bruder", translation: "brother", pronunciation: "BROO-der" },
      { word: "Schwester", translation: "sister", pronunciation: "SHVES-ter" },
    ],
    phrases: [
      { text: "Ich habe eine Familie.", translation: "I have a family.", pronunciation: "ikh HAH-beh INE-eh fah-MEE-lee-eh" },
      { text: "Das ist mein Bruder.", translation: "This is my brother.", pronunciation: "das ist mine BROO-der" },
      { text: "Sie ist meine Schwester.", translation: "She is my sister.", pronunciation: "zee ist MINE-eh SHVES-ter" },
    ],
    activities: [
      {
        id: "de-u1-l6-a1",
        type: "translation",
        question: 'How do you say "mother" in German?',
        options: ["Vater", "Bruder", "Mutter", "Schwester"],
        answer: "Mutter",
      },
      {
        id: "de-u1-l6-a2",
        type: "translation",
        question: 'What does "Bruder" mean?',
        options: ["sister", "father", "mother", "brother"],
        answer: "brother",
      },
      {
        id: "de-u1-l6-a3",
        type: "fill_in_blank",
        question: "Das ist mein ___. (This is my brother.)",
        options: ["Schwester", "Mutter", "Vater", "Bruder"],
        answer: "Bruder",
      },
    ],
    goal: { description: "Learn 5 family words in German", targetWords: 5 },
    aiTeacherPrompt: {
      systemPrompt:
        "You are Max, an enthusiastic German teacher. Help a beginner learn family vocabulary in German.",
      introMessage:
        "Die Familie — family is central to German life! Let's learn the words to talk about your loved ones.",
      topics: ["family members", "relationships", "describing family"],
    },
  },
];
