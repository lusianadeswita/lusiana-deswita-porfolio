/**
 * Nutriva — portfolio case study content.
 *
 * Nutriva is a self-initiated mobile app design concept. Nothing in this case study
 * represents verified user research, usability results, business metrics or medical advice.
 * Every assumption is labelled as a design hypothesis, and all in-app nutrition values
 * are illustrative.
 *
 * Both languages carry the full content set. `Nutriva` is derived from the English
 * source, so the Indonesian version is type-checked against the same structure.
 */

import type { Lang } from '../i18n/config'

export type ScreenId =
  | 'splash'
  | 'onboarding'
  | 'auth'
  | 'dashboard'
  | 'nutrition'
  | 'discovery'
  | 'meal-details'
  | 'diary'
  | 'progress'
  | 'profile'

export type CaseStudySection = {
  id: string
  index: string
  label: string
}

export type NutrivaGoal = {
  index: string
  title: string
  description: string
}

export type NutrivaChallenge = {
  index: string
  title: string
  description: string
}

export type Persona = {
  id: string
  name: string
  label: string
  age: string
  context: string
  needs: string[]
  frustrations: string[]
  quote: string
}

export type ProcessStep = {
  index: string
  title: string
  description: string
}

export type FlowStep = {
  index: string
  title: string
  description: string
}

export type NutrivaScreen = {
  id: ScreenId
  name: string
  summary: string
  note: string
}

