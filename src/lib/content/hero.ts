import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'ayush shah.',
  tagline: "Building the future, one website and app at a time!",
  // description:
  //   "I'm a passionate Full-Stack web developer with hands-on experience in building web applications using React.js & Next.js with TypeScript, TailwindCSS, and Prisma, with UI/UX designing.",
  description: "I am a skilled full-stack developer with expertise in technologies like Flutter, NextJs, Django, Node.js, Firebase, and AWS, building responsive websites and seamless mobile applications, published on the App Store and Play Store.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
