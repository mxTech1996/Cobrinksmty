// components/ConsultingServices.js

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';
import Image from 'next/image';

// La estructura de productos/servicios que proporcionaste
const products = dataSite.products;

const ConsultingProducts = () => {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  // Variante para el contenedor de la cuadrícula, que anima a sus hijos en secuencia
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Anima cada hijo con un retraso de 0.2s
      },
    },
  };

  // Variante para cada una de las tarjetas de servicio
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id='products' className='bg-slate-50 py-20 lg:py-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* --- Cabecera de la Sección --- */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
          <div className='lg:col-span-1'>
            <p className='text-sm font-semibold text-gray-600 mb-2'>
              Our Services
            </p>
            <h2 className='text-4xl md:text-5xl font-serif text-gray-900 leading-tight'>
              Service Packages
            </h2>
          </div>
          <div className='lg:col-span-2 flex items-center'>
            <p className='text-gray-700 max-w-2xl'>
              At our consultancy, we believe a well-defined strategy is the
              foundation of retail success. Our service packages are designed to
              provide targeted, expert support to help your home furnishings
              business thrive in a competitive market.
            </p>
          </div>
        </div>

        {/* --- Cuadrícula de Servicios --- */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={gridContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Mostramos los primeros 3 servicios para igualar el layout de la imagen */}
          {products.map((service) => {
            const isInCart = validateProductInCart(service.id);
            const handleClick = () => {
              handleAddOrRemoveProduct(service.id);
            };
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <div className='text-left'>
                  <h3 className='text-xl font-bold text-gray-900'>
                    {service.name}
                  </h3>
                  <p className='text-sm text-gray-600 mt-2 h-20'>
                    {service.description}
                  </p>
                </div>

                <div className='mt-4 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'>
                  <Image
                    src={service.image}
                    layout='fill'
                    alt={service.name}
                    objectFit='cover'
                    className='transition-transform duration-300 hover:scale-105 mt-10 object-contain'
                  />
                </div>

                <div className='flex justify-between items-center mt-4'>
                  <p className='font-bold text-lg text-gray-900'>
                    ${parseFloat(service.price).toFixed(2)}
                  </p>
                  <button
                    onClick={handleClick}
                    className='bg-black text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-800 transition-colors'
                    style={{ backgroundColor: isInCart ? '#e3342f' : '#000' }}
                  >
                    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingProducts;
