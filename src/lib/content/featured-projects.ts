import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Medical Product Tracking using NSQR',
      description: 'A decentralized platform for reducing counterfeit medical products.',
      tasks: "Orchestrated creation of a blockchain-based solution utilizing NFTs, self-custodial wallets, and QR codes to verify authenticity of medical products, addressing 10.5% counterfeit drug problem as stated by World Health Organization. Overcame technical barriers in integrating self-custodial wallets with NFTs, ensuring seamless user experience and privacy. Authored a research paper outlining solution's scalability, with potential for application across 5+ product sectors.",
      url: 'https://github.com/ayushshah31/med_track',
      // img: 'https://github.com/ayushshah31/portfolio-website/blob/main/.github/images/fyp.jpg?raw=true',
      img: '/images/projects/fyp.jpg',
      // img: "https://raw.githubusercontent.com/ayushshah31/portfolio-website/refs/heads/main/.github/images/fyp.jpg?token=GHSAT0AAAAAACVZD3ZLIXX22K7UQTDXPW5KZ4ASFGA",
      tags: ['Blockchain', 'NextJs', 'Hardhat','Self Custodial Wallet', 'NFT', 'QR Code', 'Solidity'],
    },
    {
      id: getId(),
      name: 'Pistol Detection System',
      description: 'A Proposed Methodology for Real-Time Pistol Detection System',
      tasks:
        "Collaborated with IT department's assistant head on a research project wherein devised a system utilizing YOLOv5 to detect pistols in real-time from CCTV, it sends an alert to concerned authority upon detection. Authored and presented a paper on same at ICACTA conference in October 2023 with securing 2nd best paper of category",
      url: 'https://ieeexplore.ieee.org/document/10393546',
      // img: 'https://raw.githubusercontent.com/ayushshah31/portfolio-website/refs/heads/main/.github/images/image.png?token=GHSAT0AAAAAACVZD3ZLAOHFUK3KUOXKF6PIZ4ASQKA',
      img: '/images/projects/image.png',
      tags: [
        'YOLOv5',
        'Python',
        'OpenCV',
        'CCTV',
        'Real-Time',
        'Research Paper',
      ],
    },
    {
      id: getId(),
      name: 'Mantra Therapy',
      description:
        'A platform that redefines the way individuals find their life partners.',
      tasks: "Engaged with a client to design and engineer a spiritual mobile app aligning daily practices with lunar calendar, providing users with daily mantras and insights based on astrological influences. Coded a cross-platform mobile application in Flutter, incorporating a tithi tracker, mantra meditation options, and detailed insights for 16 tithis, all while adhering to client's design, requirements, and feedback. Delivered app in a one-month timeline, addressing client’s feedback and complying with App Store and Play Store policies for a smooth deployment. App gained over 50 users within first month of launch",
      url: 'https://github.com/ayushshah31/mantraTherapy',
      // img: 'https://raw.githubusercontent.com/ayushshah31/portfolio-website/refs/heads/main/.github/images/mantra_therapy.png?token=GHSAT0AAAAAACVZD3ZLH5XKUYECWGCK3EM4Z4ATCKA',
      img: '/images/projects/mantra_therapy.png',
      tags: ['Flutter', 'Dart', 'Firebase', 'Astrology', 'Spiritual', "App Store", "Play Store"],
    },
    {
      id: getId(),
      name: 'CDAC - Sum of N Squares',
      description: 'Interactive derivation of Sum of N Squares formula using 3D cubes.',
      tasks: "Collaborated with C-DAC India to help XII standard CBSE board students understand derivation of Sum of N squared formula implementing 3D cubes and an interactive User Interface. Engineered web application by synthesizing Next.js, React3D, and Tailwind CSS technologies",
      url: 'https://sumofnsquares.netlify.app/',
      // img: 'https://raw.githubusercontent.com/ayushshah31/portfolio-website/refs/heads/main/.github/images/nsquare.png?token=GHSAT0AAAAAACVZD3ZLOYKU5G4GEGFVOBRUZ4ATCSA',
      img: '/images/projects/nsquare.png',
      tags: ["NextJs", "React3D", "TailwindCSS", "3D Cubes", "CDAC", "CBSE Education", "Mathematics"],
    },
    
    // {
    //   id: getId(),
    //   name: 'Velvi Matrimony',
    //   description:
    //     'A platform that redefines the way individuals find their life partners.',
    //   tasks:
    //     'As a freelancer, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
    //   url: 'https://velvi.vercel.app/',
    //   img: 'https://i.postimg.cc/tRS4GvzJ/Screenshot-2024-02-27-at-5-48-49-PM.png',
    //   tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'APIs'],
    // },
    /*   {
      id: getId(),
      name: 'Integra',
      description: 'An AI-Powered Leads Generation Platform.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
      url: 'https://www.integraleads.xyz/',
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Express'],
    }, */

    // {
    //   id: getId(),
    //   name: 'Drafton',
    //   description: 'The AI-powered platform that simplifies proposal creation.',
    //   tasks:
    //     'I designed and developed the landing page and implemented the dashboard by creating a user interface and integrating APIs.',
    //   url: 'https://www.drafton.io/',
    //   img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
    //   tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    // },
  ],
};

export default featuredProjectsSection;
