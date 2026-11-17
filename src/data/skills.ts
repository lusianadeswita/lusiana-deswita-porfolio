import type { Lang } from '../i18n/config'

export type SkillGroup = {
  id: string
  index: string
  title: string
  description: string
  skills: string[]
}

export type Tool = {
  name: string
  role: string
  description: string
  level: string
}

const skillGroupsEn: SkillGroup[] = [
  {
    id: 'ux',
    index: '01',
    title: 'UX Design',
    description:
      'Understanding the problem before shaping the interface — from user needs to clear, logical journeys.',
    skills: [
      'User Research Fundamentals',
      'User Journey Mapping',
      'Information Architecture',
      'User Flow',
      'Wireframing',
      'Usability Principles',
    ],
  },
  {
    id: 'ui',
    index: '02',
    title: 'UI Design',
    description:
      'Turning structure into a calm, readable and visually coherent experience across screens and sizes.',
    skills: [
      'Visual Hierarchy',
      'Typography',
      'Color Theory',
      'Layout Design',
      'Responsive Design',
      'Design Systems',
    ],
  },
  {
    id: 'prototyping',
    index: '03',
    title: 'Prototyping',
    description:
      'Testing ideas quickly, then refining the details that make an interaction feel natural.',
    skills: [
      'Interactive Prototyping',
      'Low-Fidelity Wireframes',
      'High-Fidelity Design',
      'Interaction Design',
    ],
  },
]

const skillGroupsId: SkillGroup[] = [
  {
    id: 'ux',
    index: '01',
    title: 'Desain UX',
    description:
      'Memahami masalah sebelum membentuk antarmuka — dari kebutuhan pengguna hingga alur yang jelas dan logis.',
    skills: [
      'Dasar Riset Pengguna',
      'Pemetaan Perjalanan Pengguna',
      'Arsitektur Informasi',
      'User Flow',
      'Wireframing',
      'Prinsip Kegunaan',
    ],
  },
  {
    id: 'ui',
    index: '02',
    title: 'Desain UI',
    description:
      'Mengubah struktur menjadi pengalaman yang tenang, mudah dibaca, dan koheren secara visual di berbagai layar dan ukuran.',
    skills: [
      'Hierarki Visual',
      'Tipografi',
      'Teori Warna',
      'Desain Layout',
      'Desain Responsif',
      'Design System',
    ],
  },
  {
    id: 'prototyping',
    index: '03',
    title: 'Prototipe',
    description:
      'Menguji ide dengan cepat, lalu menyempurnakan detail yang membuat interaksi terasa alami.',
    skills: [
      'Prototipe Interaktif',
      'Wireframe Low-Fidelity',
      'Desain High-Fidelity',
      'Desain Interaksi',
    ],
  },
]

export const skillGroupsByLang: Record<Lang, SkillGroup[]> = {
  en: skillGroupsEn,
  id: skillGroupsId,
}

const toolsEn: Tool[] = [
  {
    name: 'Figma',
    role: 'Interface design & prototyping',
    description:
      'My primary workspace for wireframes, UI design, design systems and clickable prototypes.',
    level: 'Primary tool',
  },
  {
    name: 'FigJam',
    role: 'Ideation & user flows',
    description:
      'Used for mapping flows, collecting references and thinking through structure before designing.',
    level: 'Supporting tool',
  },
]

const toolsId: Tool[] = [
  {
    name: 'Figma',
    role: 'Desain antarmuka & prototipe',
    description:
      'Ruang kerja utama saya untuk wireframe, desain UI, design system, dan prototipe yang dapat diklik.',
    level: 'Alat utama',
  },
  {
    name: 'FigJam',
    role: 'Ideasi & user flow',
    description:
      'Digunakan untuk memetakan alur, mengumpulkan referensi, dan memikirkan struktur sebelum mendesain.',
    level: 'Alat pendukung',
  },
]

export const toolsByLang: Record<Lang, Tool[]> = {
  en: toolsEn,
  id: toolsId,
}
