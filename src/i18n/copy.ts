import type { ScreenId } from '../data/nutriva'
import type { Lang } from './config'

const screenDescriptionsEn: Record<ScreenId, string> = {
  splash: 'Nutriva brand splash',
  onboarding: 'Onboarding introduction',
  auth: 'Sign in screen',
  dashboard: 'Daily dashboard',
  nutrition: 'Weekly nutrition overview',
  discovery: 'Meal discovery feed',
  'meal-details': 'Meal detail view',
  diary: 'Daily food diary',
  progress: 'Daily progress tracking',
  profile: 'User profile',
}

const screenDescriptionsId: Record<ScreenId, string> = {
  splash: 'Splash merek Nutriva',
  onboarding: 'Pengenalan onboarding',
  auth: 'Layar masuk',
  dashboard: 'Dashboard harian',
  nutrition: 'Ringkasan nutrisi mingguan',
  discovery: 'Feed penemuan makanan',
  'meal-details': 'Tampilan detail makanan',
  diary: 'Diari makanan harian',
  progress: 'Pelacakan progres harian',
  profile: 'Profil pengguna',
}

const en = {
  meta: {
    home: {
      title: 'Lusiana Deswita — UI/UX Designer Portfolio',
      description:
        'Explore the portfolio of Lusiana Deswita, a UI/UX Designer passionate about creating intuitive digital experiences. Discover Nutriva, a nutrition-focused mobile app design case study.',
    },
    caseStudy: {
      title: 'Nutriva Case Study — Lusiana Deswita',
      description:
        'A nutrition-focused mobile app concept case study by UI/UX Designer Lusiana Deswita — from problem framing and user flow to wireframes, UI design and a complete design system.',
    },
    notFound: {
      title: 'Page not found — Lusiana Deswita',
      description:
        'This page could not be found. Return to the portfolio of Lusiana Deswita.',
    },
  },
  common: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToTop: 'Back to top',
    language: 'Language',
  },
  nav: {
    primary: 'Primary',
    mobile: 'Mobile',
    footer: 'Footer',
    talk: 'Let’s talk',
    homeSuffix: '— home',
  },
  hero: {
    year: 'Portfolio · 2026',
    experienceSuffix: 'of experience',
    role: 'UI/UX Designer',
    mobileFirst: 'Mobile-first thinking',
    featured: 'Featured · Nutriva',
    conceptProject: 'Concept project',
    nutritionLifestyle: 'Nutrition & lifestyle',
    selfInitiated: 'Self-initiated mobile app design study',
    conceptStudy: 'Concept study',
    labels: {
      dashboard: 'Nutriva mobile app dashboard concept',
      progress: 'Nutriva daily progress screen concept',
    },
  },
  principles: {
    ariaLabel: 'Design principles',
  },
  about: {
    eyebrow: 'About',
    description:
      'A designer at the beginning of her practice — curious about people, attentive to detail and committed to making digital experiences feel effortless.',
    portraitRole: 'Designer',
    principles: ['Simplicity · Usability', 'Consistency · Meaning'],
    experienceLabel: 'Experience',
    experienceValue: 'Nearly 1 Year',
    focusLabel: 'Focus',
    focusValue: 'UI/UX Design',
    philosophy: 'Design philosophy',
    interests: 'Professional interests',
    growingTitle: 'A growing practice',
  },
  featured: {
    eyebrow: 'Selected work',
    titleLead: 'Nutriva — a calmer way to ',
    titleAccent: 'eat well.',
    description:
      'One end-to-end mobile concept, taken from an everyday problem through to a complete interface system. Explore the thinking, the flows and the screens.',
    readCaseStudy: 'Read the full case study',
  },
  skills: {
    eyebrow: 'Design skills',
    titleLead: 'A toolkit for ',
    titleEmphasis: 'thoughtful',
    titleTail: ' product design.',
    description:
      'Capabilities built through practice and self-initiated work — from understanding a problem to shaping the final interaction.',
    note: 'These skills reflect my current practice as an emerging designer. I’m actively strengthening them through hands-on projects, feedback and continued learning.',
    cta: 'Discuss a collaboration',
  },
  tools: {
    eyebrow: 'Tools',
    title: 'The tools behind the work.',
    description:
      'The daily toolkit for mapping ideas, designing interfaces and building realistic prototypes.',
    usedAcross: 'Used across the Nutriva case study',
    note: 'Only confirmed tools are listed. This section is intentionally small — more tools will be added as they become part of my practice.',
  },
  contact: {
    eyebrow: 'Contact',
    findMe: 'Find me',
    placeholder: 'Placeholder',
    emailAria: 'Send an email to Lusiana',
  },
  footer: {
    tagline: 'Designed with care and creativity.',
    copyright: 'Lusiana Deswita © 2026',
    role: 'UI/UX Designer · Portfolio',
  },
  caseStudy: {
    back: 'Back to selected work',
    eyebrow: 'Case study',
    field: 'Mobile application',
    badge: 'Concept project',
    tags: ['Nutrition & healthy lifestyle', 'UI/UX design', 'Mobile app concept'],
    snapshot: 'Project snapshot',
    notice:
      'Self-initiated concept. No verified research, usability results, client outcomes or business metrics are claimed.',
    labels: {
      dashboard: 'Nutriva home dashboard concept screen',
      onboarding: 'Nutriva onboarding concept screen',
      mealDetails: 'Nutriva meal details concept screen',
    },
    conceptUi: 'Nutriva · Concept UI',
    illustrative: 'Illustrative screens · Not a shipped product',
    navLabel: 'Case study',
    challenge: {
      eyebrow: 'The challenge',
      titleLead: 'Nutrition guidance often feels like ',
      titleAccent: 'homework.',
      description:
        'Before designing screens, I framed the friction people might meet when trying to eat a little better. These are hypotheses, not findings.',
      noteTitle: 'Design hypotheses — not validated research',
    },
    goals: {
      eyebrow: 'Design goals',
      titleLead: 'Four principles to design ',
      titleAccent: 'against.',
      description:
        'Every decision in the concept was checked against these four intentions.',
    },
    users: {
      eyebrow: 'Target users',
      titleLead: 'Two people worth ',
      titleAccent: 'designing for.',
      description:
        'Illustrative personas used to keep the design grounded in a real-life context. They are not research-validated.',
      badge: 'Illustrative',
      needs: 'Needs',
      frustrations: 'Frustrations',
    },
    process: {
      eyebrow: 'UX design process',
      titleLead: 'From a question to a ',
      titleAccent: 'considered interface.',
      description:
        'An iterative process — each stage informed the next, with room to revisit decisions as the screens evolved.',
      note: 'A flexible framework rather than a rigid sequence. In a real engagement, research and testing would add feedback loops between these stages.',
    },
    flow: {
      eyebrow: 'User flow',
      titleLead: 'Eight steps from first open to ',
      titleAccent: 'first log.',
      description:
        'A deliberately short first-run journey. Each screen asks for one clear action before moving forward.',
    },
    wireframes: {
      eyebrow: 'Wireframes',
      titleLead: 'Structure first. ',
      titleAccent: 'Detail later.',
      description:
        'Low-fidelity layouts were used to test hierarchy, grouping and the path through each core screen before any visual styling.',
      badge: 'Conceptual',
      labelPrefix: 'Conceptual wireframe — ',
      note: 'These are conceptual wireframes created for this portfolio. They are not reconstructed client deliverables.',
    },
    uiDesign: {
      eyebrow: 'UI design',
      titleLead: 'Ten screens, one ',
      titleAccent: 'quiet visual language.',
      description:
        'A fresh green palette, warm surfaces and a consistent type scale carry the experience from welcome to progress.',
      stats: [
        '10 concept screens',
        'iOS-style mobile frames',
        'Illustrative nutrition values',
      ],
      swipe: 'Swipe on mobile · Scroll on desktop',
    },
    designSystem: {
      eyebrow: 'Design system',
      titleLead: 'A small system that keeps every screen ',
      titleAccent: 'in tune.',
    },
    final: {
      eyebrow: 'Final presentation',
      titleLead: 'The concept, presented as a ',
      titleAccent: 'cohesive whole.',
      description:
        'Four screens selected to show the visual system at its most expressive — welcome, daily overview, meal detail and progress.',
      label: 'Final presentation',
      heading: 'Nutriva, in use.',
      body: 'A connected set of screens showing the rhythm of a day — from first welcome to evening progress.',
      stats: '10 screens · 1 flow · Illustrative values',
      footerLeft: 'Concept UI presentation · Not a shipped product',
      footerRight: 'All nutrition values are illustrative',
    },
    reflection: {
      eyebrow: 'Design reflection',
      titleLead: 'What this project ',
      titleAccent: 'taught me.',
      description:
        'A moment to step back — what worked, what I would test next, and why the process matters as much as the final screens.',
      decisions: 'Design decisions',
      nextSteps: 'Next steps',
      thanks: 'Thank you for reading',
      thanksTitle: 'Let’s create something meaningful next.',
      back: 'Back to portfolio',
      contact: 'Get in touch',
    },
    designSystemUi: {
      colour: 'Colour palette',
      colourTitle: 'Fresh, soft and grounded',
      typography: 'Typography',
      typeNote:
        'Generous line height · restrained weights · comfortable reading widths.',
      buttons: 'Buttons & inputs',
      addToDiary: 'Add to diary',
      addSnack: 'Add a snack',
      emailLabel: 'Email address',
      emailNote:
        'Clear labels, generous tap targets and quiet placeholder text.',
      cards: 'Cards & navigation',
      oats: 'Overnight oats',
      oatsMeta: '320 kcal · Breakfast',
      logged: 'Logged',
      bottomNav: 'Bottom navigation with a clear active state',
      icons: 'Icons & spacing',
      spacingNote:
        'A 4-point spacing scale keeps rhythm consistent across every screen.',
    },
    screenDescriptions: screenDescriptionsEn,
  },
  notFound: {
    eyebrow: 'Error',
    title: 'This page hasn’t been designed yet.',
    description:
      'The link may be outdated, or the page may have moved. Let’s take you back to the work.',
    home: 'Back to home',
    caseStudy: 'View Nutriva case study',
  },
}

