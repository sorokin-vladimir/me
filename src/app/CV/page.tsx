import { AboutMe, Contacts, Education, Experience, Languages, Skills } from "@/Blocks";

export default function Page() {
  return (
    <main className="flex justify-center min-h-screen w-full">
      <article className="w-[210mm] max-w-[210mm] px-[37px] print:px-0">
        <section className="flex flex-col items-center min-h-screen w-full">
          <Contacts />
          <AboutMe />
          <Skills />
          <Experience />
          <Education />
          <Languages />
        </section>
      </article>
    </main>
  );
}
