import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Requirements } from "@/components/sections/Requirements";
import { Curriculum } from "@/components/sections/Curriculum";
import { Instructor } from "@/components/sections/Instructor";
import { Community } from "@/components/sections/Community";
import { ApplicationForm } from "@/components/sections/ApplicationForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Requirements />
        <Curriculum />
        <Instructor />
        <Community />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
