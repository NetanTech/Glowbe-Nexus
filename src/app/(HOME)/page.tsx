import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Faq from "@/src/components/Faq";
import CoreFeatures from "./components/CoreFeatures";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="site-shell min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="bg-black">
          <CoreFeatures />
          <HowItWorks />
        </div>
        <Testimonials />

        <div className="bg-[#17253B]">
          <Faq />
          <Footer />
        </div>
      </main>
    </div>
  );
}

