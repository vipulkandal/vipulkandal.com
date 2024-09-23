import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5'>
      <Header />
      <Hero />
      <Skills />
      <WorkExperience />
      <Contact />
    </main>
  );
}
