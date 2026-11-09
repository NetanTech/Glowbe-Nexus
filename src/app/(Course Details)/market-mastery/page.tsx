import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Hero from "./components/Hero";
import CourseDetails from "./components/CourseDetails";

export default function MarketMasteryPage() {
  return (
    <div className="site-shell min-h-screen bg-[#17253B]">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <div className="bg-[#17253B]">
            <CourseDetails />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
