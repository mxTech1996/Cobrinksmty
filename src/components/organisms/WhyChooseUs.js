// components/WhyChooseUs.js

import { motion } from 'framer-motion';
// Iconos relevantes para el comercio de muebles
import { FiTrendingUp, FiUsers } from 'react-icons/fi';
import { IoStorefrontOutline } from 'react-icons/io5';

// Datos de las características para mantener el código limpio
const features = [
  {
    icon: <FiTrendingUp size={32} />,
    title: 'Market Trend Analysis',
    description:
      'Our commitment to data ensures your inventory stays ahead of the curve.',
  },
  {
    icon: <IoStorefrontOutline size={32} />,
    title: 'Retail Space & Experience Design',
    description:
      'We invest in creating immersive retail environments that drive customer engagement.',
  },
  {
    icon: <FiUsers size={32} />,
    title: 'Customer-Centric Strategy',
    description:
      'In times of change, we help you respond swiftly to build lasting customer loyalty.',
  },
];

const WhyChooseUs = () => {
  // Variantes para el contenedor principal
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variantes para los elementos de la izquierda y la columna de la derecha
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='why-choose-us' className='bg-[#fdf8f0] py-20 lg:py-28'>
      <motion.div
        className='container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center'
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* --- Columna Izquierda (Texto y Botón) --- */}
        <motion.div variants={itemVariants}>
          <p className='text-sm font-semibold text-gray-600 mb-2'>
            Our Expertise
          </p>
          <h2 className='text-4xl md:text-5xl font-serif text-gray-900 leading-tight'>
            Why Partners Choose Us?
          </h2>
          <p className='mt-4 text-gray-700 max-w-md'>
            At our core, we prioritize data-driven strategy, market insight, and
            brand integrity. These values guide our actions as we work to bridge
            the gap between our clients&#39; vision and market success.
          </p>
          <a
            href='/more-information'
            className='inline-flex items-center mt-8 px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors'
          >
            <span className='w-2 h-2 bg-white rounded-full mr-2'></span>
            Schedule a Consultation
          </a>
        </motion.div>

        {/* --- Columna Derecha (Características) --- */}
        <motion.div className='space-y-4' variants={itemVariants}>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm flex items-center space-x-6'
            >
              <div className='text-gray-800'>{feature.icon}</div>
              <div>
                <h3 className='font-bold text-lg text-gray-900'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 text-sm'>{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
