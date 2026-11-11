import MotionProvider from "@/components/MotionProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <MotionProvider>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Pricing />
        <Gallery />
        <Reviews />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFab />
    </MotionProvider>
  );
}
