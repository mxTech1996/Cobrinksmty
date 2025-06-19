// components/FeaturedServices.js

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

// La estructura de servicios que proporcionaste
const services = dataSite.services;

const FeaturedServices = () => {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99], // Curva de easing suave
      },
    },
  };

  return (
    <section className='bg-white py-20 lg:py-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-4xl md:text-5xl font-serif text-gray-900'>
            Our Suite of Services
          </h2>
          <p className='mt-4 text-gray-700 max-w-2xl mx-auto'>
            We offer a comprehensive range of services designed to address every
            facet of the modern home furnishings retail business.
          </p>
        </motion.div>

        <div className='space-y-20'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* --- Columna de la Imagen --- */}
              {/* La clase 'order-last' se aplica en la imagen para filas impares en pantallas grandes */}
              <div
                className={`w-full aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden ${
                  index % 2 !== 0 ? 'lg:order-last' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-500 ease-in-out hover:scale-105'
                />
              </div>

              {/* --- Columna de Texto --- */}
              <div className='text-left'>
                <h3 className='text-3xl font-serif text-gray-900'>
                  {service.title}
                </h3>
                <p className='mt-4 text-gray-700'>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
