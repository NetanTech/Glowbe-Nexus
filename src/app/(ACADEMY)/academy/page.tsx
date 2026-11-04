import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Faq from "@/src/components/Faq";
import Hero from "./components/Hero";
import Mentorship from "./components/Mentorship";
import OurCourses from "./components/OurCourses";
import WhyChooseUs from "./components/WhyChooseUs";

export default function AcademyPage() {
  return (
    <div className="site-shell min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <div className="bg-black">
          <OurCourses />
          <Mentorship />
        </div>
        <div className="bg-[#17253B]">
          <Faq />
          <Footer />
        </div>
      </main>
    </div>
  );
}
