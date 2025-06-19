'use client';

import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import MissionAndServices from '@/components/organisms/Mission';
import Navbar from '@/components/organisms/Navbar';
import ConsultingProducts from '@/components/organisms/Products';
import FeaturedServices from '@/components/organisms/Services';
import TestimonialsSlider from '@/components/organisms/Testimonials';
import WhyChooseUs from '@/components/organisms/WhyChooseUs';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <MissionAndServices />

      <ConsultingProducts />
      <FeaturedServices />
      <TestimonialsSlider />
      <Footer />
    </main>
  );
}
