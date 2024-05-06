import { SectionTitle, Work, Years } from "@/UI";
import data from './data.json';
import { IconPointFilled } from "@tabler/icons-react";

export function Experience() {
  const dotClass = 'w-1 h-1 min-w-1 min-h-1 max-w-1 max-h-1 rounded-full bg-slate-600 mr-2 mt-1.5';

  return (
    <article className="w-full">
      <SectionTitle>
        Experience <Years year={'12 April 2017'} />
      </SectionTitle>
      {
        data.experience.map((work, idx) => (
          <Work
            key={`${work.role}_${work.company}`}
            role={work.role}
            company={work.company}
            country={work.country}
            dateStart={work.dateStart}
            dateEnd={work.dateEnd}
            stack={work.stack}
            className={data.experience.length - 1 === idx ? '' : 'mb-1.5'}
          >
            {work.description.common}
            {work.description.responsibilities && work.description.responsibilities.map((responsibility, idx) => (
              <div className="ml-4 flex" key={idx}>
                <div className={dotClass} />
                {responsibility}
              </div>
            ))}
            {work.description.common2}
            {work.description.achievements.map((achievement, idx) => (
              <div className="ml-4 flex" key={idx}>
                <div className={dotClass} />
                {achievement}
              </div>
            ))}
          </Work>
        ))
      }
    </article>
  );
}
