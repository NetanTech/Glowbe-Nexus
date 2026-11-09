import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Hero from "./components/Hero";
import Values from "./components/Values";
import VisionMission from "./components/VisionMission";

export default function AboutPage() {
  return (
    <div className="site-shell min-h-screen bg-[#17253B]">
      <div className="relative z-10">
        <Header />
        <main>
          <div className="bg-white">
            <Hero />
            <VisionMission />
          </div>
          <div className="bg-[#17253B]">
            <Values />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