const nutrivaEn = {
  name: 'Nutriva',
  tagline: 'Making healthy eating feel simpler',
  category: 'Nutrition & Healthy Lifestyle',
  platform: 'Mobile Application',
  role: 'UI/UX Designer',
  projectType: 'Mobile App Design',
  status: 'Portfolio Case Study',
  conceptNotice: 'Self-initiated design concept',
  headline: 'Nutriva — Making Healthy Eating Feel Simpler',
  shortDescription:
    'A mobile app concept focused on making nutrition information and healthy food choices more approachable.',
  overview:
    'Nutriva is a nutrition-focused mobile application concept designed to help users build healthier eating habits and make more informed food choices through a simple and intuitive digital experience.',
  intro:
    'Nutriva began as a question: what if eating well felt less like tracking numbers and more like a calm daily ritual? The concept brings meal discovery, nutrition guidance and gentle progress tracking into one considered mobile experience.',
  disclaimer:
    'Nutriva is a self-initiated design concept. Screens, personas and nutritional values are illustrative and do not represent a shipped product, verified research or medical guidance.',
  meta: [
    { label: 'Project', value: 'Nutriva' },
    { label: 'Category', value: 'Nutrition & Healthy Lifestyle' },
    { label: 'Platform', value: 'Mobile Application' },
    { label: 'Role', value: 'UI/UX Designer' },
    { label: 'Project type', value: 'Mobile App Design' },
    { label: 'Status', value: 'Portfolio Case Study' },
  ],
  keyFacts: [
    { value: '10', label: 'Concept screens' },
    { value: '1', label: 'End-to-end flow' },
    { value: '6', label: 'Process stages' },
  ],
  sections: [
    { id: 'introduction', index: '01', label: 'Introduction' },
    { id: 'challenge', index: '02', label: 'The challenge' },
    { id: 'goals', index: '03', label: 'Design goals' },
    { id: 'users', index: '04', label: 'Target users' },
    { id: 'process', index: '05', label: 'UX process' },
    { id: 'flow', index: '06', label: 'User flow' },
    { id: 'wireframes', index: '07', label: 'Wireframes' },
    { id: 'ui-design', index: '08', label: 'UI design' },
    { id: 'design-system', index: '09', label: 'Design system' },
    { id: 'final', index: '10', label: 'Final screens' },
    { id: 'reflection', index: '11', label: 'Reflection' },
  ] satisfies CaseStudySection[],
  challenges: [
    {
      index: '01',
      title: 'Nutrition is hard to translate',
      description:
        'Daily needs are usually expressed in numbers and percentages, not in decisions a person can make at a meal.',
    },
    {
      index: '02',
      title: 'Balanced choices feel out of reach',
      description:
        'People may know what a balanced meal looks like in theory, but struggle to find a practical option for right now.',
    },
    {
      index: '03',
      title: 'Habits fade without feedback',
      description:
        'Healthy eating is a long game. Without gentle reinforcement, consistency is difficult to maintain.',
    },
    {
      index: '04',
      title: 'Too much information, too little clarity',
      description:
        'Nutrition content is often dense and conflicting. The experience can feel more clinical than encouraging.',
    },
  ],
  challengeFraming:
    'The following points are design hypotheses, formed from general observation of everyday nutrition habits. They are not findings from formal user research. Validating them with real users would be the first step of a production engagement.',
  goals: [
    {
      index: '01',
      title: 'Simplify Nutrition Information',
      description:
        'Present calories, macros and daily needs in small, digestible moments instead of dense data tables.',
    },
    {
      index: '02',
      title: 'Encourage Healthier Food Choices',
      description:
        'Make balanced meal options easy to discover and understand, without guilt or rigid rules.',
    },
    {
      index: '03',
      title: 'Make Meal Planning Intuitive',
      description:
        'Create a clear path from inspiration to a logged meal in only a few taps.',
    },
    {
      index: '04',
      title: 'Create a Friendly and Accessible Experience',
      description:
        'Use warm language, generous contrast and simple interactions that welcome beginners.',
    },
  ] satisfies NutrivaGoal[],
  personasNote:
    'These personas are illustrative design tools created for this concept. They are not based on interviews, surveys or validated research.',
  personas: [
    {
      id: 'young-professional',
      name: 'Maya',
      label: 'Illustrative persona A',
      age: '25–32',
      context:
        'A young professional balancing a full working week, who wants to eat better but has limited time and energy to plan.',
      needs: [
        'Quick, balanced meal ideas for busy weekdays',
        'A simple view of daily progress',
        'Guidance that does not feel restrictive',
      ],
      frustrations: [
        'Decision fatigue at the end of the day',
        'Nutrition apps that feel like homework',
      ],
      quote:
        'I want eating well to fit into my day — not become another task on my list.',
    },
    {
      id: 'student',
      name: 'Rafi',
      label: 'Illustrative persona B',
      age: '18–24',
      context:
        'A student living away from home, learning to cook and make food choices independently for the first time.',
      needs: [
        'Approachable explanations of nutrition basics',
        'Affordable, familiar meal inspiration',
        'A forgiving way to build habits',
      ],
      frustrations: [
        'Confusing or conflicting nutrition advice',
        'Feeling judged when a day does not go to plan',
      ],
      quote:
        'Just show me what a decent meal looks like and help me keep it simple.',
    },
  ] satisfies Persona[],
  process: [
    {
      index: '01',
      title: 'Understand',
      description:
        'Explore everyday nutrition habits and the friction around meal decisions.',
    },
    {
      index: '02',
      title: 'Define',
      description:
        'Frame the core problem and the principles that should guide the experience.',
    },
    {
      index: '03',
      title: 'Ideate',
      description:
        'Sketch possible structures, features and moments of encouragement.',
    },
    {
      index: '04',
      title: 'Wireframe',
      description:
        'Lay out the key screens in low fidelity and test the flow for clarity.',
    },
    {
      index: '05',
      title: 'Design',
      description:
        'Build a calm visual system and apply it consistently across screens.',
    },
    {
      index: '06',
      title: 'Prototype',
      description:
        'Connect the screens into a realistic, clickable mobile journey.',
    },
  ] satisfies ProcessStep[],
  flow: [
    {
      index: '01',
      title: 'Open app',
      description: 'A warm, quiet welcome.',
    },
    {
      index: '02',
      title: 'Onboarding',
      description: 'Three short value-led steps.',
    },
    {
      index: '03',
      title: 'Create profile',
      description: 'A lightweight introduction.',
    },
    {
      index: '04',
      title: 'Set nutrition goals',
      description: 'Simple, adjustable targets.',
    },
    {
      index: '05',
      title: 'View dashboard',
      description: 'The day at a glance.',
    },
    {
      index: '06',
      title: 'Explore meals',
      description: 'Browse balanced inspiration.',
    },
    {
      index: '07',
      title: 'View nutrition info',
      description: 'Understand the choice.',
    },
    {
      index: '08',
      title: 'Track daily progress',
      description: 'A gentle sense of momentum.',
    },
  ] satisfies FlowStep[],
  flowNote:
    'A first-run path from first open to first logged meal. The flow is intentionally short: eight steps, one clear action per screen.',
  wireframes: [
    {
      id: 'dashboard' as ScreenId,
      name: 'Home dashboard',
      summary: 'Greeting, daily calorie ring, macro summary and today’s meals.',
    },
    {
      id: 'discovery' as ScreenId,
      name: 'Meal discovery',
      summary: 'Search, category filters and a browsable list of balanced meals.',
    },
    {
      id: 'diary' as ScreenId,
      name: 'Food diary',
      summary: 'A day of meals grouped by moment, with a running calorie total.',
    },
  ],
  screenNote:
    'All screens are concept designs built for this portfolio. The nutrition values shown are illustrative and are not intended as dietary or medical advice.',
  screens: [
    {
      id: 'splash',
      name: 'Splash Screen',
      summary: 'A calm first impression that sets the tone before any task begins.',
      note: 'Brand moment',
    },
    {
      id: 'onboarding',
      name: 'Onboarding',
      summary:
        'Three value-led steps introduce the app’s purpose without asking for a commitment.',
      note: 'First-run',
    },
    {
      id: 'auth',
      name: 'Login / Sign Up',
      summary:
        'A frictionless entry point with email and social sign-in options.',
      note: 'Account',
    },
    {
      id: 'dashboard',
      name: 'Home Dashboard',
      summary:
        'The day at a glance: calories, macros, meals and one primary next action.',
      note: 'Core screen',
    },
    {
      id: 'nutrition',
      name: 'Nutrition Overview',
      summary:
        'A weekly view that turns numbers into a readable pattern of progress.',
      note: 'Insight',
    },
    {
      id: 'discovery',
      name: 'Meal Discovery',
      summary:
        'Balanced meal inspiration, browsable by moment and dietary preference.',
      note: 'Exploration',
    },
    {
      id: 'meal-details',
      name: 'Meal Details',
      summary:
        'Everything needed to feel confident about a meal, in one scroll.',
      note: 'Decision',
    },
    {
      id: 'diary',
      name: 'Food Diary',
      summary:
        'An honest, gentle record of the day — built for consistency, not perfection.',
      note: 'Tracking',
    },
    {
      id: 'progress',
      name: 'Daily Progress',
      summary:
        'Energy, hydration and streaks presented as encouragement rather than pressure.',
      note: 'Motivation',
    },
    {
      id: 'profile',
      name: 'User Profile',
      summary:
        'Goals, preferences and account settings kept simple and easy to adjust.',
      note: 'Account',
    },
  ] satisfies NutrivaScreen[],
  designSystem: {
    intro:
      'A compact visual language built around one fresh green, soft sage surfaces and warm white breathing room. The system keeps decisions consistent without making the interface feel clinical.',
    colors: [
      { name: 'Fresh Green', hex: '#5F9B72', role: 'Primary actions & emphasis', className: 'bg-nutriva-500' },
      { name: 'Soft Sage', hex: '#A8C9A8', role: 'Secondary accents', className: 'bg-nutriva-300' },
      { name: 'Mist Green', hex: '#EAF3E9', role: 'Surfaces & highlights', className: 'bg-nutriva-100' },
      { name: 'Warm White', hex: '#FAFAF7', role: 'App background', className: 'bg-paper border border-line' },
      { name: 'Deep Charcoal', hex: '#25352B', role: 'Primary text', className: 'bg-nutriva-800' },
    ],
    typography: [
      { label: 'Display', sample: 'Aa', detail: 'Plus Jakarta Sans · Bold', size: 'text-[34px]' },
      { label: 'Heading', sample: 'Aa', detail: 'Plus Jakarta Sans · Semibold', size: 'text-2xl' },
      { label: 'Body', sample: 'Aa', detail: 'Plus Jakarta Sans · Regular', size: 'text-base' },
      { label: 'Label', sample: 'Aa', detail: 'Plus Jakarta Sans · Medium', size: 'text-xs' },
    ],
    spacing: [
      { label: '4', value: '4px' },
      { label: '8', value: '8px' },
      { label: '12', value: '12px' },
      { label: '16', value: '16px' },
      { label: '24', value: '24px' },
      { label: '32', value: '32px' },
    ],
    components: [
      'Primary & secondary buttons',
      'Input fields with clear labels',
      'Soft surface cards',
      'Bottom navigation with active state',
      'Progress rings & macro bars',
      'Compact icon set',
    ],
    icons: ['Leaf', 'Flame', 'Droplet', 'Search', 'Calendar', 'Heart', 'User', 'Plus'],
  },
  reflection: [
    'Designing Nutriva helped me explore how thoughtful visual hierarchy, clear information architecture, and simple interactions can make nutrition experiences feel more approachable.',
    'This project strengthened my interest in user-centered design and motivated me to continue improving my UI/UX design skills.',
  ],
  reflectionNote:
    'As a concept project, no user outcomes are claimed. The next step would be moderated usability testing with a small group of target users, followed by iteration.',
  designDecisions: [
    {
      title: 'One primary action per screen',
      description:
        'Each screen guides attention to a single next step, keeping the experience calm for first-time users.',
    },
    {
      title: 'Numbers with context',
      description:
        'Calories and macros are paired with plain-language labels so the data supports a decision rather than replacing it.',
    },
    {
      title: 'Gentle, non-judgemental language',
      description:
        'Progress is framed as momentum; missing a target is never treated as failure.',
    },
    {
      title: 'Familiar mobile patterns',
      description:
        'A persistent bottom navigation, clear back affordances and standard form fields reduce the learning curve.',
    },
  ],
  nextSteps: [
    'Validate the problem hypotheses with target users',
    'Run moderated usability tests on the core logging flow',
    'Test accessibility, including text scaling and contrast',
    'Explore a recipe detail and grocery-list extension',
  ],
}

