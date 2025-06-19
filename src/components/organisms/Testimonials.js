// components/TestimonialsSlider.js
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { dataSite } from '@/data';

// La data que proporcionaste
const references = dataSite.references;

// Función para obtener las iniciales de un nombre
const getInitials = (name) => {
  const words = name.split(' ');
  if (words.length > 1) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const TestimonialsSlider = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    // Calcula el ancho total del carrusel (incluyendo lo que no se ve)
    // para limitar el deslizamiento y que no se vaya al infinito.
    const carouselWidth = carouselRef.current.scrollWidth;
    const viewportWidth = carouselRef.current.offsetWidth;
    setWidth(carouselWidth - viewportWidth);
  }, []);

  return (
    <section id='testimonials' className='bg-[#fdf8f0] py-20 lg:py-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          className='text-4xl md:text-5xl font-serif text-gray-900 text-center mb-12'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          What People Say About Us
        </motion.h2>
      </div>

      <motion.div
        ref={carouselRef}
        className='cursor-grab overflow-hidden'
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className='flex space-x-6 px-4 sm:px-6 lg:px-8'
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
        >
          {references.map((ref, index) => (
            <div
              key={index}
              className='flex-shrink-0 w-[80%] md:w-[40%] lg:w-[30%]'
            >
              <div className='bg-white p-8 rounded-3xl shadow-sm h-full flex flex-col'>
                <div className='flex-shrink-0'>
                  {ref.image ? (
                    <img
                      src={ref.image}
                      alt={ref.name}
                      className='w-14 h-14 rounded-full object-cover'
                    />
                  ) : (
                    <div className='w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold'>
                      {getInitials(ref.name)}
                    </div>
                  )}
                </div>
                <div className='mt-6 flex-grow'>
                  <FaQuoteLeft className='text-gray-200 text-4xl' />
                  <p className='text-gray-700 mt-4'>{ref.description}</p>
                </div>
                <p className='mt-6 font-bold text-gray-900 flex-shrink-0'>
                  {ref.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSlider;
