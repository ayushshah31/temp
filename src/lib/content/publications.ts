import { PublicationsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const publicationsSection: PublicationsSectionType = {
  title: 'My Publications',
  publications: [
    {
      id: getId(),
      name: 'Proposed Methodology for Real-Time Weapon Detection System',
      link: 'https://ieeexplore.ieee.org/document/10393546',
      year: 2023,
      img: '/images/publications/p1.png',
    },
    // {
    //   id: getId(),
    //   name: 'Proposed Methodology for Real-Time Weapon Detection System',
    //   link: 'https://ieeexplore.ieee.org/document/10393546',
    //   year: 2025,
    //   img: '/images/publications/p1.png',
    // }
  ],
};