// components/CharityHero.js

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- IMÁGENES DE EJEMPLO ---
// Reemplaza estas rutas con las de tus propias imágenes en la carpeta /public
const mainImageSrc = dataSite.image_hero;
const smallImage1Src = dataSite.image_hero2;
const smallImage2Src = dataSite.services[0].image;

const Hero = () => {
  // Variantes para animar la aparición de los elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className='w-full bg-[#fdf8f0] py-16 lg:py-24 overflow-hidden'>
      <motion.div
        className='container mx-auto px-4 sm:px-6 lg:px-8'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='flex justify-between items-start mb-12'>
          <motion.h1
            className='text-4xl md:text-6xl font-serif text-gray-800 max-w-lg'
            variants={itemVariants}
          >
            Opportunity to change the lives of others
          </motion.h1>
          <motion.a
            href='#products'
            className='hidden md:flex items-center space-x-3 border border-gray-400 rounded-full px-5 py-2 text-sm text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors'
            variants={itemVariants}
          >
            <span className='w-2 h-2 bg-gray-800 rounded-full group-hover:bg-white'></span>
            <span>View More</span>
          </motion.a>
        </div>

        {/* --- Contenedor de las Imágenes --- */}
        <motion.div
          className='relative mx-auto w-full max-w-4xl h-[300px] md:h-[500px]'
          variants={imageVariants}
        >
          {/* Imagen pequeña 1 (Izquierda) */}
          <motion.div
            className='absolute top-0 left-0 w-32 h-24 md:w-56 md:h-40 shadow-lg z-10'
            initial={{ x: '-50%', y: '-50%', opacity: 0, rotate: -15 }}
            animate={{ x: '-20%', y: '10%', opacity: 1, rotate: -8 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Image
              src={smallImage1Src}
              alt='Community hands together'
              layout='fill'
              objectFit='cover'
              className='rounded-2xl'
            />
          </motion.div>

          {/* Imagen Principal (Centro) */}
          <div className='absolute inset-0 w-full h-full'>
            <Image
              src={mainImageSrc}
              alt='Happy family benefiting from the cause'
              layout='fill'
              objectFit='cover'
              className='rounded-3xl shadow-xl'
              priority
            />
          </div>

          {/* Imagen pequeña 2 (Derecha) */}
          <motion.div
            className='absolute -top-8 right-0 w-28 h-40 md:w-40 md:h-56 shadow-lg z-10'
            initial={{ x: '50%', y: '-50%', opacity: 0, rotate: 15 }}
            animate={{ x: '20%', y: '10%', opacity: 1, rotate: 5 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <Image
              src={smallImage2Src}
              alt='Heartfelt symbol of the cause'
              layout='fill'
              objectFit='cover'
              className='rounded-2xl'
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
