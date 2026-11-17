/**
 * Personal content for the portfolio.
 * Everything shown on the site comes from this file — edit it to update the site.
 *
 * Each language has its own complete content set. `profiles.en` is the source of
 * the `Profile` type, so a missing Indonesian field is caught at build time.
 *
 * PLACEHOLDERS
 * Contact details have not been supplied, so they are marked with `placeholder: true`
 * and rendered as clearly-labelled placeholders. Replace the values below to go live.
 */

import type { Lang } from '../i18n/config'

export type NavItem = {
  label: string
  href: string
  sectionId: string
}

export type ContactLink = {
  id: 'email' | 'linkedin' | 'behance'
  label: string
  value: string
  href: string
  placeholder: boolean
}

export type Profile = {
  name: string
  firstName: string
  logo: string
  title: string
  experience: {
    short: string
    long: string
    detail: string
  }
  availability: string
  hero: {
    eyebrow: string
    headlineLead: string
    headlineAccent: string
    supporting: string
    primaryCta: string
    secondaryCta: string
  }
  about: {
    headline: string
    paragraphs: string[]
    philosophy: string
    experienceNote: string
    interests: string[]
    portraitNote: string
  }
  contact: {
    headline: string
    description: string
    links: ContactLink[]
    cta: string
  }
  footer: {
    tagline: string
    note: string
  }
  navigation: NavItem[]
}

const en: Profile = {
  name: 'Lusiana Deswita',
  firstName: 'Lusiana',
  logo: 'LUSIANA.',
  title: 'UI/UX Designer',
  experience: {
    short: 'Nearly 1 year',
    long: 'Nearly one year of experience',
    detail:
      'Building a foundation in user-centred design through self-initiated projects and continuous learning.',
  },
  availability: 'Open to UI/UX opportunities',
  hero: {
    eyebrow: 'UI/UX Designer · Nearly 1 year of experience',
    headlineLead: 'Designing Digital Experiences That Feel',
    headlineAccent: 'Simple and Meaningful.',
    supporting:
      "Hi, I'm Lusiana Deswita — a UI/UX Designer passionate about creating intuitive, thoughtful, and user-friendly digital experiences.",
    primaryCta: 'Explore My Work',
    secondaryCta: "Let's Connect",
  },
  about: {
    headline: 'A Little About Me',
    paragraphs: [
      "I'm Lusiana Deswita, an aspiring UI/UX Designer with nearly one year of experience in designing digital experiences.",
      'I enjoy understanding user needs, exploring creative solutions, and transforming ideas into intuitive and visually engaging interfaces.',
      'My design approach focuses on simplicity, usability, consistency, and meaningful user experiences.',
      'I believe that good design is not only about how things look, but also about how people interact with them.',
    ],
    philosophy:
      'Good design is not only about how things look, but also about how people interact with them.',
    experienceNote:
      'A growing practice — built on curiosity, self-initiated projects, and a genuine interest in how people use digital products.',
    interests: [
      'Mobile product design',
      'Health & wellness experiences',
      'Design systems',
      'Accessibility & inclusive design',
      'Visual storytelling',
    ],
    portraitNote:
      'A portrait has not been supplied. This typographic treatment is an intentional placeholder — replace it with a photograph in the About section when available.',
  },
  contact: {
    headline: "Have a project in mind? Let's create something meaningful.",
    description:
      "I'm always open to connecting, collaborating, and exploring new opportunities in UI/UX design.",
    links: [
      {
        id: 'email',
        label: 'Email',
        value: 'lusianadeswita09@gmail.com',
        href: 'mailto:lusianadeswita09@gmail.com',
        placeholder: true,
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'LinkedIn Profile',
        href: 'https://www.linkedin.com/in/lusiana-deswita-a05891301/',
        placeholder: true,
      },
    ],
    cta: 'Say hello',
  },
  footer: {
    tagline: 'Designed with care and creativity.',
    note: 'Portfolio concept · All project work shown is a self-initiated design study.',
  },
  navigation: [
    { label: 'Home', href: '/#home', sectionId: 'home' },
    { label: 'About', href: '/#about', sectionId: 'about' },
    { label: 'Work', href: '/#work', sectionId: 'work' },
    { label: 'Skills', href: '/#skills', sectionId: 'skills' },
    { label: 'Contact', href: '/#contact', sectionId: 'contact' },
  ],
}

