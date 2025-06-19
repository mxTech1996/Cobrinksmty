// components/MissionAndServices.js

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Iconos relevantes para los servicios de consultoría
import { FiMonitor, FiShoppingBag, FiTruck, FiLayers } from 'react-icons/fi';

console.log('icons', FiMonitor, FiShoppingBag, FiTruck, FiLayers);
// La estructura de datos que proporcionaste
const info = [
  {
    title: 'Market Analysis and Strategy Development',
    description:
      'Providing insights into market trends, competitive landscapes, and developing strategic plans for business expansion and positioning.',
  },
  {
    title: 'E-commerce and Digital Transformation',
    description:
      'Assisting furniture retailers in building robust online platforms, optimizing user experience (UX) and search engine visibility (SEO).',
  },
  {
    title: 'Product & Visual Merchandising',
    description:
      'Offering guidance on product assortment, design, sourcing, and effective visual merchandising strategies for online and physical stores.',
  },
  {
    title: 'Supply Chain Optimization',
    description:
      'Consulting on improving logistics, inventory management, and overall supply chain efficiency to reduce costs and enhance delivery.',
  },
  {
    title: 'Sustainability Consulting',
    description:
      'Advising on integrating environmentally and socially responsible practices into business models and product offerings.',
  },
];

// Asignamos un icono a cada uno de los 4 servicios de la cuadrícula
const serviceIcons = [
  <FiMonitor key='monitor' size={24} />,
  <FiShoppingBag key='shoppingbag' size={24} />,
  <FiTruck key='truck' size={24} />,
  <FiLayers key='leaf' size={24} />,
];

const MissionAndServices = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='know-us' className='bg-white py-20 lg:py-28'>
      <motion.div
        className='container mx-auto px-4 sm:px-6 lg:px-8'
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* --- Fila Superior: Misión --- */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            className='w-full aspect-w-16 aspect-h-10 rounded-lg overflow-hidden'
            variants={itemVariants}
          >
            {/* Reemplaza esta imagen por una relevante para tu negocio */}
            <Image
              src={dataSite.services[2].image}
              alt='Consulting team in a meeting'
              layout='fill'
              objectFit='cover'
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className='text-sm font-semibold text-gray-600 mb-2'>
              Our Core Philosophy
            </p>
            <h2 className='text-4xl md:text-5xl font-serif text-gray-900 leading-tight'>
              Our Mission: To Elevate Retail
            </h2>
            {/* Usamos el primer elemento del array para esta descripción */}
            <p className='mt-4 text-gray-700'>{info[0].description}</p>
          </motion.div>
        </div>

        {/* --- Fila Inferior: Servicios Clave --- */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-20'
          variants={sectionVariants} // Reutilizamos las variantes para un efecto anidado
        >
          {/* Usamos los siguientes 4 elementos para la cuadrícula */}
          {info.slice(1, 5).map((service, index) => (
            <motion.div
              key={index}
              className='flex items-start space-x-4'
              variants={itemVariants}
            >
              <div className='flex-shrink-0 text-red-500 mt-1'>
                {serviceIcons[index]}
              </div>
              <div>
                <h3 className='text-lg font-bold text-gray-900'>
                  {service.title}
                </h3>
                <p className='text-gray-600 mt-1'>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionAndServices;