export type Copy = typeof en

const id: Copy = {
  meta: {
    home: {
      title: 'Lusiana Deswita — Portofolio UI/UX Designer',
      description:
        'Jelajahi portofolio Lusiana Deswita, UI/UX Designer yang bersemangat menciptakan pengalaman digital yang intuitif. Temukan Nutriva, studi kasus desain aplikasi mobile berbasis nutrisi.',
    },
    caseStudy: {
      title: 'Studi Kasus Nutriva — Lusiana Deswita',
      description:
        'Studi kasus konsep aplikasi mobile berbasis nutrisi oleh UI/UX Designer Lusiana Deswita — dari perumusan masalah dan user flow hingga wireframe, desain UI, dan design system lengkap.',
    },
    notFound: {
      title: 'Halaman tidak ditemukan — Lusiana Deswita',
      description:
        'Halaman ini tidak dapat ditemukan. Kembali ke portofolio Lusiana Deswita.',
    },
  },
  common: {
    skipToContent: 'Lewati ke konten',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    backToTop: 'Kembali ke atas',
    language: 'Bahasa',
  },
  nav: {
    primary: 'Utama',
    mobile: 'Mobile',
    footer: 'Footer',
    talk: 'Mari bicara',
    homeSuffix: '— beranda',
  },
  hero: {
    year: 'Portofolio · 2026',
    experienceSuffix: 'pengalaman',
    role: 'UI/UX Designer',
    mobileFirst: 'Berpikir mobile-first',
    featured: 'Unggulan · Nutriva',
    conceptProject: 'Proyek konsep',
    nutritionLifestyle: 'Nutrisi & gaya hidup',
    selfInitiated: 'Studi desain aplikasi mobile mandiri',
    conceptStudy: 'Studi konsep',
    labels: {
      dashboard: 'Konsep dashboard aplikasi mobile Nutriva',
      progress: 'Konsep layar progres harian Nutriva',
    },
  },
  principles: {
    ariaLabel: 'Prinsip desain',
  },
  about: {
    eyebrow: 'Tentang',
    description:
      'Seorang desainer di awal perjalanan praktiknya — penasaran dengan orang, teliti pada detail, dan berkomitmen membuat pengalaman digital terasa mudah.',
    portraitRole: 'Desainer',
    principles: ['Kesederhanaan · Kegunaan', 'Konsistensi · Makna'],
    experienceLabel: 'Pengalaman',
    experienceValue: 'Hampir 1 Tahun',
    focusLabel: 'Fokus',
    focusValue: 'Desain UI/UX',
    philosophy: 'Filosofi desain',
    interests: 'Minat profesional',
    growingTitle: 'Praktik yang terus tumbuh',
  },
  featured: {
    eyebrow: 'Karya pilihan',
    titleLead: 'Nutriva — cara yang lebih tenang untuk ',
    titleAccent: 'makan dengan baik.',
    description:
      'Satu konsep mobile end-to-end, dari masalah sehari-hari hingga sistem antarmuka yang lengkap. Telusuri pemikiran, alur, dan layarnya.',
    readCaseStudy: 'Baca studi kasus lengkap',
  },
  skills: {
    eyebrow: 'Keahlian desain',
    titleLead: 'Perangkat untuk desain produk yang ',
    titleEmphasis: 'penuh pertimbangan',
    titleTail: '.',
    description:
      'Kemampuan yang dibangun melalui praktik dan proyek mandiri — dari memahami masalah hingga membentuk interaksi akhir.',
    note: 'Keahlian ini mencerminkan praktik saya saat ini sebagai desainer yang sedang berkembang. Saya aktif memperkuatnya melalui proyek langsung, masukan, dan pembelajaran berkelanjutan.',
    cta: 'Diskusikan kolaborasi',
  },
  tools: {
    eyebrow: 'Alat',
    title: 'Alat di balik karya.',
    description:
      'Perangkat harian untuk memetakan ide, merancang antarmuka, dan membangun prototipe yang realistis.',
    usedAcross: 'Digunakan dalam studi kasus Nutriva',
    note: 'Hanya alat yang terkonfirmasi yang dicantumkan. Bagian ini sengaja dibuat kecil — alat lain akan ditambahkan saat menjadi bagian dari praktik saya.',
  },
  contact: {
    eyebrow: 'Kontak',
    findMe: 'Temukan saya',
    placeholder: 'Placeholder',
    emailAria: 'Kirim email ke Lusiana',
  },
  footer: {
    tagline: 'Dirancang dengan hati dan kreativitas.',
    copyright: 'Lusiana Deswita © 2026',
    role: 'UI/UX Designer · Portofolio',
  },
  caseStudy: {
    back: 'Kembali ke karya pilihan',
    eyebrow: 'Studi kasus',
    field: 'Aplikasi mobile',
    badge: 'Proyek konsep',
    tags: ['Nutrisi & gaya hidup sehat', 'Desain UI/UX', 'Konsep aplikasi mobile'],
    snapshot: 'Ringkasan proyek',
    notice:
      'Konsep mandiri. Tidak ada klaim riset tervalidasi, hasil usability, hasil klien, atau metrik bisnis.',
    labels: {
      dashboard: 'Layar konsep dashboard utama Nutriva',
      onboarding: 'Layar konsep onboarding Nutriva',
      mealDetails: 'Layar konsep detail makanan Nutriva',
    },
    conceptUi: 'Nutriva · UI Konsep',
    illustrative: 'Layar ilustratif · Bukan produk yang sudah dirilis',
    navLabel: 'Studi kasus',
    challenge: {
      eyebrow: 'Tantangan',
      titleLead: 'Panduan nutrisi sering terasa seperti ',
      titleAccent: 'pekerjaan rumah.',
      description:
        'Sebelum merancang layar, saya membingkai gesekan yang mungkin dialami orang saat mencoba makan lebih baik. Ini hipotesis, bukan temuan.',
      noteTitle: 'Hipotesis desain — bukan riset tervalidasi',
    },
    goals: {
      eyebrow: 'Tujuan desain',
      titleLead: 'Empat prinsip sebagai ',
      titleAccent: 'acuan desain.',
      description:
        'Setiap keputusan dalam konsep ini diuji terhadap empat niat berikut.',
    },
    users: {
      eyebrow: 'Target pengguna',
      titleLead: 'Dua orang yang layak ',
      titleAccent: 'didesain untuknya.',
      description:
        'Persona ilustratif untuk menjaga desain tetap berpijak pada konteks kehidupan nyata. Bukan hasil riset tervalidasi.',
      badge: 'Ilustratif',
      needs: 'Kebutuhan',
      frustrations: 'Frustrasi',
    },
    process: {
      eyebrow: 'Proses desain UX',
      titleLead: 'Dari sebuah pertanyaan menuju ',
      titleAccent: 'antarmuka yang matang.',
      description:
        'Proses iteratif — setiap tahap memberi masukan bagi tahap berikutnya, dengan ruang untuk meninjau keputusan saat layar berkembang.',
      note: 'Kerangka yang fleksibel, bukan urutan kaku. Dalam keterlibatan nyata, riset dan pengujian akan menambahkan siklus umpan balik di antara tahap-tahap ini.',
    },
    flow: {
      eyebrow: 'User flow',
      titleLead: 'Delapan langkah dari pertama dibuka hingga ',
      titleAccent: 'catatan pertama.',
      description:
        'Perjalanan pertama yang sengaja dibuat singkat. Setiap layar meminta satu tindakan jelas sebelum melanjutkan.',
    },
    wireframes: {
      eyebrow: 'Wireframe',
      titleLead: 'Struktur dulu. ',
      titleAccent: 'Detail kemudian.',
      description:
        'Layout low-fidelity digunakan untuk menguji hierarki, pengelompokan, dan jalur melalui setiap layar inti sebelum ada gaya visual.',
      badge: 'Konseptual',
      labelPrefix: 'Wireframe konseptual — ',
      note: 'Ini adalah wireframe konseptual yang dibuat untuk portofolio ini. Bukan rekonstruksi deliverable klien.',
    },
    uiDesign: {
      eyebrow: 'Desain UI',
      titleLead: 'Sepuluh layar, satu ',
      titleAccent: 'bahasa visual yang tenang.',
      description:
        'Palet hijau segar, permukaan hangat, dan skala tipografi yang konsisten membawa pengalaman dari sambutan hingga progres.',
      stats: [
        '10 layar konsep',
        'Frame mobile gaya iOS',
        'Nilai nutrisi ilustratif',
      ],
      swipe: 'Geser di mobile · Gulir di desktop',
    },
    designSystem: {
      eyebrow: 'Design system',
      titleLead: 'Sistem kecil yang menjaga setiap layar ',
      titleAccent: 'selaras.',
    },
    final: {
      eyebrow: 'Presentasi akhir',
      titleLead: 'Konsep, disajikan sebagai ',
      titleAccent: 'satu kesatuan.',
      description:
        'Empat layar dipilih untuk menunjukkan sistem visual pada titik paling ekspresif — sambutan, ringkasan harian, detail makanan, dan progres.',
      label: 'Presentasi akhir',
      heading: 'Nutriva, saat digunakan.',
      body: 'Rangkaian layar terhubung yang menunjukkan ritme satu hari — dari sambutan pertama hingga progres malam.',
      stats: '10 layar · 1 alur · Nilai ilustratif',
      footerLeft: 'Presentasi UI konsep · Bukan produk yang sudah dirilis',
      footerRight: 'Semua nilai nutrisi bersifat ilustratif',
    },
    reflection: {
      eyebrow: 'Refleksi desain',
      titleLead: 'Apa yang proyek ini ',
      titleAccent: 'ajarkan kepada saya.',
      description:
        'Momen untuk melangkah mundur — apa yang berhasil, apa yang akan saya uji berikutnya, dan mengapa proses sama pentingnya dengan layar akhir.',
      decisions: 'Keputusan desain',
      nextSteps: 'Langkah berikutnya',
      thanks: 'Terima kasih telah membaca',
      thanksTitle: 'Mari ciptakan sesuatu yang bermakna berikutnya.',
      back: 'Kembali ke portofolio',
      contact: 'Hubungi saya',
    },
    designSystemUi: {
      colour: 'Palet warna',
      colourTitle: 'Segar, lembut, dan membumi',
      typography: 'Tipografi',
      typeNote:
        'Line height lapang · bobot terkendali · lebar baca yang nyaman.',
      buttons: 'Tombol & input',
      addToDiary: 'Tambah ke diari',
      addSnack: 'Tambah camilan',
      emailLabel: 'Alamat email',
      emailNote:
        'Label jelas, area sentuh lapang, dan teks placeholder yang tenang.',
      cards: 'Kartu & navigasi',
      oats: 'Oat semalam',
      oatsMeta: '320 kcal · Sarapan',
      logged: 'Tercatat',
      bottomNav: 'Navigasi bawah dengan status aktif yang jelas',
      icons: 'Ikon & spasi',
      spacingNote:
        'Skala spasi 4 poin menjaga ritme tetap konsisten di setiap layar.',
    },
    screenDescriptions: screenDescriptionsId,
  },
  notFound: {
    eyebrow: 'Galat',
    title: 'Halaman ini belum dirancang.',
    description:
      'Tautan mungkin sudah usang, atau halaman telah dipindahkan. Mari kembali ke karya.',
    home: 'Kembali ke beranda',
    caseStudy: 'Lihat studi kasus Nutriva',
  },
}

export const copy: Record<Lang, Copy> = { en, id }
