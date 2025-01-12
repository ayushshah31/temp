import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Keck Medicine of USC',
      companyUrl: 'https://www.hayounlee.org/',
      role: 'Research Assistant',
      started: 'September 2024',
      upto: 'present',
      tasks: [
        'Enhance immune cell analysis workflows by providing a scalable solution to analyze datasets ranging from 1 GB to 100 GB stored on cloud platforms',
        'Develop a full-stack web application using Next.js, Django, Docker, Nginx, and Gunicorn, combining AWS EC2, Dropbox, and Google Drive APIs for seamless data access, while authoring two research papers on immune cell analysis methods'
      ],
    },
    {
      company: 'Kellog Northwestern Incubator Local',
      companyUrl: 'https://thinklocal.ai/',
      role: 'Lead Mobile App Developer and Backend Integrator',
      started: 'april 2024',
      upto: 'july 2024',
      tasks: [
        'Led development of an urban exploration platform for users having over 100 organizers on board, enabled users to book restaurant tables, reserve event tickets, and schedule activities',
        'Engineered mobile app with AWS DynamoDB, integrated backend systems, synchronized app features with website, and mentored junior developers, guiding app architecture and integration',
        'Conceptualized app prototype, facilitated its funding approval, and orchestrated its launch on both the App Store and Play Store getting over 50 beta testers'
      ],
    },
    {
      company: 'Harvard Medical School affiliated Mclean Hospital',
      companyUrl: 'https://spirit.mclean.harvard.edu/',
      role: 'Research Developer Intern - DigitalSoul',
      started: 'september 2022',
      upto: 'september 2023',
      tasks: [
        'Developed a digital tool enabling users to explore spirituality’s role in well-being through animated videos and interactive exercises, designed specifically for use in clinical research studies having over 50 patients',
        'Enhanced a Flutter app to capture user responses through interactive questionnaires and educational modules, optimized backend storage with AWS DynamoDB while implementing secure authentication through AWS Cognito',
        'Published app on App Store after thorough testing on TestFlight, and having over 1k impressions, improving data collection and facilitating clinicians in evaluating impact of spiritual well-being activities on patient outcomes',
        'Restructured the database on Amazon AWS’s DynamoDB using NodeJS to address data loss, and updated Node.js backend and optimized code for seamless data retrieval from the AWS database.',
        'Modified the Spirit Mclean website using WordPress and made the DigitalSoul webpage using HTML, CSS, and JavaScript.'
      ],
    },
    {
      company: 'Freelance',
      companyUrl: '/',
      role: 'Mobile Application Developer',
      started: 'july 2023',
      upto: 'august 2023',
      tasks: [
        'Engaged with a client to design and engineer a spiritual mobile app aligning daily practices with lunar calendar, providing users with daily mantras and insights based on astrological influences',
        "Coded a cross-platform mobile application in Flutter, incorporating a tithi tracker, mantra meditation options, and detailed insights for 16 tithis, all while adhering to client's design, requirements, and feedback",
        'Delivered app in a one-month timeline, addressing client’s feedback and complying with App Store and Play Store policies for a smooth deployment. App gained over 50 users within first month of launch'
      ],
    },
  ],
};
