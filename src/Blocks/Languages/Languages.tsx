import { SectionTitle, Text } from "@/UI";

export function Languages() {
  return (
    <article className="w-full">
      <SectionTitle>
        Languages
      </SectionTitle>
      <Text variant="subtitle">English</Text>
      <div className="italic font-semibold text-slate-800 text-xs">
        Professional working proficiency
        <span className="non-italic text-slate-600 ml-2">(B1-B2)</span>
      </div>

      <Text variant="subtitle" className="mt-3">Russian</Text>
      <div className="italic font-semibold text-slate-800 text-xs">
        Native proficiency
      </div>
    </article>
  );
}
