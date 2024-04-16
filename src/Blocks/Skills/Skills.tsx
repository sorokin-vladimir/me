import { SectionTitle } from '@/UI';
import data from './data.json';

export function Skills() {
  return (
    <article className="w-full">
      <SectionTitle>
        Skills
      </SectionTitle>
      <div>
        {data.main.map(skill => <span key={skill}> {skill}, </span>)}
        {data.fetch_state.map(skill => <span key={skill}> {skill}, </span>)}
        {data.test.map(skill => <span key={skill}> {skill}, </span>)}
        {data.basic.map(skill => <span key={skill}> {skill}, </span>)}
        {data.additional.map(skill => <span key={skill}> {skill}</span>)}
      </div>
    </article>
  );
}
