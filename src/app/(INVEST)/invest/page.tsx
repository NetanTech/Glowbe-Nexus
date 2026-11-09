import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Faq from "@/src/components/Faq";
import Hero from "./components/Hero";
import InvestmentCalculator from "./components/InvestmentCalculator";
import InvestmentPlans from "./components/InvestmentPlans";

export default function InvestPage() {
  return (
    <div className="site-shell min-h-screen bg-[#17253B]">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <div className="bg-black">
            <InvestmentPlans />
            <InvestmentCalculator />
          </div>
          <div className="bg-[#17253B]">
            <Faq />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
