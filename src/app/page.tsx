import Banner from '@/app/HomeComponents/Banner'
// import CustomSlider from './HomeComponents/CustomSlider';
import WhyChooseUs from './HomeComponents/WhyChooseUs';
import StatsSection from './HomeComponents/StatsSection';
import ServicesCarousel from './HomeComponents/ServicesCarousel';
import Testimonials from './HomeComponents/Testimonials';
import SpecialOffersSection from './HomeComponents/SpecialOffersSection';
import HowWork from './HomeComponents/HowWork';
import AboutSection from './HomeComponents/AboutSection';

export default function Home() {
  return (
    <>
    <Banner/>
    {/* <CustomSlider/> */}
    <AboutSection/>
    <HowWork />
    <WhyChooseUs/>
    <ServicesCarousel/>
    <StatsSection/>
    <Testimonials />
    <SpecialOffersSection/>
  
    </>
  );
}
