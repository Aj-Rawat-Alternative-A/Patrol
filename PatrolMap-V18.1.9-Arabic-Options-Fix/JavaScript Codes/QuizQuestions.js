/**
 * LEGACY QUIZ CONTENT BANK
 * Provisional bilingual questions, answer options, image paths, facts,
 * and difficulty classification. Obtain Nissan approval before launch.
 */
/* V17.3: 75 provisional English/Arabic questions grounded in Nissan's 9 Nov 2026 Patrol history release.
   All questions and translations require Nissan editorial approval before deployment.
   Reference: https://global.nissannews.com/en/releases/nissan-patrol-celebrates-75-years-of-adventure-capability-and-enduring-spirit
   Image assets use the existing assets/Cars/* PNG files. */
(() => {
  const bank = [
  {
    "id": "entry-photo-0",
    "difficulty": "entry",
    "type": "image",
    "en": "Which Patrol generation is shown?",
    "ar": "ما جيل باترول الظاهر في الصورة؟",
    "options": [
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": true
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 4W60 launched in 1951 and climbed Mount Fuji that same year.",
      "ar": "انطلق طراز 4W60 عام 1951 وتسلق جبل فوجي في العام نفسه."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/4W60.png"
  },
  {
    "id": "entry-photo-1",
    "difficulty": "entry",
    "type": "image",
    "en": "Which Patrol generation is shown?",
    "ar": "ما جيل باترول الظاهر في الصورة؟",
    "options": [
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": true
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 60 Series debuted in 1960 and helped take Patrol to international markets.",
      "ar": "ظهر طراز سلسلة 60 عام 1960 وساهم في انتشار باترول عالمياً."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/60-Series.png"
  },
  {
    "id": "entry-photo-2",
    "difficulty": "entry",
    "type": "image",
    "en": "Which Patrol generation is shown?",
    "ar": "ما جيل باترول الظاهر في الصورة؟",
    "options": [
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": true
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 160 Series debuted in 1980 with expanded family-oriented configurations.",
      "ar": "ظهر طراز سلسلة 160 عام 1980 مع تجهيزات أوسع تناسب العائلات."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/160-Series.png"
  },
  {
    "id": "entry-photo-3",
    "difficulty": "entry",
    "type": "image",
    "en": "Which Patrol generation is shown?",
    "ar": "ما جيل باترول الظاهر في الصورة؟",
    "options": [
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": true
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y60 debuted in 1987 with coil-spring suspension and power steering.",
      "ar": "ظهر طراز Y60 عام 1987 مع نظام تعليق بنوابض لولبية وتوجيه معزز."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y60.png"
  },
  {
    "id": "entry-photo-4",
    "difficulty": "entry",
    "type": "image",
    "en": "Which Patrol generation is shown?",
    "ar": "ما جيل باترول الظاهر في الصورة؟",
    "options": [
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": true
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y61 debuted in 1997 with a refined design and updated technology.",
      "ar": "ظهر طراز Y61 عام 1997 بتصميم أكثر انسيابية وتقنيات محدّثة."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y61.png"
  },
  {
    "id": "entry-photo-5",
    "difficulty": "entry",
    "type": "image",
    "en": "Which Patrol generation is shown?",
    "ar": "ما جيل باترول الظاهر في الصورة؟",
    "options": [
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": true
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 debuted in 2010 and later achieved three Guinness World Records.",
      "ar": "ظهر طراز Y62 عام 2010 وسجل لاحقاً ثلاثة أرقام قياسية في غينيس."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y62.png"
  },
  {
    "id": "entry-photo-6",
    "difficulty": "entry",
    "type": "image",
    "en": "Which Patrol generation is shown?",
    "ar": "ما جيل باترول الظاهر في الصورة؟",
    "options": [
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": true
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y63 was unveiled in Abu Dhabi in 2024 as the seventh generation.",
      "ar": "كُشف عن Y63 في أبوظبي عام 2024 بوصفه الجيل السابع."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y63.png"
  },
  {
    "id": "entry-year-0",
    "difficulty": "entry",
    "type": "history",
    "en": "In what year was the 4W60 introduced?",
    "ar": "في أي عام ظهر طراز 4W60؟",
    "options": [
      {
        "en": "1951",
        "ar": "1951",
        "correct": true
      },
      {
        "en": "1960",
        "ar": "1960",
        "correct": false
      },
      {
        "en": "1980",
        "ar": "1980",
        "correct": false
      },
      {
        "en": "1987",
        "ar": "1987",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 4W60 launched in 1951 and climbed Mount Fuji that same year.",
      "ar": "انطلق طراز 4W60 عام 1951 وتسلق جبل فوجي في العام نفسه."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/4W60.png"
  },
  {
    "id": "entry-year-1",
    "difficulty": "entry",
    "type": "history",
    "en": "In what year was the 60 Series introduced?",
    "ar": "في أي عام ظهر طراز سلسلة 60؟",
    "options": [
      {
        "en": "1960",
        "ar": "1960",
        "correct": true
      },
      {
        "en": "1980",
        "ar": "1980",
        "correct": false
      },
      {
        "en": "1987",
        "ar": "1987",
        "correct": false
      },
      {
        "en": "1997",
        "ar": "1997",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 60 Series debuted in 1960 and helped take Patrol to international markets.",
      "ar": "ظهر طراز سلسلة 60 عام 1960 وساهم في انتشار باترول عالمياً."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/60-Series.png"
  },
  {
    "id": "entry-year-2",
    "difficulty": "entry",
    "type": "history",
    "en": "In what year was the 160 Series introduced?",
    "ar": "في أي عام ظهر طراز سلسلة 160؟",
    "options": [
      {
        "en": "1980",
        "ar": "1980",
        "correct": true
      },
      {
        "en": "1987",
        "ar": "1987",
        "correct": false
      },
      {
        "en": "1997",
        "ar": "1997",
        "correct": false
      },
      {
        "en": "2010",
        "ar": "2010",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 160 Series debuted in 1980 with expanded family-oriented configurations.",
      "ar": "ظهر طراز سلسلة 160 عام 1980 مع تجهيزات أوسع تناسب العائلات."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/160-Series.png"
  },
  {
    "id": "entry-year-3",
    "difficulty": "entry",
    "type": "history",
    "en": "In what year was the Y60 introduced?",
    "ar": "في أي عام ظهر طراز Y60؟",
    "options": [
      {
        "en": "1987",
        "ar": "1987",
        "correct": true
      },
      {
        "en": "1997",
        "ar": "1997",
        "correct": false
      },
      {
        "en": "2010",
        "ar": "2010",
        "correct": false
      },
      {
        "en": "2024",
        "ar": "2024",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y60 debuted in 1987 with coil-spring suspension and power steering.",
      "ar": "ظهر طراز Y60 عام 1987 مع نظام تعليق بنوابض لولبية وتوجيه معزز."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y60.png"
  },
  {
    "id": "entry-year-4",
    "difficulty": "entry",
    "type": "history",
    "en": "In what year was the Y61 introduced?",
    "ar": "في أي عام ظهر طراز Y61؟",
    "options": [
      {
        "en": "1997",
        "ar": "1997",
        "correct": true
      },
      {
        "en": "2010",
        "ar": "2010",
        "correct": false
      },
      {
        "en": "2024",
        "ar": "2024",
        "correct": false
      },
      {
        "en": "1951",
        "ar": "1951",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y61 debuted in 1997 with a refined design and updated technology.",
      "ar": "ظهر طراز Y61 عام 1997 بتصميم أكثر انسيابية وتقنيات محدّثة."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y61.png"
  },
  {
    "id": "entry-year-5",
    "difficulty": "entry",
    "type": "history",
    "en": "In what year was the Y62 introduced?",
    "ar": "في أي عام ظهر طراز Y62؟",
    "options": [
      {
        "en": "2010",
        "ar": "2010",
        "correct": true
      },
      {
        "en": "2024",
        "ar": "2024",
        "correct": false
      },
      {
        "en": "1951",
        "ar": "1951",
        "correct": false
      },
      {
        "en": "1960",
        "ar": "1960",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 debuted in 2010 and later achieved three Guinness World Records.",
      "ar": "ظهر طراز Y62 عام 2010 وسجل لاحقاً ثلاثة أرقام قياسية في غينيس."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y62.png"
  },
  {
    "id": "entry-year-6",
    "difficulty": "entry",
    "type": "history",
    "en": "In what year was the Y63 introduced?",
    "ar": "في أي عام ظهر طراز Y63؟",
    "options": [
      {
        "en": "2024",
        "ar": "2024",
        "correct": true
      },
      {
        "en": "1951",
        "ar": "1951",
        "correct": false
      },
      {
        "en": "1960",
        "ar": "1960",
        "correct": false
      },
      {
        "en": "1980",
        "ar": "1980",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y63 was unveiled in Abu Dhabi in 2024 as the seventh generation.",
      "ar": "كُشف عن Y63 في أبوظبي عام 2024 بوصفه الجيل السابع."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y63.png"
  },
  {
    "id": "entry-next-0",
    "difficulty": "entry",
    "type": "history",
    "en": "Which generation came immediately after 4W60?",
    "ar": "ما الجيل الذي جاء مباشرة بعد 4W60؟",
    "options": [
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": true
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 60 Series debuted in 1960 and helped take Patrol to international markets.",
      "ar": "ظهر طراز سلسلة 60 عام 1960 وساهم في انتشار باترول عالمياً."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "entry-next-1",
    "difficulty": "entry",
    "type": "history",
    "en": "Which generation came immediately after 60 Series?",
    "ar": "ما الجيل الذي جاء مباشرة بعد سلسلة 60؟",
    "options": [
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": true
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 160 Series debuted in 1980 with expanded family-oriented configurations.",
      "ar": "ظهر طراز سلسلة 160 عام 1980 مع تجهيزات أوسع تناسب العائلات."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "entry-next-2",
    "difficulty": "entry",
    "type": "history",
    "en": "Which generation came immediately after 160 Series?",
    "ar": "ما الجيل الذي جاء مباشرة بعد سلسلة 160؟",
    "options": [
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": true
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y60 debuted in 1987 with coil-spring suspension and power steering.",
      "ar": "ظهر طراز Y60 عام 1987 مع نظام تعليق بنوابض لولبية وتوجيه معزز."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "entry-next-3",
    "difficulty": "entry",
    "type": "history",
    "en": "Which generation came immediately after Y60?",
    "ar": "ما الجيل الذي جاء مباشرة بعد Y60؟",
    "options": [
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": true
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y61 debuted in 1997 with a refined design and updated technology.",
      "ar": "ظهر طراز Y61 عام 1997 بتصميم أكثر انسيابية وتقنيات محدّثة."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "entry-next-4",
    "difficulty": "entry",
    "type": "history",
    "en": "Which generation came immediately after Y61?",
    "ar": "ما الجيل الذي جاء مباشرة بعد Y61؟",
    "options": [
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": true
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 debuted in 2010 and later achieved three Guinness World Records.",
      "ar": "ظهر طراز Y62 عام 2010 وسجل لاحقاً ثلاثة أرقام قياسية في غينيس."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "entry-next-5",
    "difficulty": "entry",
    "type": "history",
    "en": "Which generation came immediately after Y62?",
    "ar": "ما الجيل الذي جاء مباشرة بعد Y62؟",
    "options": [
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": true
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y63 was unveiled in Abu Dhabi in 2024 as the seventh generation.",
      "ar": "كُشف عن Y63 في أبوظبي عام 2024 بوصفه الجيل السابع."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-number-photo-0",
    "difficulty": "medium",
    "type": "image",
    "en": "Which numbered generation is pictured?",
    "ar": "أي ترتيب من أجيال باترول يظهر في الصورة؟",
    "options": [
      {
        "en": "1st",
        "ar": "الأول",
        "correct": true
      },
      {
        "en": "2nd",
        "ar": "الثاني",
        "correct": false
      },
      {
        "en": "3rd",
        "ar": "الثالث",
        "correct": false
      },
      {
        "en": "4th",
        "ar": "الرابع",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 4W60 launched in 1951 and climbed Mount Fuji that same year.",
      "ar": "انطلق طراز 4W60 عام 1951 وتسلق جبل فوجي في العام نفسه."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/4W60.png"
  },
  {
    "id": "medium-number-photo-1",
    "difficulty": "medium",
    "type": "image",
    "en": "Which numbered generation is pictured?",
    "ar": "أي ترتيب من أجيال باترول يظهر في الصورة؟",
    "options": [
      {
        "en": "2nd",
        "ar": "الثاني",
        "correct": true
      },
      {
        "en": "3rd",
        "ar": "الثالث",
        "correct": false
      },
      {
        "en": "4th",
        "ar": "الرابع",
        "correct": false
      },
      {
        "en": "5th",
        "ar": "الخامس",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 60 Series debuted in 1960 and helped take Patrol to international markets.",
      "ar": "ظهر طراز سلسلة 60 عام 1960 وساهم في انتشار باترول عالمياً."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/60-Series.png"
  },
  {
    "id": "medium-number-photo-2",
    "difficulty": "medium",
    "type": "image",
    "en": "Which numbered generation is pictured?",
    "ar": "أي ترتيب من أجيال باترول يظهر في الصورة؟",
    "options": [
      {
        "en": "3rd",
        "ar": "الثالث",
        "correct": true
      },
      {
        "en": "4th",
        "ar": "الرابع",
        "correct": false
      },
      {
        "en": "5th",
        "ar": "الخامس",
        "correct": false
      },
      {
        "en": "6th",
        "ar": "السادس",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 160 Series debuted in 1980 with expanded family-oriented configurations.",
      "ar": "ظهر طراز سلسلة 160 عام 1980 مع تجهيزات أوسع تناسب العائلات."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/160-Series.png"
  },
  {
    "id": "medium-number-photo-3",
    "difficulty": "medium",
    "type": "image",
    "en": "Which numbered generation is pictured?",
    "ar": "أي ترتيب من أجيال باترول يظهر في الصورة؟",
    "options": [
      {
        "en": "4th",
        "ar": "الرابع",
        "correct": true
      },
      {
        "en": "5th",
        "ar": "الخامس",
        "correct": false
      },
      {
        "en": "6th",
        "ar": "السادس",
        "correct": false
      },
      {
        "en": "7th",
        "ar": "السابع",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y60 debuted in 1987 with coil-spring suspension and power steering.",
      "ar": "ظهر طراز Y60 عام 1987 مع نظام تعليق بنوابض لولبية وتوجيه معزز."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y60.png"
  },
  {
    "id": "medium-number-photo-4",
    "difficulty": "medium",
    "type": "image",
    "en": "Which numbered generation is pictured?",
    "ar": "أي ترتيب من أجيال باترول يظهر في الصورة؟",
    "options": [
      {
        "en": "5th",
        "ar": "الخامس",
        "correct": true
      },
      {
        "en": "6th",
        "ar": "السادس",
        "correct": false
      },
      {
        "en": "7th",
        "ar": "السابع",
        "correct": false
      },
      {
        "en": "1st",
        "ar": "الأول",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y61 debuted in 1997 with a refined design and updated technology.",
      "ar": "ظهر طراز Y61 عام 1997 بتصميم أكثر انسيابية وتقنيات محدّثة."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y61.png"
  },
  {
    "id": "medium-number-photo-5",
    "difficulty": "medium",
    "type": "image",
    "en": "Which numbered generation is pictured?",
    "ar": "أي ترتيب من أجيال باترول يظهر في الصورة؟",
    "options": [
      {
        "en": "6th",
        "ar": "السادس",
        "correct": true
      },
      {
        "en": "7th",
        "ar": "السابع",
        "correct": false
      },
      {
        "en": "1st",
        "ar": "الأول",
        "correct": false
      },
      {
        "en": "2nd",
        "ar": "الثاني",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 debuted in 2010 and later achieved three Guinness World Records.",
      "ar": "ظهر طراز Y62 عام 2010 وسجل لاحقاً ثلاثة أرقام قياسية في غينيس."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y62.png"
  },
  {
    "id": "medium-number-photo-6",
    "difficulty": "medium",
    "type": "image",
    "en": "Which numbered generation is pictured?",
    "ar": "أي ترتيب من أجيال باترول يظهر في الصورة؟",
    "options": [
      {
        "en": "7th",
        "ar": "السابع",
        "correct": true
      },
      {
        "en": "1st",
        "ar": "الأول",
        "correct": false
      },
      {
        "en": "2nd",
        "ar": "الثاني",
        "correct": false
      },
      {
        "en": "3rd",
        "ar": "الثالث",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y63 was unveiled in Abu Dhabi in 2024 as the seventh generation.",
      "ar": "كُشف عن Y63 في أبوظبي عام 2024 بوصفه الجيل السابع."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y63.png"
  },
  {
    "id": "medium-match-year-0",
    "difficulty": "medium",
    "type": "history",
    "en": "Which Patrol generation was introduced in 1951?",
    "ar": "أي جيل من باترول ظهر في عام 1951؟",
    "options": [
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": true
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 4W60 launched in 1951 and climbed Mount Fuji that same year.",
      "ar": "انطلق طراز 4W60 عام 1951 وتسلق جبل فوجي في العام نفسه."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-match-year-1",
    "difficulty": "medium",
    "type": "history",
    "en": "Which Patrol generation was introduced in 1960?",
    "ar": "أي جيل من باترول ظهر في عام 1960؟",
    "options": [
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": true
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 60 Series debuted in 1960 and helped take Patrol to international markets.",
      "ar": "ظهر طراز سلسلة 60 عام 1960 وساهم في انتشار باترول عالمياً."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-match-year-2",
    "difficulty": "medium",
    "type": "history",
    "en": "Which Patrol generation was introduced in 1980?",
    "ar": "أي جيل من باترول ظهر في عام 1980؟",
    "options": [
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": true
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 160 Series debuted in 1980 with expanded family-oriented configurations.",
      "ar": "ظهر طراز سلسلة 160 عام 1980 مع تجهيزات أوسع تناسب العائلات."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-match-year-3",
    "difficulty": "medium",
    "type": "history",
    "en": "Which Patrol generation was introduced in 1987?",
    "ar": "أي جيل من باترول ظهر في عام 1987؟",
    "options": [
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": true
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y60 debuted in 1987 with coil-spring suspension and power steering.",
      "ar": "ظهر طراز Y60 عام 1987 مع نظام تعليق بنوابض لولبية وتوجيه معزز."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-match-year-4",
    "difficulty": "medium",
    "type": "history",
    "en": "Which Patrol generation was introduced in 1997?",
    "ar": "أي جيل من باترول ظهر في عام 1997؟",
    "options": [
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": true
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y61 debuted in 1997 with a refined design and updated technology.",
      "ar": "ظهر طراز Y61 عام 1997 بتصميم أكثر انسيابية وتقنيات محدّثة."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-match-year-5",
    "difficulty": "medium",
    "type": "history",
    "en": "Which Patrol generation was introduced in 2010?",
    "ar": "أي جيل من باترول ظهر في عام 2010؟",
    "options": [
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": true
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 debuted in 2010 and later achieved three Guinness World Records.",
      "ar": "ظهر طراز Y62 عام 2010 وسجل لاحقاً ثلاثة أرقام قياسية في غينيس."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-match-year-6",
    "difficulty": "medium",
    "type": "history",
    "en": "Which Patrol generation was introduced in 2024?",
    "ar": "أي جيل من باترول ظهر في عام 2024؟",
    "options": [
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": true
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y63 was unveiled in Abu Dhabi in 2024 as the seventh generation.",
      "ar": "كُشف عن Y63 في أبوظبي عام 2024 بوصفه الجيل السابع."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-previous-1",
    "difficulty": "medium",
    "type": "history",
    "en": "Which generation immediately preceded 60 Series?",
    "ar": "ما الجيل الذي سبق سلسلة 60 مباشرة؟",
    "options": [
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": true
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 4W60 launched in 1951 and climbed Mount Fuji that same year.",
      "ar": "انطلق طراز 4W60 عام 1951 وتسلق جبل فوجي في العام نفسه."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-previous-2",
    "difficulty": "medium",
    "type": "history",
    "en": "Which generation immediately preceded 160 Series?",
    "ar": "ما الجيل الذي سبق سلسلة 160 مباشرة؟",
    "options": [
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": true
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 60 Series debuted in 1960 and helped take Patrol to international markets.",
      "ar": "ظهر طراز سلسلة 60 عام 1960 وساهم في انتشار باترول عالمياً."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-previous-3",
    "difficulty": "medium",
    "type": "history",
    "en": "Which generation immediately preceded Y60?",
    "ar": "ما الجيل الذي سبق Y60 مباشرة؟",
    "options": [
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": true
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 160 Series debuted in 1980 with expanded family-oriented configurations.",
      "ar": "ظهر طراز سلسلة 160 عام 1980 مع تجهيزات أوسع تناسب العائلات."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-previous-4",
    "difficulty": "medium",
    "type": "history",
    "en": "Which generation immediately preceded Y61?",
    "ar": "ما الجيل الذي سبق Y61 مباشرة؟",
    "options": [
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": true
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y60 debuted in 1987 with coil-spring suspension and power steering.",
      "ar": "ظهر طراز Y60 عام 1987 مع نظام تعليق بنوابض لولبية وتوجيه معزز."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-previous-5",
    "difficulty": "medium",
    "type": "history",
    "en": "Which generation immediately preceded Y62?",
    "ar": "ما الجيل الذي سبق Y62 مباشرة؟",
    "options": [
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": true
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y61 debuted in 1997 with a refined design and updated technology.",
      "ar": "ظهر طراز Y61 عام 1997 بتصميم أكثر انسيابية وتقنيات محدّثة."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-previous-6",
    "difficulty": "medium",
    "type": "history",
    "en": "Which generation immediately preceded Y63?",
    "ar": "ما الجيل الذي سبق Y63 مباشرة؟",
    "options": [
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": true
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 debuted in 2010 and later achieved three Guinness World Records.",
      "ar": "ظهر طراز Y62 عام 2010 وسجل لاحقاً ثلاثة أرقام قياسية في غينيس."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-reveal-0",
    "difficulty": "expert",
    "type": "reveal",
    "en": "Identify this Patrol as the photo becomes clearer.",
    "ar": "حدد جيل باترول مع ازدياد وضوح الصورة.",
    "options": [
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": true
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 4W60 launched in 1951 and climbed Mount Fuji that same year.",
      "ar": "انطلق طراز 4W60 عام 1951 وتسلق جبل فوجي في العام نفسه."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/4W60.png"
  },
  {
    "id": "expert-reveal-1",
    "difficulty": "expert",
    "type": "reveal",
    "en": "Identify this Patrol as the photo becomes clearer.",
    "ar": "حدد جيل باترول مع ازدياد وضوح الصورة.",
    "options": [
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": true
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 60 Series debuted in 1960 and helped take Patrol to international markets.",
      "ar": "ظهر طراز سلسلة 60 عام 1960 وساهم في انتشار باترول عالمياً."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/60-Series.png"
  },
  {
    "id": "expert-reveal-2",
    "difficulty": "expert",
    "type": "reveal",
    "en": "Identify this Patrol as the photo becomes clearer.",
    "ar": "حدد جيل باترول مع ازدياد وضوح الصورة.",
    "options": [
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": true
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 160 Series debuted in 1980 with expanded family-oriented configurations.",
      "ar": "ظهر طراز سلسلة 160 عام 1980 مع تجهيزات أوسع تناسب العائلات."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/160-Series.png"
  },
  {
    "id": "expert-reveal-3",
    "difficulty": "expert",
    "type": "reveal",
    "en": "Identify this Patrol as the photo becomes clearer.",
    "ar": "حدد جيل باترول مع ازدياد وضوح الصورة.",
    "options": [
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": true
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y60 debuted in 1987 with coil-spring suspension and power steering.",
      "ar": "ظهر طراز Y60 عام 1987 مع نظام تعليق بنوابض لولبية وتوجيه معزز."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y60.png"
  },
  {
    "id": "expert-reveal-4",
    "difficulty": "expert",
    "type": "reveal",
    "en": "Identify this Patrol as the photo becomes clearer.",
    "ar": "حدد جيل باترول مع ازدياد وضوح الصورة.",
    "options": [
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": true
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y61 debuted in 1997 with a refined design and updated technology.",
      "ar": "ظهر طراز Y61 عام 1997 بتصميم أكثر انسيابية وتقنيات محدّثة."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y61.png"
  },
  {
    "id": "expert-reveal-5",
    "difficulty": "expert",
    "type": "reveal",
    "en": "Identify this Patrol as the photo becomes clearer.",
    "ar": "حدد جيل باترول مع ازدياد وضوح الصورة.",
    "options": [
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": true
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 debuted in 2010 and later achieved three Guinness World Records.",
      "ar": "ظهر طراز Y62 عام 2010 وسجل لاحقاً ثلاثة أرقام قياسية في غينيس."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y62.png"
  },
  {
    "id": "expert-reveal-6",
    "difficulty": "expert",
    "type": "reveal",
    "en": "Identify this Patrol as the photo becomes clearer.",
    "ar": "حدد جيل باترول مع ازدياد وضوح الصورة.",
    "options": [
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": true
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y63 was unveiled in Abu Dhabi in 2024 as the seventh generation.",
      "ar": "كُشف عن Y63 في أبوظبي عام 2024 بوصفه الجيل السابع."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional",
    "image": "assets/Cars/Y63.png"
  },
  {
    "id": "expert-ordinal-0",
    "difficulty": "expert",
    "type": "history",
    "en": "In Patrol history, what was 4W60's generation number?",
    "ar": "ما ترتيب جيل 4W60 في تاريخ باترول؟",
    "options": [
      {
        "en": "1st",
        "ar": "الأول",
        "correct": true
      },
      {
        "en": "2nd",
        "ar": "الثاني",
        "correct": false
      },
      {
        "en": "3rd",
        "ar": "الثالث",
        "correct": false
      },
      {
        "en": "4th",
        "ar": "الرابع",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 4W60 launched in 1951 and climbed Mount Fuji that same year.",
      "ar": "انطلق طراز 4W60 عام 1951 وتسلق جبل فوجي في العام نفسه."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-ordinal-1",
    "difficulty": "expert",
    "type": "history",
    "en": "In Patrol history, what was 60 Series's generation number?",
    "ar": "ما ترتيب جيل سلسلة 60 في تاريخ باترول؟",
    "options": [
      {
        "en": "2nd",
        "ar": "الثاني",
        "correct": true
      },
      {
        "en": "3rd",
        "ar": "الثالث",
        "correct": false
      },
      {
        "en": "4th",
        "ar": "الرابع",
        "correct": false
      },
      {
        "en": "5th",
        "ar": "الخامس",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 60 Series debuted in 1960 and helped take Patrol to international markets.",
      "ar": "ظهر طراز سلسلة 60 عام 1960 وساهم في انتشار باترول عالمياً."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-ordinal-2",
    "difficulty": "expert",
    "type": "history",
    "en": "In Patrol history, what was 160 Series's generation number?",
    "ar": "ما ترتيب جيل سلسلة 160 في تاريخ باترول؟",
    "options": [
      {
        "en": "3rd",
        "ar": "الثالث",
        "correct": true
      },
      {
        "en": "4th",
        "ar": "الرابع",
        "correct": false
      },
      {
        "en": "5th",
        "ar": "الخامس",
        "correct": false
      },
      {
        "en": "6th",
        "ar": "السادس",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 160 Series debuted in 1980 with expanded family-oriented configurations.",
      "ar": "ظهر طراز سلسلة 160 عام 1980 مع تجهيزات أوسع تناسب العائلات."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-ordinal-3",
    "difficulty": "expert",
    "type": "history",
    "en": "In Patrol history, what was Y60's generation number?",
    "ar": "ما ترتيب جيل Y60 في تاريخ باترول؟",
    "options": [
      {
        "en": "4th",
        "ar": "الرابع",
        "correct": true
      },
      {
        "en": "5th",
        "ar": "الخامس",
        "correct": false
      },
      {
        "en": "6th",
        "ar": "السادس",
        "correct": false
      },
      {
        "en": "7th",
        "ar": "السابع",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y60 debuted in 1987 with coil-spring suspension and power steering.",
      "ar": "ظهر طراز Y60 عام 1987 مع نظام تعليق بنوابض لولبية وتوجيه معزز."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-ordinal-4",
    "difficulty": "expert",
    "type": "history",
    "en": "In Patrol history, what was Y61's generation number?",
    "ar": "ما ترتيب جيل Y61 في تاريخ باترول؟",
    "options": [
      {
        "en": "5th",
        "ar": "الخامس",
        "correct": true
      },
      {
        "en": "6th",
        "ar": "السادس",
        "correct": false
      },
      {
        "en": "7th",
        "ar": "السابع",
        "correct": false
      },
      {
        "en": "1st",
        "ar": "الأول",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y61 debuted in 1997 with a refined design and updated technology.",
      "ar": "ظهر طراز Y61 عام 1997 بتصميم أكثر انسيابية وتقنيات محدّثة."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-ordinal-5",
    "difficulty": "expert",
    "type": "history",
    "en": "In Patrol history, what was Y62's generation number?",
    "ar": "ما ترتيب جيل Y62 في تاريخ باترول؟",
    "options": [
      {
        "en": "6th",
        "ar": "السادس",
        "correct": true
      },
      {
        "en": "7th",
        "ar": "السابع",
        "correct": false
      },
      {
        "en": "1st",
        "ar": "الأول",
        "correct": false
      },
      {
        "en": "2nd",
        "ar": "الثاني",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 debuted in 2010 and later achieved three Guinness World Records.",
      "ar": "ظهر طراز Y62 عام 2010 وسجل لاحقاً ثلاثة أرقام قياسية في غينيس."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-ordinal-6",
    "difficulty": "expert",
    "type": "history",
    "en": "In Patrol history, what was Y63's generation number?",
    "ar": "ما ترتيب جيل Y63 في تاريخ باترول؟",
    "options": [
      {
        "en": "7th",
        "ar": "السابع",
        "correct": true
      },
      {
        "en": "1st",
        "ar": "الأول",
        "correct": false
      },
      {
        "en": "2nd",
        "ar": "الثاني",
        "correct": false
      },
      {
        "en": "3rd",
        "ar": "الثالث",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y63 was unveiled in Abu Dhabi in 2024 as the seventh generation.",
      "ar": "كُشف عن Y63 في أبوظبي عام 2024 بوصفه الجيل السابع."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-era-0",
    "difficulty": "expert",
    "type": "history",
    "en": "Which Patrol came after the generation launched in 1951?",
    "ar": "أي جيل جاء بعد الجيل الذي ظهر في عام 1951؟",
    "options": [
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": true
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 60 Series debuted in 1960 and helped take Patrol to international markets.",
      "ar": "ظهر طراز سلسلة 60 عام 1960 وساهم في انتشار باترول عالمياً."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-era-1",
    "difficulty": "expert",
    "type": "history",
    "en": "Which Patrol came after the generation launched in 1960?",
    "ar": "أي جيل جاء بعد الجيل الذي ظهر في عام 1960؟",
    "options": [
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": true
      },
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 160 Series debuted in 1980 with expanded family-oriented configurations.",
      "ar": "ظهر طراز سلسلة 160 عام 1980 مع تجهيزات أوسع تناسب العائلات."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-era-2",
    "difficulty": "expert",
    "type": "history",
    "en": "Which Patrol came after the generation launched in 1980?",
    "ar": "أي جيل جاء بعد الجيل الذي ظهر في عام 1980؟",
    "options": [
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": true
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y60 debuted in 1987 with coil-spring suspension and power steering.",
      "ar": "ظهر طراز Y60 عام 1987 مع نظام تعليق بنوابض لولبية وتوجيه معزز."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-era-3",
    "difficulty": "expert",
    "type": "history",
    "en": "Which Patrol came after the generation launched in 1987?",
    "ar": "أي جيل جاء بعد الجيل الذي ظهر في عام 1987؟",
    "options": [
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": true
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y61 debuted in 1997 with a refined design and updated technology.",
      "ar": "ظهر طراز Y61 عام 1997 بتصميم أكثر انسيابية وتقنيات محدّثة."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-era-4",
    "difficulty": "expert",
    "type": "history",
    "en": "Which Patrol came after the generation launched in 1997?",
    "ar": "أي جيل جاء بعد الجيل الذي ظهر في عام 1997؟",
    "options": [
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": true
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 debuted in 2010 and later achieved three Guinness World Records.",
      "ar": "ظهر طراز Y62 عام 2010 وسجل لاحقاً ثلاثة أرقام قياسية في غينيس."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-era-5",
    "difficulty": "expert",
    "type": "history",
    "en": "Which Patrol came after the generation launched in 2010?",
    "ar": "أي جيل جاء بعد الجيل الذي ظهر في عام 2010؟",
    "options": [
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": true
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      },
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y63 was unveiled in Abu Dhabi in 2024 as the seventh generation.",
      "ar": "كُشف عن Y63 في أبوظبي عام 2024 بوصفه الجيل السابع."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "entry-mount-fuji",
    "difficulty": "entry",
    "type": "history",
    "en": "Which mountain did the 4W60 climb in 1951?",
    "ar": "أي جبل تسلقه طراز 4W60 عام 1951؟",
    "options": [
      {
        "en": "Mount Fuji",
        "ar": "جبل فوجي",
        "correct": true
      },
      {
        "en": "Mount Everest",
        "ar": "جبل إيفرست",
        "correct": false
      },
      {
        "en": "Mount Kilimanjaro",
        "ar": "جبل كليمنجارو",
        "correct": false
      },
      {
        "en": "Jebel Jais",
        "ar": "جبل جيس",
        "correct": false
      }
    ],
    "fact": {
      "en": "In 1951, the original Patrol demonstrated its capability on Mount Fuji.",
      "ar": "أظهر باترول الأصلي قدرته على تسلق جبل فوجي عام 1951."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "entry-first-region",
    "difficulty": "entry",
    "type": "history",
    "en": "Which Gulf country received Patrol in 1957?",
    "ar": "إلى أي دولة خليجية وصل باترول عام 1957؟",
    "options": [
      {
        "en": "Kuwait",
        "ar": "الكويت",
        "correct": true
      },
      {
        "en": "Oman",
        "ar": "عُمان",
        "correct": false
      },
      {
        "en": "Bahrain",
        "ar": "البحرين",
        "correct": false
      },
      {
        "en": "Qatar",
        "ar": "قطر",
        "correct": false
      }
    ],
    "fact": {
      "en": "Patrol reached Kuwait in 1957, beginning its enduring regional story.",
      "ar": "وصل باترول إلى الكويت عام 1957، لتبدأ قصته الطويلة في المنطقة."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "entry-desert",
    "difficulty": "entry",
    "type": "history",
    "en": "Which Australian desert did the second-generation Patrol cross?",
    "ar": "أي صحراء أسترالية اجتازها الجيل الثاني من باترول؟",
    "options": [
      {
        "en": "Simpson Desert",
        "ar": "صحراء سمبسون",
        "correct": true
      },
      {
        "en": "Gobi Desert",
        "ar": "صحراء غوبي",
        "correct": false
      },
      {
        "en": "Sahara Desert",
        "ar": "الصحراء الكبرى",
        "correct": false
      },
      {
        "en": "Atacama Desert",
        "ar": "صحراء أتاكاما",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 60 Series crossed Australia’s Simpson Desert in 12 days.",
      "ar": "عبرت سلسلة 60 صحراء سمبسون الأسترالية في 12 يوماً."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "entry-reveal-city",
    "difficulty": "entry",
    "type": "history",
    "en": "Where was the Y63 unveiled in 2024?",
    "ar": "أين كُشف عن Y63 عام 2024؟",
    "options": [
      {
        "en": "Abu Dhabi",
        "ar": "أبوظبي",
        "correct": true
      },
      {
        "en": "Tokyo",
        "ar": "طوكيو",
        "correct": false
      },
      {
        "en": "Barcelona",
        "ar": "برشلونة",
        "correct": false
      },
      {
        "en": "Sydney",
        "ar": "سيدني",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y63 was unveiled in Abu Dhabi in 2024 as the seventh generation.",
      "ar": "كُشف عن Y63 في أبوظبي عام 2024 بوصفه الجيل السابع."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "entry-generations",
    "difficulty": "entry",
    "type": "history",
    "en": "How many main Patrol generations are celebrated in 2026?",
    "ar": "كم جيلاً رئيسياً من باترول يُحتفى بها في عام 2026؟",
    "options": [
      {
        "en": "Seven",
        "ar": "سبعة",
        "correct": true
      },
      {
        "en": "Five",
        "ar": "خمسة",
        "correct": false
      },
      {
        "en": "Eight",
        "ar": "ثمانية",
        "correct": false
      },
      {
        "en": "Ten",
        "ar": "عشرة",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 75-year celebration traces Patrol through seven main generations.",
      "ar": "يتتبع الاحتفال بمرور 75 عاماً مسيرة باترول عبر سبعة أجيال رئيسية."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-five-door",
    "difficulty": "medium",
    "type": "engineering",
    "en": "Which generation introduced five-door and seven-seat configurations?",
    "ar": "أي جيل قدّم تجهيزات بخمسة أبواب وسبعة مقاعد؟",
    "options": [
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": true
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The 160 Series debuted in 1980 with expanded family-oriented configurations.",
      "ar": "ظهر طراز سلسلة 160 عام 1980 مع تجهيزات أوسع تناسب العائلات."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-coil",
    "difficulty": "medium",
    "type": "engineering",
    "en": "Which Patrol generation introduced coil-spring suspension?",
    "ar": "أي جيل من باترول قدّم نظام تعليق بنوابض لولبية؟",
    "options": [
      {
        "en": "Y60",
        "ar": "Y60",
        "correct": true
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "60 Series",
        "ar": "سلسلة 60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y60 debuted in 1987 with coil-spring suspension and power steering.",
      "ar": "ظهر طراز Y60 عام 1987 مع نظام تعليق بنوابض لولبية وتوجيه معزز."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-nismo",
    "difficulty": "medium",
    "type": "history",
    "en": "In which year was the first Patrol NISMO introduced?",
    "ar": "في أي عام قُدّم أول باترول نيسمو؟",
    "options": [
      {
        "en": "2015",
        "ar": "2015",
        "correct": true
      },
      {
        "en": "1987",
        "ar": "1987",
        "correct": false
      },
      {
        "en": "1997",
        "ar": "1997",
        "correct": false
      },
      {
        "en": "2024",
        "ar": "2024",
        "correct": false
      }
    ],
    "fact": {
      "en": "The first Patrol NISMO launched in the Middle East in 2015.",
      "ar": "قُدّم أول باترول نيسمو في الشرق الأوسط عام 2015."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-spain",
    "difficulty": "medium",
    "type": "history",
    "en": "Which city began producing the 160 Series in Europe in 1983?",
    "ar": "أي مدينة أوروبية بدأت إنتاج سلسلة 160 عام 1983؟",
    "options": [
      {
        "en": "Barcelona",
        "ar": "برشلونة",
        "correct": true
      },
      {
        "en": "Paris",
        "ar": "باريس",
        "correct": false
      },
      {
        "en": "London",
        "ar": "لندن",
        "correct": false
      },
      {
        "en": "Berlin",
        "ar": "برلين",
        "correct": false
      }
    ],
    "fact": {
      "en": "Nissan’s Barcelona plant began European production of the Patrol 160 in 1983.",
      "ar": "بدأ مصنع نيسان في برشلونة إنتاج باترول 160 أوروبياً عام 1983."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "medium-record-count",
    "difficulty": "medium",
    "type": "history",
    "en": "How many Guinness World Records did the Y62 set in Nissan’s 75-year account?",
    "ar": "كم رقماً قياسياً في غينيس سجله Y62 وفقاً لتاريخ نيسان؟",
    "options": [
      {
        "en": "Three",
        "ar": "ثلاثة",
        "correct": true
      },
      {
        "en": "One",
        "ar": "واحد",
        "correct": false
      },
      {
        "en": "Five",
        "ar": "خمسة",
        "correct": false
      },
      {
        "en": "Seven",
        "ar": "سبعة",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 debuted in 2010 and later achieved three Guinness World Records.",
      "ar": "ظهر طراز Y62 عام 2010 وسجل لاحقاً ثلاثة أرقام قياسية في غينيس."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-turbo",
    "difficulty": "expert",
    "type": "engineering",
    "en": "Which Patrol generation gained its first turbo-diesel engine by 1983?",
    "ar": "أي جيل من باترول حصل على أول محرك توربو ديزل بحلول 1983؟",
    "options": [
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": true
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "Y61",
        "ar": "Y61",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Patrol 160 gained a turbo-diesel engine by 1983.",
      "ar": "حصل باترول 160 على محرك توربو ديزل بحلول عام 1983."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-dakar",
    "difficulty": "expert",
    "type": "history",
    "en": "Which Patrol generation completed the 1987 Paris-Dakar top-ten diesel milestone?",
    "ar": "أي جيل من باترول حقق إنجاز ديزل ضمن العشرة الأوائل في باريس داكار 1987؟",
    "options": [
      {
        "en": "160 Series",
        "ar": "سلسلة 160",
        "correct": true
      },
      {
        "en": "Y62",
        "ar": "Y62",
        "correct": false
      },
      {
        "en": "Y63",
        "ar": "Y63",
        "correct": false
      },
      {
        "en": "4W60",
        "ar": "4W60",
        "correct": false
      }
    ],
    "fact": {
      "en": "The diesel-powered Patrol 160 finished in the overall top ten in the 1987 Paris-Dakar Rally.",
      "ar": "أنهى باترول 160 بمحرك ديزل رالي باريس داكار 1987 ضمن العشرة الأوائل."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-record-tow",
    "difficulty": "expert",
    "type": "engineering",
    "en": "How much did the aircraft towed by the Y62 in 2013 weigh?",
    "ar": "كم بلغ وزن الطائرة التي سحبها Y62 عام 2013؟",
    "options": [
      {
        "en": "170.9 metric tons",
        "ar": "170.9 طن متري",
        "correct": true
      },
      {
        "en": "100 metric tons",
        "ar": "100 طن متري",
        "correct": false
      },
      {
        "en": "75 metric tons",
        "ar": "75 طن متري",
        "correct": false
      },
      {
        "en": "250 metric tons",
        "ar": "250 طن متري",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 towed a 170.9-metric-ton aircraft over 50 metres in 2013.",
      "ar": "سحب Y62 طائرة بوزن 170.9 طن متري لمسافة 50 متراً عام 2013."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-power",
    "difficulty": "expert",
    "type": "engineering",
    "en": "What is the announced output of the Y63 twin-turbo V6?",
    "ar": "ما القوة المعلنة لمحرك V6 مزدوج التوربو في Y63؟",
    "options": [
      {
        "en": "425 horsepower",
        "ar": "425 حصاناً",
        "correct": true
      },
      {
        "en": "300 horsepower",
        "ar": "300 حصان",
        "correct": false
      },
      {
        "en": "390 horsepower",
        "ar": "390 حصاناً",
        "correct": false
      },
      {
        "en": "500 horsepower",
        "ar": "500 حصان",
        "correct": false
      }
    ],
    "fact": {
      "en": "Nissan announced 425 horsepower and 700 Nm for the 3.5-litre twin-turbo V6 Y63.",
      "ar": "أعلنت نيسان عن قوة 425 حصاناً وعزم 700 نيوتن متر لمحرك Y63 سعة 3.5 لتر مزدوج التوربو."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  },
  {
    "id": "expert-car-dance",
    "difficulty": "expert",
    "type": "history",
    "en": "How many Patrols joined the synchronized car dance record in 2018?",
    "ar": "كم سيارة باترول شاركت في الرقم القياسي للرقصة المتزامنة عام 2018؟",
    "options": [
      {
        "en": "180",
        "ar": "180",
        "correct": true
      },
      {
        "en": "75",
        "ar": "75",
        "correct": false
      },
      {
        "en": "100",
        "ar": "100",
        "correct": false
      },
      {
        "en": "250",
        "ar": "250",
        "correct": false
      }
    ],
    "fact": {
      "en": "The Y62 era included a synchronized car dance with 180 Patrols in 2018.",
      "ar": "شهد عصر Y62 رقصة متزامنة شاركت فيها 180 سيارة باترول عام 2018."
    },
    "source": "Nissan Global News — 9 Nov 2026",
    "approval": "provisional"
  }
];
  const levels = ['entry','medium','expert'];
  const valid = bank.length === 75 && levels.every(level => bank.filter(q=>q.difficulty===level).length===25)
    && new Set(bank.map(q=>q.id)).size === bank.length
    && bank.every(q=>['image','history','engineering','reveal'].includes(q.type) && q.en && q.ar && q.fact?.en && q.fact?.ar
      && q.options.length===4 && q.options.filter(o=>o.correct).length===1
      && q.options.every(o=>o.en&&o.ar) && new Set(q.options.map(o=>o.en)).size===4);
  if (!valid) throw new Error('Patrol V17.3 question bank failed validation.');
  window.PatrolQuizQuestions = Object.freeze(bank);
})();
