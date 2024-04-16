import { Contacts, } from "@/Blocks";
import { CurrentDate, Paragraph } from "@/UI";

export default function Page() {
  return (
    <main className="flex justify-center min-h-screen w-full">
      <article className="w-[210mm] max-w-[210mm]">
        <section className="flex flex-col items-center min-h-screen w-full">
          <Contacts variant="short" />
          <CurrentDate />

          <Paragraph>
            Dear &#9733; Name/Hiring Manager/Recruiting Team &#9733;,
          </Paragraph>

          <Paragraph>
            My name is Vladimir, and I would like to express my interest in the &#9733; Senior Frontend Engineer &#9733; position, the announcement of which I saw on &#9733; LinkedIn/Indeed/Otta/Your website/etc &#9733;.
          </Paragraph>

          <Paragraph>
            As you can see in my attached resume, I have over 7 years of experience in the IT industry, including the last 4 years in a position similar to yours. My experience includes successful implementation of complex services, performance optimization, and development of new components using advanced methods and tools.
          </Paragraph>

          <Paragraph>
            I am confident that I am the candidate you are looking for because my primary technical stack fully matches your requirements, I have sufficient experience, I always easily establish rapport with colleagues, and I quickly assimilate into new projects. &#9733;&#9733;&#9733;
          </Paragraph>

          <Paragraph>
            I am confident that my skills and experience can enhance the interface of your product even further, and I am ready to discuss how I can contribute to your team. In my LinkedIn profile (link provided above), you can find recommendations from my former colleagues and supervisors. I would be glad to connect with you to understand how I can be valuable to your company.
          </Paragraph>

          <Paragraph>
            Looking forward to hearing from you
            <br />
            Vladimir Sorokin
          </Paragraph>
        </section>
      </article>
    </main>
  );
}
