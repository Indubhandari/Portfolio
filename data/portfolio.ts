import type { Stat, Service, WorkExperience, EducationEntry, Certification, SkillGroup, Project } from '@/types'

export const stats: Stat[] = [
  { value:'4+',  label:'Years Experience' },
  { value:'20+', label:'Projects Delivered' },
  { value:'15+', label:'Happy Clients' },
]

export const services: Service[] = [
  { icon:'search',  title:'UX Research',    desc:'User interviews, usability testing, and data analysis to ground every design decision in real human insights.' },
  { icon:'pen',     title:'UI Design',       desc:'Pixel-perfect, accessible interfaces with strong visual hierarchy, motion, and a consistent design language.' },
  { icon:'play',    title:'Prototyping',     desc:'Interactive prototypes from lo-fi wireframes to high-fidelity demos that validate ideas quickly and clearly.' },
  { icon:'grid',    title:'Design Systems',  desc:'Scalable component libraries and style guides that keep teams aligned and products consistent at any scale.' },
]

export const experiences: WorkExperience[] = [
  {
    role:'UI/UX Designer', company:'NexSewa Tech Corp.',
    period:'December 2025 – Present', current:true,
    bullets:[
      'Leading end-to-end product design for enterprise digital solutions',
      'Collaborating with cross-functional teams across multiple products',
      'Establishing scalable design systems and component libraries',
    ],
  },
  {
    role:'UI/UX Designer', company:'SkillPrompt',
    period:'2024 – December 2025',
    bullets:[
      'Designed core product flows for an EdTech platform serving thousands of users',
      'Improved key conversion metrics through research-backed UX decisions',
      'Led iterative prototyping cycles with regular stakeholder feedback',
    ],
  },
  {
    role:'UI/UX Design Intern', company:'SkillPrompt',
    period:'2023',
    bullets:[
      'Built UI components and design patterns for the core product',
      'Conducted usability tests and synthesized findings into action items',
      'Translated user research into improvements alongside senior designers',
    ],
  },
]

export const educationEntries: EducationEntry[] = [
  { degree:'B.Sc. IT (Hons)', institution:'ISMT College', period:'2022 – 2025' },
  { degree:'SEE', institution:'Shree Shanti Namuna School', period:'2021' },
]

export const certifications: Certification[] = [
  { name:'Fundamentals of UI/UX Principles', issuer:'Coursera' },
  { name:'Design & Prototyping Workshop',    issuer:'ISMT College · 7 days' },
  { name:'Principles of UI/UX Design',       issuer:'Code for Change · 10 days' },
]

export const skillGroups: SkillGroup[] = [
  { cat:'Design Tools',        items:['Figma','Adobe XD','FigJam'] },
  { cat:'Research & Strategy', items:['User Research','Usability Testing','Data Analysis','Information Architecture'] },
  { cat:'Development',         items:['HTML','CSS','JavaScript'] },
  { cat:'Design Practice',     items:['Mobile Design','Web Design','Responsive Design','Accessibility'] },
]

export const projects: Project[] = [
  { num:'01', title:'Consultancy CRM',    desc:"End-to-end UX redesign for a consultancy firm's CRM — streamlined client management flows and boosted conversion through research-backed decisions.", tags:['UX Research','Figma','Prototyping'],   accent:'#8B7FFF' },
  { num:'02', title:'Tech Company Website',desc:'Full website redesign from discovery to developer handoff — new sitemap, design system, and high-fidelity mockups for a growing tech firm.',    tags:['Web Design','Adobe XD','UI Systems'], accent:'#6EB5FF' },
  { num:'03', title:'CRM Landing Page',   desc:'Responsive web and mobile landing page for a SaaS CRM product, designed for clarity and user-onboarding conversion.',                            tags:['Responsive','Figma','Mobile'],        accent:'#FF6EA8' },
  { num:'04', title:'Barsita Academy',    desc:'Brand-forward web and mobile design for a barista training service — approachable, conversion-focused digital presence.',                         tags:['Mobile Design','Branding','Figma'],  accent:'#5AEDC8' },
]
