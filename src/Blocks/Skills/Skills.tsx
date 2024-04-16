import { SectionTitle, Text } from '@/UI';
import data from './data.json';

export function Skills() {
  return (
    <article className="w-full">
      <SectionTitle>
        Skills
      </SectionTitle>
      <Text>
        {data.main.map(skill => <span key={skill}> {skill}, </span>)}
        {data.fetch_state.map(skill => <span key={skill}> {skill}, </span>)}
        {data.test.map(skill => <span key={skill}> {skill}, </span>)}
        {data.basic.map(skill => <span key={skill}> {skill}, </span>)}
        {data.additional.map((skill, idx) => <span key={skill}>
          {' '}{skill}
          {data.additional.length + 1 === idx ? '' : ', '}
          </span>)}
      </Text>
    </article>
  );
}
