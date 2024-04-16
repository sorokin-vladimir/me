import { SectionTitle } from "@/UI";

export function Languages() {
  return (
    <article className="w-full">
      <SectionTitle>
        Languages
      </SectionTitle>
      <div className="font-bold text-lg">English</div>
      <div className="italic font-semibold text-slate-800 text-xs">
        Professional working proficiency
        <span className="non-italic text-slate-600 ml-2">(B1-B2)</span>
      </div>

      <div className="font-bold text-lg mt-3">Russian</div>
      <div className="italic font-semibold text-slate-800 text-xs">
        Native proficiency
      </div>
    </article>
  );
}
