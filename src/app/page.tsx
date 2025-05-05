
import Contacts from "./Components/Contacts";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}