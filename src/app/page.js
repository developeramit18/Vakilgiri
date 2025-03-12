import Testimonials from "./common/Testimonials";
import WhyChooseUs from "./common/WhyChooseUs";
import Blog from "./components/homepage/Blog";
import LegalInforSection from "./components/homepage/LegalInforSection";
import ServiceSection from "./components/homepage/ServiceSection";
import SliderSection from "./components/homepage/SliderSection";

export default function Home() {
  return (
    <main>
      {/* Slider Section */}
      <SliderSection />

      {/* Legal Information Section */}
      <LegalInforSection />

      {/* Service Section */}
      <ServiceSection />

      {/* Blog section */}
      <Blog/>
      
      {/* Testimonials SEction */}
      <Testimonials/>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

    </main>
  );
}