const id: Profile = {
  name: 'Lusiana Deswita',
  firstName: 'Lusiana',
  logo: 'LUSIANA.',
  title: 'UI/UX Designer',
  experience: {
    short: 'Hampir 1 tahun',
    long: 'Hampir satu tahun pengalaman',
    detail:
      'Membangun fondasi desain yang berpusat pada pengguna melalui proyek mandiri dan pembelajaran berkelanjutan.',
  },
  availability: 'Terbuka untuk peluang UI/UX',
  hero: {
    eyebrow: 'UI/UX Designer · Hampir 1 tahun pengalaman',
    headlineLead: 'Merancang Pengalaman Digital yang Terasa',
    headlineAccent: 'Sederhana dan Bermakna.',
    supporting:
      'Halo, saya Lusiana Deswita — UI/UX Designer yang bersemangat menciptakan pengalaman digital yang intuitif, penuh pertimbangan, dan mudah digunakan.',
    primaryCta: 'Jelajahi Karya Saya',
    secondaryCta: 'Mari Terhubung',
  },
  about: {
    headline: 'Sedikit Tentang Saya',
    paragraphs: [
      'Saya Lusiana Deswita, calon UI/UX Designer dengan pengalaman hampir satu tahun dalam merancang pengalaman digital.',
      'Saya senang memahami kebutuhan pengguna, mengeksplorasi solusi kreatif, dan mengubah ide menjadi antarmuka yang intuitif serta menarik secara visual.',
      'Pendekatan desain saya berfokus pada kesederhanaan, kegunaan, konsistensi, dan pengalaman pengguna yang bermakna.',
      'Saya percaya desain yang baik bukan hanya soal tampilan, tetapi juga bagaimana orang berinteraksi dengannya.',
    ],
    philosophy:
      'Desain yang baik bukan hanya soal tampilan, tetapi juga bagaimana orang berinteraksi dengannya.',
    experienceNote:
      'Praktik yang terus tumbuh — dibangun dari rasa ingin tahu, proyek mandiri, dan ketertarikan tulus pada cara orang menggunakan produk digital.',
    interests: [
      'Desain produk mobile',
      'Pengalaman kesehatan & kebugaran',
      'Design system',
      'Aksesibilitas & desain inklusif',
      'Storytelling visual',
    ],
    portraitNote:
      'Foto potret belum tersedia. Tampilan tipografis ini adalah placeholder yang disengaja — ganti dengan foto di bagian Tentang saat tersedia.',
  },
  contact: {
    headline: 'Punya proyek dalam pikiran? Mari ciptakan sesuatu yang bermakna.',
    description:
      'Saya selalu terbuka untuk terhubung, berkolaborasi, dan menjelajahi peluang baru di bidang desain UI/UX.',
    links: [
      {
        id: 'email',
        label: 'Email',
        value: 'lusianadeswita09@gmail.com',
        href: 'mailto:lusianadeswita09@gmail.com',
        placeholder: true,
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'Profil LinkedIn',
        href: 'https://www.linkedin.com/in/lusiana-deswita-a05891301/',
        placeholder: true,
      },
    ],
    cta: 'Sapa saya',
  },
  footer: {
    tagline: 'Dirancang dengan hati dan kreativitas.',
    note: 'Konsep portofolio · Semua karya yang ditampilkan adalah studi desain mandiri.',
  },
  navigation: [
    { label: 'Beranda', href: '/#home', sectionId: 'home' },
    { label: 'Tentang', href: '/#about', sectionId: 'about' },
    { label: 'Karya', href: '/#work', sectionId: 'work' },
    { label: 'Keahlian', href: '/#skills', sectionId: 'skills' },
    { label: 'Kontak', href: '/#contact', sectionId: 'contact' },
  ],
}

export const profiles: Record<Lang, Profile> = { en, id }

export type DesignPrinciple = {
  title: string
  description: string
}

const designPrinciplesEn: DesignPrinciple[] = [
  {
    title: 'Simplicity',
    description: 'Reduce until only the useful remains.',
  },
  {
    title: 'Usability',
    description: 'Design for real people in real moments.',
  },
  {
    title: 'Consistency',
    description: 'Build systems, not one-off screens.',
  },
  {
    title: 'Meaning',
    description: 'Every detail should serve a purpose.',
  },
]

const designPrinciplesId: DesignPrinciple[] = [
  {
    title: 'Kesederhanaan',
    description: 'Kurangi hingga hanya yang berguna tersisa.',
  },
  {
    title: 'Kegunaan',
    description: 'Merancang untuk orang nyata di momen nyata.',
  },
  {
    title: 'Konsistensi',
    description: 'Bangun sistem, bukan layar sekali pakai.',
  },
  {
    title: 'Makna',
    description: 'Setiap detail harus punya tujuan.',
  },
]

export const designPrinciples: Record<Lang, DesignPrinciple[]> = {
  en: designPrinciplesEn,
  id: designPrinciplesId,
}
