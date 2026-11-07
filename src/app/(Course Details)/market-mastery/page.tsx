import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Hero from "./components/Hero";
import CourseDetails from "./components/CourseDetails";

export default function MarketMasteryPage() {
  return (
    <div className="site-shell min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="bg-[#17253B]">
          <CourseDetails />
          <Footer />
        </div>
      </main>
    </div>
  );
}
