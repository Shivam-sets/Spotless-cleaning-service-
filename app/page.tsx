import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Gallery } from "@/components/sections/Gallery";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Faq } from "@/components/sections/Faq";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Process />
        <Stats />
        <Gallery />
        <BeforeAfter />
        <About />
        <Testimonials />
        <ServiceArea />
        <QuoteForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
