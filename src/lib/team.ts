import type { Localized } from './i18n'

export type TeamMember = {
  name: string
  role: Localized
  image: string
  skills: string[]
}

export const team: TeamMember[] = [
  { name: 'Efe Arda Arıç', role: { tr: 'Kurucu · Proje Yöneticisi', en: 'Co-founder · Project Manager' }, image: '/images/Arda.jpg', skills: ['Swift', 'Python', 'TypeScript'] },
  { name: 'Yusuf Güneş', role: { tr: 'Kurucu · Oyun Tasarımcısı', en: 'Co-founder · Game Designer' }, image: '/images/Yusuf.jpg', skills: ['Unity', 'C#', 'C++'] },
  { name: 'Haris Bedirhan Büyükbayrak', role: { tr: 'Kurucu · Sanat Yönetmeni', en: 'Co-founder · Art Director' }, image: '/images/Haris.jpg', skills: ['Unity', '3D', 'Game Design'] },
  { name: 'Muhammed Yasir Polat', role: { tr: 'Oyun Geliştirici', en: 'Game Developer' }, image: '/images/Yasir.jpg', skills: ['Unity', 'C#', 'SQL'] },
  { name: 'Mehmet Efe Gürmarmara', role: { tr: 'Yazılım Geliştirici', en: 'Software Developer' }, image: '/images/Marmara.jpg', skills: ['Python', 'Figma', 'R'] },
  { name: 'Berkan Cenan Demirer', role: { tr: 'Yazılım Geliştirici', en: 'Software Developer' }, image: '/images/cenan.png', skills: ['Unity', 'C++', 'UE5'] },
  { name: 'Göksu Çakmak', role: { tr: '2D Sanatçı', en: '2D Artist' }, image: '/images/goksu.jpeg', skills: ['Photoshop', 'Clip Studio'] },
  { name: 'Sevgi Zeynep Duran', role: { tr: 'Piksel Sanatçı', en: 'Pixel Artist' }, image: '/images/sevgi.jpeg', skills: ['Aseprite', 'Spine 2D'] },
]
