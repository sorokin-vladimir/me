import { SectionTitle, Text } from "@/UI";

export function Languages() {
  return (
    <article className="w-full">
      <SectionTitle>
        Languages
      </SectionTitle>
      <Text variant="subtitle">
        English
        <span className="italic font-semibold text-slate-800 text-xs ml-2">
          Professional working proficiency
          <span className="non-italic text-slate-600 ml-2">(B1-B2)</span>
        </span>
      </Text>

      <Text variant="subtitle">
        Russian
        <span className="italic font-semibold text-slate-800 text-xs ml-2">
          Native proficiency
        </span>
      </Text>
    </article>
  );
}
