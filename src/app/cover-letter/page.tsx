import { Contacts, } from "@/Blocks";
import {  Paragraph } from "@/UI";

export default function Page() {
  return (
    <main className="flex justify-center min-h-screen w-full">
      <article className="w-[210mm] max-w-[210mm] px-[37px] print:px-0">
        <section className="flex flex-col items-center min-h-screen w-full">
          <Contacts variant="short" />
          {/* <CurrentDate /> */}

          <Paragraph className="mt-4">
            Dear &#9733; Name/Hiring Manager/Recruiting Team &#9733;,
          </Paragraph>

          <Paragraph>
            I would like to express my interest in the &#9733; Senior Frontend Engineer &#9733; position.
          </Paragraph>

          <Paragraph>
            I am a Frontend Engineer with over 7 years of experience in the IT industry, including the last 4 years in a position similar to your vacancy. My experience includes successful implementation of complex services, performance optimization, and development of new components using advanced methods and tools.
          </Paragraph>

          <Paragraph>
            I am confident that I am a good fit for you because my skill set aligns with your requirements, I have ample experience in a position similar to yours, I always find it easy to communicate with colleagues, I have worked on complex projects, and challenging tasks motivate me. &#9733;&#9733;&#9733;
          </Paragraph>

          <Paragraph>
            My skills and experience will enhance the interface of your product, and I will be able to contribute to the work of your team. In my LinkedIn profile (the link is provided above), you can find more information about me. I would be happy to discuss with you to understand how I can be valuable to your company.
          </Paragraph>

          <Paragraph>
            Looking forward to hearing from you
          </Paragraph>
        </section>
      </article>
    </main>
  );
}
