import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Technology } from "@/components/sections/Technology";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { About } from "@/components/sections/About";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Intro />
      <Services />
      <Solutions />
      <Technology />
      <Process />
      <WhyUs />
      <About />
      <CtaBanner />
      <Contact />
    </>
  );
}
