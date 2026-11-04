import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Hero from "./components/Hero";
import Values from "./components/Values";
import VisionMission from "./components/VisionMission";

export default function AboutPage() {
  return (
    <div className="site-shell min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <VisionMission />
        <div className="bg-[#17253B]">
          <Values />
          <Footer />
        </div>
      </main>
    </div>
  );
}
