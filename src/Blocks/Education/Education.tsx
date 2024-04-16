import { SectionTitle, Text } from "@/UI";

export function Education() {
  return (
    <article className="w-full">
      <SectionTitle>
        Education
      </SectionTitle>
      <Text variant="subtitle">Automation of technological processes in engineering</Text>
      <div className="flex">
        <Text variant="smallSubtitle">Moscow State Industrial University (MSIU)</Text>
        <Text variant="smallDate" className="ml-2">[2005-2010]</Text>
      </div>
      <Text className="mt-1">Automation of production lines, programming of industrial robots and microcontrollers</Text>
    </article>
  );
}
