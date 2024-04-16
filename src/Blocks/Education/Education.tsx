import { SectionTitle } from "@/UI";

export function Education() {
  return (
    <article className="w-full">
      <SectionTitle>
        Education
      </SectionTitle>
      <div className="font-bold text-lg">Automation of technological processes in engineering</div>
      <div className="flex">
        <div className="italic font-semibold text-slate-800 text-xs">Moscow State Industrial University (MSIU)</div>
        <div className="ml-2 text-slate-600 text-xs">[2005-2010]</div>
      </div>
      <div className="mt-1 text-xs">Automation of production lines, programming of industrial robots and microcontrollers</div>
    </article>
  );
}
