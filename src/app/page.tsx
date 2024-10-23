import FeaturedFood from "@/components/FeaturedFood";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ServiceSection from "@/components/ServiceSection";
import SurveySection from "@/components/SurveySection";


export default function Home() {
  return (
      <div>
        <Hero />
        <FeaturedFood />
        <ServiceSection />
        <MenuSection />
        <SurveySection />
      </div>
  );
}
