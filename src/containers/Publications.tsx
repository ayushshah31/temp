'use client';
import { publicationsSection } from '@/lib/content/publications';
import { PAPERS_INITIALLY } from '@/lib/utils/config';
import { sortPaperByYear } from '@/lib/utils/helper';

import { Button, Wrapper } from '@/components';
import PublicationCard from '@/components/ui/PublicationCard';

import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const { publications, title } = publicationsSection;
  const [showMore, setShowMore] = useState(false);
  const topPublications = publications.slice(0, PAPERS_INITIALLY);

  const visiblePublications = showMore ? publications : topPublications;

  return (
    <Wrapper animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center !mb-12">
        {title}
      </motion.h2>
      <div className="grid gap-6 grid-cols-auto-500 xs:grid-cols-auto-500 place-items-center justify-center">
        {sortPaperByYear(visiblePublications).map((publications, i) => {
          if (i < PAPERS_INITIALLY) {
            return (
              <PublicationCard
                {...publications}
                key={publications.id}
                variants={projectVariants}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
              />
            );
          }

          return (
            <PublicationCard
              {...publications}
              key={publications.id}
              variants={projectVariants}
              initial="hidden"
              animate="show"
              custom={i - PAPERS_INITIALLY}
            />
          );
        })}
      </div>
      {publications.length > PAPERS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-20"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'show less' : 'show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Projects;
