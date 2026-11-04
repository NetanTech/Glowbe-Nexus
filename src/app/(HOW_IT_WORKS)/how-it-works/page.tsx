import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Hero from "./components/Hero";

export default function HowItWorksPage() {
  return (
    <div className="site-shell min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
      </main>
      <div className="bg-[#17253B]">
        <Footer />
      </div>
    </div>
  );
}
