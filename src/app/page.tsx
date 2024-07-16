import FeaturedCoursesSection from "@/components/FeaturedCoursesSection";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialSection from "@/components/TestimonialSection"
import UpcomingWebinarSection from "@/components/UpcomingWebinarSection";
import InstructorSection from "@/components/InstructorSection";


export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <HeroSection />
      <FeaturedCoursesSection />
      <WhyChooseUsSection />
      <TestimonialSection/>
      <UpcomingWebinarSection/>
      <InstructorSection/>
    </main>
  );
}