export type Nutriva = typeof nutrivaEn

const nutrivaId: Nutriva = {
  name: 'Nutriva',
  tagline: 'Membuat pola makan sehat terasa lebih sederhana',
  category: 'Nutrisi & Gaya Hidup Sehat',
  platform: 'Aplikasi Mobile',
  role: 'UI/UX Designer',
  projectType: 'Desain Aplikasi Mobile',
  status: 'Studi Kasus Portofolio',
  conceptNotice: 'Konsep desain mandiri',
  headline: 'Nutriva — Membuat Pola Makan Sehat Terasa Lebih Sederhana',
  shortDescription:
    'Konsep aplikasi mobile yang berfokus membuat informasi nutrisi dan pilihan makanan sehat lebih mudah didekati.',
  overview:
    'Nutriva adalah konsep aplikasi mobile berbasis nutrisi yang dirancang untuk membantu pengguna membangun kebiasaan makan lebih sehat dan membuat pilihan makanan yang lebih tepat melalui pengalaman digital yang sederhana dan intuitif.',
  intro:
    'Nutriva berawal dari sebuah pertanyaan: bagaimana jika makan dengan baik terasa bukan seperti mencatat angka, melainkan ritual harian yang menenangkan? Konsep ini menyatukan penemuan makanan, panduan nutrisi, dan pelacakan progres yang lembut dalam satu pengalaman mobile yang matang.',
  disclaimer:
    'Nutriva adalah konsep desain mandiri. Layar, persona, dan nilai nutrisi bersifat ilustratif dan tidak mewakili produk yang sudah dirilis, riset tervalidasi, atau panduan medis.',
  meta: [
    { label: 'Proyek', value: 'Nutriva' },
    { label: 'Kategori', value: 'Nutrisi & Gaya Hidup Sehat' },
    { label: 'Platform', value: 'Aplikasi Mobile' },
    { label: 'Peran', value: 'UI/UX Designer' },
    { label: 'Jenis proyek', value: 'Desain Aplikasi Mobile' },
    { label: 'Status', value: 'Studi Kasus Portofolio' },
  ],
  keyFacts: [
    { value: '10', label: 'Layar konsep' },
    { value: '1', label: 'Alur end-to-end' },
    { value: '6', label: 'Tahap proses' },
  ],
  sections: [
    { id: 'introduction', index: '01', label: 'Pendahuluan' },
    { id: 'challenge', index: '02', label: 'Tantangan' },
    { id: 'goals', index: '03', label: 'Tujuan desain' },
    { id: 'users', index: '04', label: 'Target pengguna' },
    { id: 'process', index: '05', label: 'Proses UX' },
    { id: 'flow', index: '06', label: 'User flow' },
    { id: 'wireframes', index: '07', label: 'Wireframe' },
    { id: 'ui-design', index: '08', label: 'Desain UI' },
    { id: 'design-system', index: '09', label: 'Design system' },
    { id: 'final', index: '10', label: 'Layar final' },
    { id: 'reflection', index: '11', label: 'Refleksi' },
  ] satisfies CaseStudySection[],
  challenges: [
    {
      index: '01',
      title: 'Nutrisi sulit diterjemahkan',
      description:
        'Kebutuhan harian biasanya disajikan dalam angka dan persentase, bukan dalam keputusan yang bisa diambil seseorang saat makan.',
    },
    {
      index: '02',
      title: 'Pilihan seimbang terasa jauh',
      description:
        'Orang mungkin tahu seperti apa makanan seimbang secara teori, tetapi kesulitan menemukan pilihan praktis untuk saat ini.',
    },
    {
      index: '03',
      title: 'Kebiasaan memudar tanpa umpan balik',
      description:
        'Makan sehat adalah permainan jangka panjang. Tanpa penguatan yang lembut, konsistensi sulit dipertahankan.',
    },
    {
      index: '04',
      title: 'Terlalu banyak informasi, terlalu sedikit kejelasan',
      description:
        'Konten nutrisi sering padat dan saling bertentangan. Pengalamannya bisa terasa lebih klinis daripada mendukung.',
    },
  ],
  challengeFraming:
    'Poin-poin berikut adalah hipotesis desain, yang dibentuk dari pengamatan umum terhadap kebiasaan nutrisi sehari-hari. Ini bukan temuan riset pengguna formal. Memvalidasinya dengan pengguna nyata akan menjadi langkah pertama dalam keterlibatan produksi.',
  goals: [
    {
      index: '01',
      title: 'Menyederhanakan Informasi Nutrisi',
      description:
        'Sajikan kalori, makro, dan kebutuhan harian dalam momen kecil yang mudah dicerna, bukan tabel data yang padat.',
    },
    {
      index: '02',
      title: 'Mendorong Pilihan Makanan Lebih Sehat',
      description:
        'Buat pilihan makanan seimbang mudah ditemukan dan dipahami, tanpa rasa bersalah atau aturan kaku.',
    },
    {
      index: '03',
      title: 'Membuat Perencanaan Makan Intuitif',
      description:
        'Ciptakan jalur jelas dari inspirasi hingga makanan tercatat hanya dalam beberapa ketukan.',
    },
    {
      index: '04',
      title: 'Menciptakan Pengalaman Ramah dan Mudah Diakses',
      description:
        'Gunakan bahasa hangat, kontras yang lapang, dan interaksi sederhana yang menyambut pemula.',
    },
  ] satisfies NutrivaGoal[],
  personasNote:
    'Persona ini adalah alat desain ilustratif yang dibuat untuk konsep ini. Mereka tidak didasarkan pada wawancara, survei, atau riset tervalidasi.',
  personas: [
    {
      id: 'young-professional',
      name: 'Maya',
      label: 'Persona ilustratif A',
      age: '25–32',
      context:
        'Seorang profesional muda yang menyeimbangkan minggu kerja penuh, ingin makan lebih baik tetapi memiliki waktu dan energi terbatas untuk merencanakan.',
      needs: [
        'Ide makanan seimbang yang cepat untuk hari kerja sibuk',
        'Tampilan sederhana dari progres harian',
        'Panduan yang tidak terasa membatasi',
      ],
      frustrations: [
        'Kelelahan mengambil keputusan di penghujung hari',
        'Aplikasi nutrisi yang terasa seperti pekerjaan rumah',
      ],
      quote:
        'Saya ingin makan dengan baik menyatu ke dalam hari saya — bukan menjadi tugas tambahan.',
    },
    {
      id: 'student',
      name: 'Rafi',
      label: 'Persona ilustratif B',
      age: '18–24',
      context:
        'Seorang mahasiswa yang tinggal jauh dari rumah, belajar memasak dan memilih makanan secara mandiri untuk pertama kalinya.',
      needs: [
        'Penjelasan dasar nutrisi yang mudah didekati',
        'Inspirasi makanan yang terjangkau dan familiar',
        'Cara membangun kebiasaan yang penuh toleransi',
      ],
      frustrations: [
        'Saran nutrisi yang membingungkan atau bertentangan',
        'Merasa dihakimi saat satu hari tidak berjalan sesuai rencana',
      ],
      quote:
        'Tunjukkan saja seperti apa makanan yang layak dan bantu saya tetap sederhana.',
    },
  ] satisfies Persona[],
  process: [
    {
      index: '01',
      title: 'Pahami',
      description:
        'Menjelajahi kebiasaan nutrisi sehari-hari dan gesekan seputar keputusan makan.',
    },
    {
      index: '02',
      title: 'Definisikan',
      description:
        'Membingkai masalah inti dan prinsip yang harus memandu pengalaman.',
    },
    {
      index: '03',
      title: 'Ideasi',
      description:
        'Membuat sketsa struktur, fitur, dan momen penyemangat yang mungkin.',
    },
    {
      index: '04',
      title: 'Wireframe',
      description:
        'Menyusun layar kunci dalam low-fidelity dan menguji kejelasan alur.',
    },
    {
      index: '05',
      title: 'Desain',
      description:
        'Membangun sistem visual yang tenang dan menerapkannya secara konsisten di seluruh layar.',
    },
    {
      index: '06',
      title: 'Prototipe',
      description:
        'Menghubungkan layar menjadi perjalanan mobile yang realistis dan dapat diklik.',
    },
  ] satisfies ProcessStep[],
  flow: [
    {
      index: '01',
      title: 'Buka aplikasi',
      description: 'Sambutan hangat dan tenang.',
    },
    {
      index: '02',
      title: 'Onboarding',
      description: 'Tiga langkah singkat berbasis manfaat.',
    },
    {
      index: '03',
      title: 'Buat profil',
      description: 'Perkenalan yang ringan.',
    },
    {
      index: '04',
      title: 'Atur tujuan nutrisi',
      description: 'Target sederhana yang dapat disesuaikan.',
    },
    {
      index: '05',
      title: 'Lihat dashboard',
      description: 'Hari ini dalam sekali pandang.',
    },
    {
      index: '06',
      title: 'Jelajahi makanan',
      description: 'Telusuri inspirasi seimbang.',
    },
    {
      index: '07',
      title: 'Lihat info nutrisi',
      description: 'Pahami pilihannya.',
    },
    {
      index: '08',
      title: 'Lacak progres harian',
      description: 'Rasa momentum yang lembut.',
    },
  ] satisfies FlowStep[],
  flowNote:
    'Jalur pertama dari aplikasi dibuka hingga makanan pertama tercatat. Alurnya sengaja singkat: delapan langkah, satu tindakan jelas per layar.',
  wireframes: [
    {
      id: 'dashboard' as ScreenId,
      name: 'Dashboard utama',
      summary: 'Sapaan, cincin kalori harian, ringkasan makro, dan makanan hari ini.',
    },
    {
      id: 'discovery' as ScreenId,
      name: 'Penemuan makanan',
      summary: 'Pencarian, filter kategori, dan daftar makanan seimbang yang dapat ditelusuri.',
    },
    {
      id: 'diary' as ScreenId,
      name: 'Diari makanan',
      summary: 'Satu hari makanan yang dikelompokkan berdasarkan waktu, dengan total kalori berjalan.',
    },
  ],
  screenNote:
    'Semua layar adalah desain konsep yang dibuat untuk portofolio ini. Nilai nutrisi yang ditampilkan bersifat ilustratif dan bukan saran diet atau medis.',
  screens: [
    {
      id: 'splash',
      name: 'Layar Splash',
      summary: 'Kesan pertama yang tenang yang menetapkan nada sebelum tugas apa pun dimulai.',
      note: 'Momen merek',
    },
    {
      id: 'onboarding',
      name: 'Onboarding',
      summary:
        'Tiga langkah berbasis manfaat memperkenalkan tujuan aplikasi tanpa meminta komitmen.',
      note: 'Pertama kali',
    },
    {
      id: 'auth',
      name: 'Masuk / Daftar',
      summary:
        'Titik masuk tanpa hambatan dengan opsi email dan masuk melalui media sosial.',
      note: 'Akun',
    },
    {
      id: 'dashboard',
      name: 'Dashboard Utama',
      summary:
        'Hari ini dalam sekali pandang: kalori, makro, makanan, dan satu tindakan berikutnya.',
      note: 'Layar inti',
    },
    {
      id: 'nutrition',
      name: 'Ringkasan Nutrisi',
      summary:
        'Tampilan mingguan yang mengubah angka menjadi pola progres yang mudah dibaca.',
      note: 'Insight',
    },
    {
      id: 'discovery',
      name: 'Penemuan Makanan',
      summary:
        'Inspirasi makanan seimbang, dapat ditelusuri berdasarkan waktu dan preferensi diet.',
      note: 'Eksplorasi',
    },
    {
      id: 'meal-details',
      name: 'Detail Makanan',
      summary:
        'Semua yang dibutuhkan untuk merasa yakin tentang sebuah makanan, dalam satu gulir.',
      note: 'Keputusan',
    },
    {
      id: 'diary',
      name: 'Diari Makanan',
      summary:
        'Catatan harian yang jujur dan lembut — dibangun untuk konsistensi, bukan kesempurnaan.',
      note: 'Pelacakan',
    },
    {
      id: 'progress',
      name: 'Progres Harian',
      summary:
        'Energi, hidrasi, dan streak disajikan sebagai dorongan, bukan tekanan.',
      note: 'Motivasi',
    },
    {
      id: 'profile',
      name: 'Profil Pengguna',
      summary:
        'Tujuan, preferensi, dan pengaturan akun tetap sederhana dan mudah disesuaikan.',
      note: 'Akun',
    },
  ] satisfies NutrivaScreen[],
  designSystem: {
    intro:
      'Bahasa visual ringkas yang dibangun di sekitar satu hijau segar, permukaan sage lembut, dan ruang bernapas putih hangat. Sistem ini menjaga keputusan tetap konsisten tanpa membuat antarmuka terasa klinis.',
    colors: [
      { name: 'Hijau Segar', hex: '#5F9B72', role: 'Aksi utama & penekanan', className: 'bg-nutriva-500' },
      { name: 'Sage Lembut', hex: '#A8C9A8', role: 'Aksen sekunder', className: 'bg-nutriva-300' },
      { name: 'Hijau Kabut', hex: '#EAF3E9', role: 'Permukaan & sorotan', className: 'bg-nutriva-100' },
      { name: 'Putih Hangat', hex: '#FAFAF7', role: 'Latar aplikasi', className: 'bg-paper border border-line' },
      { name: 'Arang Dalam', hex: '#25352B', role: 'Teks utama', className: 'bg-nutriva-800' },
    ],
    typography: [
      { label: 'Display', sample: 'Aa', detail: 'Plus Jakarta Sans · Bold', size: 'text-[34px]' },
      { label: 'Judul', sample: 'Aa', detail: 'Plus Jakarta Sans · Semibold', size: 'text-2xl' },
      { label: 'Isi', sample: 'Aa', detail: 'Plus Jakarta Sans · Regular', size: 'text-base' },
      { label: 'Label', sample: 'Aa', detail: 'Plus Jakarta Sans · Medium', size: 'text-xs' },
    ],
    spacing: [
      { label: '4', value: '4px' },
      { label: '8', value: '8px' },
      { label: '12', value: '12px' },
      { label: '16', value: '16px' },
      { label: '24', value: '24px' },
      { label: '32', value: '32px' },
    ],
    components: [
      'Tombol primer & sekunder',
      'Kolom input dengan label jelas',
      'Kartu permukaan lembut',
      'Navigasi bawah dengan status aktif',
      'Cincin progres & bar makro',
      'Set ikon ringkas',
    ],
    icons: ['Daun', 'Api', 'Tetes', 'Cari', 'Kalender', 'Hati', 'Pengguna', 'Plus'],
  },
  reflection: [
    'Merancang Nutriva membantu saya mengeksplorasi bagaimana hierarki visual yang matang, arsitektur informasi yang jelas, dan interaksi sederhana dapat membuat pengalaman nutrisi terasa lebih mudah didekati.',
    'Proyek ini memperkuat minat saya pada desain yang berpusat pada pengguna dan memotivasi saya untuk terus meningkatkan keterampilan desain UI/UX.',
  ],
  reflectionNote:
    'Sebagai proyek konsep, tidak ada hasil pengguna yang diklaim. Langkah berikutnya adalah pengujian usability termoderasi dengan sekelompok kecil pengguna target, diikuti iterasi.',
  designDecisions: [
    {
      title: 'Satu aksi utama per layar',
      description:
        'Setiap layar mengarahkan perhatian ke satu langkah berikutnya, menjaga pengalaman tetap tenang bagi pengguna pertama kali.',
    },
    {
      title: 'Angka dengan konteks',
      description:
        'Kalori dan makro dipasangkan dengan label bahasa sehari-hari agar data mendukung keputusan, bukan menggantikannya.',
    },
    {
      title: 'Bahasa yang lembut dan tidak menghakimi',
      description:
        'Progres dibingkai sebagai momentum; melewatkan target tidak pernah diperlakukan sebagai kegagalan.',
    },
    {
      title: 'Pola mobile yang familiar',
      description:
        'Navigasi bawah yang persisten, petunjuk kembali yang jelas, dan kolom formulir standar mengurangi kurva pembelajaran.',
    },
  ],
  nextSteps: [
    'Validasi hipotesis masalah dengan pengguna target',
    'Jalankan pengujian usability termoderasi pada alur pencatatan inti',
    'Uji aksesibilitas, termasuk penskalaan teks dan kontras',
    'Jelajahi detail resep dan perluasan daftar belanja',
  ],
}

export const nutrivaContent: Record<Lang, Nutriva> = {
  en: nutrivaEn,
  id: nutrivaId,
}
